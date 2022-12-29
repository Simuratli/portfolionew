import React from "react";
import { MusicCard } from "../../components";
import { fakeMusicPlayer } from "./fakeData";

function Playlist() {
  return (
    <div>
      {fakeMusicPlayer.map((item) => {
        return (
          <MusicCard
            key={item.name}
            singer={item.author}
            name={item.name}
            image={item.image}
            music={item.music}
          />
        );
      })}
    </div>
  );
}

export default React.memo(Playlist);
