import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import DefaultMDXLayout from "../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <DefaultMDXLayout>
      <Box>
        <Heading level={2}>About</Heading>
        <StaticImage
          src="../images/about_profile_pic.jpg"
          alt={"An image of the author in a park"}
        />
      </Box>
      <Paragraph>Hi,</Paragraph>
      <Paragraph>My name is denny. I am a technologist and humorist.</Paragraph>
      <Paragraph>
        I created this digital space to experiment with online content creation.
        We've seen a lot of different kind of content proliferate on social
        media, but somehow most websites and blog don't really utilize the power
        of web technologies. The reason is of course that there is building
        interesting experiences on web still requires coding and that could be
        prohibitive to a lot of people. I intend to disregard any concerns of
        scalability and experiment with web technologies to learn how
        independent creators could also carve their unique space online without
        relying on social media platforms.
      </Paragraph>
      <iframe
        src="https://github.com/sponsors/dennyabrain/card"
        title="Sponsor dennyabrain"
        height="fit-content"
        width="360"
        style={{ border: "2px solid", borderRadius: "25px" }}
      ></iframe>
    </DefaultMDXLayout>
  );
};

export default AboutPage;
