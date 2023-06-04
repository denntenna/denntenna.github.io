import React, { useRef, useEffect } from "react";
import { Grommet, Box, Heading, Text } from "grommet";
import { Helmet } from "react-helmet";
import Theme from "./theme";
import styled from "styled-components";
import { Link } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
deckDeckGoHighlightElement();

const Content = styled.div`
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

const DefaultMDXLayout = ({ children, width }) => {
  const commentBox = useRef(null);

  useEffect(() => {
    // const scriptEl = document.createElement("script");
    // scriptEl.async = true;
    // scriptEl.src = "https://utteranc.es/client.js";
    // scriptEl.setAttribute("repo", "denntenna/denntenna.github.io");
    // scriptEl.setAttribute("issue-term", "url");
    // scriptEl.setAttribute("id", "utterances");
    // scriptEl.setAttribute("theme", "github-light");
    // scriptEl.setAttribute("crossorigin", "anonymous");
    // if (commentBox && commentBox.current) {
    //   commentBox.current.appendChild(scriptEl);
    // } else {
    //   console.log(`Error adding utterances comments on: ${commentBox}`);
    // }
  }, []);

  return (
    <Grommet full theme={Theme}>
      <Box pad={"small"} responsive={true}>
        <Box width={width ? width : "large"} alignSelf={"start"}>
          <Box direction={"row-responsive"} gap={"small"} align={"baseline"}>
            <Link to="/">
              <Heading margin={"none"} level={4}>
                denntenna
              </Heading>
            </Link>
            <Box gap={"small"}>
              {/* <Link to={"/about"} color={"red"}>
							<Text size={"small"}>author</Text>
						</Link> */}
            </Box>
          </Box>
          <Box height={"0.2em"} />
          <Box
            background={"neutral-2"}
            round={"xsmall"}
            pad={"xsmall"}
            width={"fit-content"}
          >
            <Text size={"small"}>
              everything here is a work in progress unless explicitly stated.
            </Text>
          </Box>
          <Box height={"1.2em"} />
          <Content>{children}</Content>

          <Box
            margin={{ top: "large" }}
            ref={commentBox}
            className="comments"
          ></Box>
        </Box>
      </Box>
    </Grommet>
  );
};

export default DefaultMDXLayout;
