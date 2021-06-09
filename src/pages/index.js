import React from "react"
// import { Link } from "gatsby"
import { Grommet, Box, Text } from "grommet"
import SEO from "../components/seo"
import Theme from "../components/theme"
import GardenIcon from "../components/GardenIcon"

const IndexPage = () => {
  return (
    <Grommet theme={Theme} full>
      <SEO title="Home" />
      <Box fill>
        <Box direction={"row"} wrap={true}>
          {Array.from({ length: 100 }, (v, i) =>
            Math.floor(Math.random() * 4)
          ).map((i, ix) => (
            <Box>
              <GardenIcon key={ix} size={40} seed={Math.random() * 4} />
              <Text textAlign={"center"} size={"small"}>
                Post Title
              </Text>
            </Box>
          ))}
        </Box>
      </Box>
    </Grommet>
  )
}

export default IndexPage
