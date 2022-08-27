import React from "react";
import { Box, Heading, Paragraph, Text } from "grommet";
import DefaultMDXLayout from "../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <DefaultMDXLayout>
      <Box direction={"row-responsive"}>
        <Box width={"medium"}>
          <Heading level={2}>About</Heading>
          <Box direction={"row-responsive"} gap={"medium"}>
            <Box width={"small"} height={"small"}>
              <StaticImage
                src="../images/about_profile_pic.jpg"
                alt={"An image of the author in a park"}
              />
            </Box>
            {/* <Box>
              <iframe
                src="https://github.com/sponsors/dennyabrain/button"
                title="Sponsor dennyabrain"
                height="35"
                width="116"
                style={{ border: "0", backgroundColor: "aqua" }}
              ></iframe>
            </Box> */}
          </Box>
        </Box>
      </Box>
      <Paragraph>Hi,</Paragraph>
      <Paragraph>My name is denny. I am a technologist and humorist.</Paragraph>
      <Paragraph>
        I created this digital space to experiment with online content creation.
        I want to experiment with web technologies to learn how independent
        creators could also carve their unique space online away from social
        media platforms.
      </Paragraph>
    </DefaultMDXLayout>
  );
};

export default AboutPage;
