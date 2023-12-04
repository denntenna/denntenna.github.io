import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Image } from "grommet";
import IndexLayout from "../../components/index-layout";

const Page = () => {
  return (
    <IndexLayout>
      <Box background={"#ffb703"}>
        <Heading level={4}>Spotify Wrapped 2023 </Heading>
        <Heading level={2}>Julian Lage</Heading>
        <Box direction="row-responsive" gap="small">
          <Box width={"12em"} height={"12em"}>
            <StaticImage
              src="./julian_lage_1.png"
              alt={"An image of the author infront of a lake"}
            />
          </Box>
          <Box width={"12em"} height={"5em"}>
            <StaticImage src="./julian_lage_2.png" alt={"Nocturne"} />
          </Box>
        </Box>
      </Box>
    </IndexLayout>
  );
};

// julian lage
// laufey
// seedhe maut
// parcels
// hania rani
// gondwana record
//      the two guys
//  L'Impératrice
//  skylar - https://www.instagram.com/skylarskylarskylarrrr/
//      https://www.instagram.com/p/Ctw3TKNA2ms/
// individual gems :
// https://www.youtube.com/watch?v=NenfLCXgfac
// maharani

export default Page;
