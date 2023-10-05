import React from "react";
import { Box, Text } from "grommet";

export default function TagBubble({ tag }) {
  return (
    <Box
      background={"neutral-1"}
      width={"fit-content"}
      pad={"xxsmall"}
      round={"xsmall"}
    >
      <Text size={"small"}>{tag}</Text>
    </Box>
  );
}
