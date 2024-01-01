import React from "react";
import { Box, Heading, Text, Anchor, Accordion, AccordionPanel } from "grommet";
import { StaticImage } from "gatsby-plugin-image";
import { Edit } from "react-feather";
import Section from "../components/section";
import { Link, graphql } from "gatsby";
import IndexLayout from "../components/index-layout";

const IndexPage = ({ data }) => {
  const logs = data.logs.nodes;
  const oif = data.oif.nodes;
  const readingNotes = data.readingNotes.nodes;
  const cheatsheets = data.cheatsheets.nodes;
  const feed = data.feed.nodes;

  return (
    <IndexLayout>
      <Box fill overflow={"hidden"} wrap={"true"} direction={"row-responsive"}>
        <Box width={"medium"} round overflow={"hidden"}>
          <Section width={"medium"}>
            <StaticImage
              src={"../images/sjngd-portrait.jpg"}
              alt="author picture"
              placeholder="blurred"
              width={1024}
            />
          </Section>
        </Box>
        {/* <Box width={"medium"}>
          <Section width={"medium"}>
            <Heading level={2} margin={{ bottom: "small", top: "none" }}>
              Announcement
            </Heading>
            <Text>
              I am currently hiring a Full stack javascript developer for{" "}
              <Anchor href={"https://tattle.co.in/"} target={"_blank"}>
                Tattle
              </Anchor>
            </Text>{" "}
            <Anchor
              href={"https://tattle.co.in/career/fullstack/"}
              target={"_blank"}
            >
              Check out the Job Listing
            </Anchor>
          </Section>
          <Section width={"medium"}>
            <Heading level={2} margin={{ bottom: "small", top: "none" }}>
              Feed
            </Heading>
            <Box gap="xsmall">
              <Box gap={"small"}>
                {feed.slice(0, 3).map((item, ix) => (
                  <Box>
                    <Text>
                      <Anchor href={item.frontmatter.url} target="_blank">
                        {item.frontmatter.title}
                      </Anchor>
                    </Text>
                    <Text key={ix}>{item.frontmatter.description}</Text>
                  </Box>
                ))}
              </Box>
              <Text>
                and <Link to={"/feed"}>{`${feed.length - 3} other`}</Link>
              </Text>
            </Box>{" "}
          </Section>
        </Box> */}

        <Box width={"medium"}></Box>

        {/* <Box width={"medium"}>
          <Section width={"medium"}>
            <Heading level={2} margin={{ bottom: "small", top: "none" }}>
              Cheatsheets
            </Heading>
            <Box gap={"xsmall"}>
              <Text>
                {cheatsheets
                  ? cheatsheets.map((cheatsheet) => (
                      <Text>
                        <Link to={`/${cheatsheet.slug}`}>
                          <Text>{cheatsheet.frontmatter.title}</Text>
                        </Link>
                        {", "}
                      </Text>
                    ))
                  : null}
                {" and "}
                <Link to={"/cheatsheets"}>{`${
                  cheatsheets.length - 3
                } others`}</Link>
              </Text>
            </Box>
          </Section>

          <Section width={"medium"}>
            <Heading level={2} margin={{ bottom: "small", top: "none" }}>
              Logs
            </Heading>

            <Text>
              {logs
                ? logs.slice(0, 3).map((log) => (
                    <Text>
                      <Link to={`/${log.slug}`}>
                        <Text>
                          {log.frontmatter.title +
                            " : " +
                            log.frontmatter.description}
                        </Text>
                      </Link>
                      {", "}
                    </Text>
                  ))
                : null}
              and <Link to={"/logs"}>{`${logs.length - 3} others`}</Link>
            </Text>
          </Section>
          <Section width={"medium"}>
            <Heading level={2} margin={{ bottom: "small", top: "none" }}>
              Notes{" "}
            </Heading>

            <Box gap={"xsmall"} direction={"row-responsive"}>
              <Text>
                {readingNotes
                  ? readingNotes.slice(0, 3).map((readingNote, ix) => (
                      <Text>
                        <Link to={`/${readingNote.slug}`}>
                          {`${readingNote.frontmatter.title}`}
                        </Link>
                        {`, `}
                      </Text>
                    ))
                  : null}
                and{" "}
                <Link to={"/reading-notes"}>{`${
                  readingNotes.length - 3
                } others`}</Link>
              </Text>
            </Box>
          </Section>
        </Box> */}
      </Box>
    </IndexLayout>
  );
};

export const query = graphql`
  query IndexQuery {
    logs: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/logs/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
          description
        }
        fileAbsolutePath
      }
    }
    cheatsheets: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/cheatsheets/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
        }
        fileAbsolutePath
      }
    }
    readingNotes: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/reading-notes/" } }
      sort: { fields: frontmatter___date, order: ASC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
          description
        }
        fileAbsolutePath
      }
    }
    oif: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/oif/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
          description
        }
        fileAbsolutePath
      }
    }
    feed: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/feed/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          description
          url
        }
        fileAbsolutePath
      }
    }
    all: allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          date
          description
        }
        fileAbsolutePath
      }
    }
  }
`;

export default IndexPage;
