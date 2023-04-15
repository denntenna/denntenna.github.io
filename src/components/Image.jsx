import React from "react";
import { Box, Text } from "grommet";

export function LogImage({ children, caption }) {
  return (
    <Box
      width={"medium"}
      margin={{ bottom: "medium" }}
      gap={"small"}
      alignContent={"start"}
      border
      pad={"small"}
      round={"xsmall"}
    >
      {children}
      <Text size={"xsmall"} weight={400}>
        {caption}
      </Text>
    </Box>
  );
}
