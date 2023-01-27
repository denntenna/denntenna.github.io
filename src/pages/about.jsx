import React from "react";
import { Box, Heading, Paragraph, Text, Button } from "grommet";
import DefaultMDXLayout from "../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";
import CV from "../images/cv-denny-george-27-01-2023.pdf";
import { Link } from "gatsby";

const AboutPage = () => {
  return (
    <DefaultMDXLayout>
      <Box direction={"row-responsive"}>
        <Box width={"medium"}>
          <Heading level={3}>About</Heading>
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
      <Paragraph>
        My name is denny. I am an engineer who engages with political issues
        using software and humor.
      </Paragraph>
      <Paragraph>
        I created denntenna to share my creative practice on the internet. It
        has a hydra like structure with various heads - digital garden, wiki,
        social feed, CMS, publication platform etc. A software that I constantly
        rewrite and tweak, it might always be a work in progress.
      </Paragraph>
    </DefaultMDXLayout>
  );
};

export default AboutPage;
