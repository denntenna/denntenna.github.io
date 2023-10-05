import React, { useRef, useEffect } from "react";
import { Grommet, Box, Heading, Text } from "grommet";
import { Helmet } from "react-helmet";
import Theme from "./theme";
import styled from "styled-components";
import { Link } from "gatsby";
import TagBubble from "./TagBubble";

const Content = styled(Box)`
  p,
  li {
    font-family: Noto Sans;
  }
  a,
  a:link,
  a:visited,
  a:active {
    color: #005f73;
    text-decoration: underline;
    text-decoration-color: #81b29a;
  }
  a:hover {
    color: #005f73;
    text-decoration: underline;
    text-decoration-color: #f2cc8f;
  }
`;

const IndexLayout = ({ children }) => {
  const commentBox = useRef(null);

  return (
    <Grommet full theme={Theme}>
      <Box responsive={true} pad={"small"}>
        <Box fill alignSelf={"start"}>
          <Box direction={"row-responsive"} gap={"medium"} align={"baseline"}>
            <Link to="/">
              <Heading margin={"none"} level={4}>
                denntenna
              </Heading>
            </Link>
            <Box flex={"grow"}>
              <Box direction={"row-responsive"} wrap={true} gap={"xsmall"}>
                <TagBubble tag={"#information-disorder"} />
                <TagBubble tag={"#hypermedia"} />
                <TagBubble tag={"#p2p"} />
                <TagBubble tag={"#livecoding"} />
              </Box>
            </Box>
            <Box gap={"small"}>
              <Link to={"/about"} color={"red"}>
                <Text size={"small"}>about</Text>
              </Link>
            </Box>
          </Box>

          <Box
            // margin={{ top: "large" }}
            ref={commentBox}
            className="comments"
          ></Box>
        </Box>
        <Content>{children}</Content>
      </Box>
    </Grommet>
  );
};

export default IndexLayout;
