import React, { useState, useEffect } from "react";
import { Heading, Toggle, Input, Button, Progress } from "../../components";
import classes from "../../styles/containers/music.module.scss";
import { AiOutlineDelete } from "react-icons/ai";
import {
  ref as storageRefElem,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import storage, { db } from "../../firebase/config";
import { useSave } from "../../hooks/DashboardHooks/useSave";
import { getDatabase, ref, child, get } from "firebase/database";
import { ButtonColorEnum } from "../../utils/global.types";
import Image from "next/image";

interface DataInterface {
  name: string;
  url: string;
  image: string;
}

function musics() {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { handleSaveButton } = useSave();
  const [progress, setProgress] = useState<number>(0);
  const [data, setData] = useState<DataInterface[]>([]);
  const [image, setImage] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files;

    const firstElement = selected && selected[0];

    if (firstElement && firstElement.type === "audio/mpeg") {
      console.log("salam");
      setFile(firstElement);
    }
  };

  const handleSave = () => {
    setLoading(true);
    console.log(file, "file");
    let storageRef;

    if (file) {
      setUrl(null);
      storageRef = storageRefElem(storage, `/files/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          setProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        },
        (err) => setError(err.message),
        async () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
            const createdAt = new Date();
            console.log(url, "url");

            const dbRef = ref(getDatabase());
            const snapshot = await get(child(dbRef, `files/`));

            if (snapshot.exists()) {
              handleSaveButton("files/", [
                {
                  image: image,
                  name: file.name,
                  url: url,
                },
                ...snapshot.val(),
              ]);

              setData([
                {
                  image: image,
                  name: file.name.split(".")[0],
                  url: url,
                },
                ...snapshot.val(),
              ]);
            } else {
              handleSaveButton("files/", [
                {
                  name: file.name.split(".")[0],
                  url: url,
                  createdAt: createdAt,
                },
              ]);

              setData([
                {
                  name: file.name.split(".")[0],
                  url: url,
                  image: image,
                },
              ]);
            }
            setUrl(url);
            setLoading(false);
            setImage("");
            setFile(null);
            setProgress(0);
          });
        }
      );
    }
  };

  return (
    <div className="without_avatar">
      <Heading type="big">Music</Heading>
      <br />
      <br />
      <Toggle header="Musics in Database">
        <div className={classes.musiclist}>
          {data.map((music) => {
            return (
              <div key={music?.url} className={classes.musiclistdb}>
                <p>{music?.name}</p>
                <AiOutlineDelete />
              </div>
            );
          })}
        </div>
      </Toggle>

      <br />

      {loading && (
        <div className={classes.musiclist__loader}>
          <div>
            <Image
              src={
                image
                  ? image
                  : "https://images.unsplash.com/photo-1590615370581-265ae19a053b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
              width={200}
              height={210}
            />
          </div>
          <div>
            <Heading type="small">{file?.name.split(".")[0]}</Heading>
            <Progress completed={progress} />
          </div>
        </div>
      )}

      <input type="file" onChange={onChangeHandler} />
      <Input
        onChange={(e) => {
          setImage(e.target.value);
        }}
        type="text"
        placeholder="Image of music"
        value={image}
        label={"Image"}
      />
      <Button text="Save" onClick={handleSave} color={ButtonColorEnum.Black} />
    </div>
  );
}

export default React.memo(musics);
