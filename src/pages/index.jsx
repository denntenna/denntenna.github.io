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
  return (
    <IndexLayout>
      <Box
        fill
        direction={"row-responsive"}
        gap={"medium"}
        overflow={"hidden"}
        wrap={"true"}
      >
        <Section>
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
        <Section>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Portfolio
          </Heading>

          <Box direction={"column"}>
            <Text>
              <Anchor href={"https://tattle.co.in"} target={"blank"}>
                {" "}
                Tattle
              </Anchor>
              {
                " (2020 onwards) : Tools and Dataset to understand and respond to misinformation in India."
              }
            </Text>
            <Text>
              <Anchor
                href={"https://www.instagram.com/mouthwash.reels/reels/"}
                target={"blank"}
              >
                {" "}
                Mouthwash
              </Anchor>
              {" (2022) : Comedy Sketches on Instagram Reels"}
            </Text>

            <Text>
              <Anchor
                href={"https://www.youtube.com/watch?v=yvUFGLoQxfI"}
                target={"blank"}
              >
                {" "}
                Dhish
              </Anchor>
              {" (2019) : Make music with intuitive percussive hand gestures."}
            </Text>
            <Text>
              <Anchor
                href={
                  "https://winners.webbyawards.com/2019/apps-and-software/general-mobile-ott-apps/public-service-activism/78754/migracam"
                }
                target={"blank"}
              >
                {" "}
                Migracam
              </Anchor>
              {
                " (2020) : An app for immigrants on US border to record law enforcement misdemeanor. Built at Quardrant2"
              }
            </Text>
            <Text>
              <Anchor
                href={
                  "https://www.vice.com/en/article/kbnbvn/this-invention-lets-your-pizza-tweet-every-time-you-take-a-bite"
                }
                target={"blank"}
              >
                {" "}
                Tweat
              </Anchor>
              {" (2018) : Live Tweet every bite of your food"}
            </Text>
          </Box>
        </Section>

        <Section>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Work in Progress
          </Heading>

          <Box>
            <Link to={"/generative-workout-mix"}>
              <Text size="medium">Live Coding Workout Mix</Text>
            </Link>
            <Link to={`/oif`}>
              <Text>Opinions In Formation</Text>
            </Link>
            <Link to={`/chronospatial`}>
              <Text>Chronospatial</Text>
            </Link>
          </Box>
        </Section>
        <Section>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Cheatsheets
          </Heading>
          <Box gap={"xsmall"}>
            {cheatsheets
              ? cheatsheets.map((cheatsheet) => (
                  <Box>
                    <Link to={`/${cheatsheet.slug}`}>
                      <Text>{cheatsheet.frontmatter.title}</Text>
                    </Link>
                  </Box>
                ))
              : null}
          </Box>
        </Section>

        <Section>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Reading Notes{" "}
          </Heading>

          <Box gap={"xsmall"}>
            {readingNotes
              ? readingNotes.map((readingNote) => (
                  <Box>
                    <Link to={`/${readingNote.slug}`}>
                      <Text>{readingNote.frontmatter.title}</Text>
                    </Link>
                  </Box>
                ))
              : null}
          </Box>
        </Section>

        <Section>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Logs
          </Heading>

          <Box gap={"xsmall"}>
            {logs
              ? logs.map((log) => (
                  <Box>
                    <Link to={`/${log.slug}`}>
                      <Text>{log.frontmatter.title}</Text>
                    </Link>
                  </Box>
                ))
              : null}
          </Box>
        </Section>
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
          cover_image
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          cover_image
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
          cover_image
          date
          description
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
          cover_image
          date
          description
        }
        fileAbsolutePath
      }
    }
  }
`;

export default IndexPage;
