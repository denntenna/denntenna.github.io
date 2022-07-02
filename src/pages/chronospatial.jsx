import React from "react";
import { Box, Heading, Paragraph, Text, Anchor } from "grommet";
import DefaultMDXLayout from "../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";

const OIFPage = () => {
  return (
    <DefaultMDXLayout>
      <Box>
        <Heading level={2}>ChronoSpatial</Heading>
        <StaticImage
          src="../images/chronospatial_cover.jpeg"
          alt={"A diagram showing boxes and cubes"}
        />
      </Box>
      <Text size={"small"} color={"dark-2"}>
        Artwork by Daniel Hudson Burnham{" "}
        <Anchor
          href={
            "https://www.artic.edu/artworks/196336/plate-75-from-the-plan-of-chicago-1909-chicago-diagram-of-the-city-showing-complete-system-of-inner-circuits"
          }
        >
          here
        </Anchor>
      </Text>
    </DefaultMDXLayout>
  );
};

export default OIFPage;
