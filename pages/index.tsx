import React, { useEffect } from "react";
import styles from "../styles/Home.module.scss";
import Head from "next/head";
import { Heading, GrayBox, Avatar, GrayBoxLoader } from "../components";
import { Resume, Experience, More, Contact } from "../containers";
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
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Simuratli</title>
      </Head>
      <Avatar image={Me} />
      <Heading type="big">{aboutState.name}</Heading>
      {aboutState.aboutMe ? (
        <GrayBox>{aboutState.aboutMe}</GrayBox>
      ) : (
        <GrayBoxLoader />
      )}
      <Resume />
      <Experience />
      <More
        headerTitle="🕹️ Want to see more things related with me"
        subHeaderTitle="You can use these cards for reading my articles, seeing my projects, learning my favorite music and books, and more contact information for me."
        data={routes}
      />

      <Contact headerTitle="🕹️ Contact with me" />
    </div>
  );
}
