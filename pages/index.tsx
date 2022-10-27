import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import { Heading, GrayBox, Avatar } from "../components";
import { Resume, Experience, More } from "../containers";
import { routes } from "../utils/routes.util";
import { useAboutMe } from "../hooks/DashboardHooks/useAboutMe";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Me from "../public/assets/avatar/me.png";
export default function Home() {
  const { getAboutMeData } = useAboutMe();
  const aboutState = useTypedSelector((state) => state.aboutMe);

  useEffect(() => {
    getAboutMeData();
  }, [getAboutMeData]);

  return (
    <div className={styles.container}>
      <Avatar image={Me} />
      <Heading type="big">{aboutState.name}</Heading>
      <GrayBox>{aboutState.aboutMe}</GrayBox>
      <Resume />
      <Experience />
      <More
        headerTitle="🕹️ Want to see more things related with me"
        subHeaderTitle="You can use these cards for reading my articles, seeing my projects, learning my favorite music and books, and more contact information for me."
        data={routes}
      />
    </div>
  );
}
