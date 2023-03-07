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
            {feed.slice(0, 3).map((item, ix) => (
              <Box gap="medium">
                <Box round={"xsmall"} background={"#CBE0F3"} pad={"small"}>
                  <Anchor href={item.frontmatter.url} target="_blank">
                    <Heading level={6} key={ix} margin={"none"} fill>
                      {item.frontmatter.title}
                    </Heading>
                  </Anchor>
                  <Text key={ix}>{item.frontmatter.description}</Text>
                </Box>
              </Box>
            ))}
            <Text>
              and <Link to={"/feed"}>{`${feed.length - 3} other`}</Link>
            </Text>
          </Box>{" "}
        </Section>

        <Section width={"medium"}>
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
        <Section width={"medium"}>
          <Heading level={2} margin={{ bottom: "small", top: "none" }}>
            Work in Progress
          </Heading>

          <Text>
            <Anchor
              href="https://tattle.co.in/products/viral-spiral/"
              target="_blank"
            >
              Viral Spiral
            </Anchor>
            {", "}
            <Anchor href="https:uli.tattle.co.in" target="_blank">
              Uli
            </Anchor>
            {", "}
            <Link to={"/generative-workout-mix"}>
              <Text size="medium">Live Coding Workout Mix</Text>
            </Link>
            {", "}
            <Link to={`/oif`}>
              <Text>Opinions In Formation</Text>
            </Link>
            {" and "}
            <Link to={`/chronospatial`}>
              <Text>Chronospatial</Text>
            </Link>
          </Text>
        </Section>

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
            Daily Logs
          </Heading>

          <Text>
            {logs
              ? logs.slice(0, 3).map((log) => (
                  <Text>
                    <Link to={`/${log.slug}`}>
                      <Text>{log.frontmatter.title}</Text>
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
      sort: { fields: frontmatter___date, order: ASC }
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
