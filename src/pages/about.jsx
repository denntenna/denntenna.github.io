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
        <Box width={"large"}>
          <Heading level={2}>About</Heading>
          <Box direction={"row-responsive"} gap={"medium"}>
            <Box width={"small"} height={"small"}>
              <StaticImage
                src="../images/dp-udr.jpg"
                alt={"An image of the author infront of a lake"}
              />
            </Box>
            <Box width={"medium"}>
              <form
                style={{
                  border: "1px solid #ccc",
                  padding: "3px",
                  textAlign: "center",
                }}
                action="https://tinyletter.com/denntenna"
                method="post"
                target="popupwindow"
                onsubmit="window.open('https://tinyletter.com/denntenna', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
              >
                <Box>
                  <Text size={"medium"}> Subscribe for updates</Text>
                  <Text weight={300} size={"small"}>
                    (sent out once a month)
                  </Text>
                </Box>
                <p>
                  <input
                    type="text"
                    style={{ width: "140px" }}
                    name="email"
                    id="tlemail"
                  />
                </p>
                <input type="hidden" value="1" name="embed" />
                <input type="submit" value="Subscribe" />
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
      <Paragraph>Hi,</Paragraph>
      <Paragraph>
        My name is denny. I am an engineer whose work engages with
        socio-political issues using software and humor.
      </Paragraph>
      <Paragraph>
        I created denntenna to share my creative practice on the internet. It
        has a hydra like structure with various heads - digital garden, wiki,
        social feed, CMS, publication platform etc. Have fun exploring!
      </Paragraph>

      <Box height={"2.4em"}></Box>

      <Box>
        <iframe
          src="https://github.com/sponsors/dennyabrain/button"
          title="Sponsor dennyabrain"
          height="35"
          width="116"
          // style={{ border: "0" }}
        ></iframe>
      </Box>
    </DefaultMDXLayout>
  );
};

export default AboutPage;
