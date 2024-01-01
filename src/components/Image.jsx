import React from "react";
import { Box, Text } from "grommet";

export function LogImage({ children, caption }) {
  return (
    <Box
      width={"small"}
      height={"small"}
      gap={"small"}
      alignContent={"start"}
      border
      pad={"small"}
      round={"xsmall"}
      margin={{ bottom: "medium", right: "medium" }}
    >
      {children}
      <Text size={"xsmall"} weight={400}>
        {caption}
      </Text>
    </Box>
  );
}
