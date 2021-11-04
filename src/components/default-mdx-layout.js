import React from "react";
import { Grommet, Box } from "grommet";
import Theme from "./theme";

const DefaultMDXLayout = ({ children }) => (
  <Grommet full theme={Theme}>
    <Box fill pad={"large"} responsive={true}>
      <Box width={"large"} alignSelf={"center"}>
        {children}
      </Box>
    </Box>
  </Grommet>
);

export default DefaultMDXLayout;
