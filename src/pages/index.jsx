import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { StaticImage } from "gatsby-plugin-image";
import { Edit } from "react-feather";
import DefaultMDXLayout from "../components/default-mdx-layout";
import Section from "../components/section";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  const logs = data.logs.nodes;
  const oif = data.oif.nodes;
  return (
    <DefaultMDXLayout>
      <Box fill>
        <Box pad={"medium"} round border width={"fit-content"}>
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
        </Box>
        <Box height={"2em"}></Box>

        <Box direction={"column"} gap={"medium"} flex>
          <Section>
            <Heading level={2} margin={"none"}>
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
                {
                  " (2019) : Make music with intuitive percussive hand gestures."
                }
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
            {/* <Box>
            <Heading level={2} margin={"none"}>
              Series
            </Heading>
            <Text size={"medium"} weight={400}>
              <Link to={"/series/oif"}>Opinions in Formation</Link> ,{" "}
              <Link to={"/series/chronospatial"}>Chronospatial</Link> and 2
              others
            </Text>
          </Box> */}
          </Section>
          <Section>
            <Heading level={2} margin={"none"}>
              🚧 👷‍♂️ Work in Progress 🚧 👷‍♂️
            </Heading>
            <Box>
              <Link to={"/generative-workout-mix"}>
                <Text size="medium">Generative Workout Mix</Text>
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
            <Heading level={2} margin={"none"}>
              Cheatsheets
            </Heading>
            <Text size={"medium"}>
              <Link to={"/cheatsheets/elasticsearch"}>Elasticsearch</Link> Dart,
              flutter and 7 others
            </Text>
          </Section>
          <Section>
            <Heading level={2} margin={"none"}>
              Reading Notes
            </Heading>
            <Text size={"medium"}>
              Braided River, ISIS caliphate, Convinience Store Woman,{" "}
              <Link to={"/crying-in-h-mart"}>Crying in H Mart</Link>
              {", "}
              <Link to={"/democracy-is-sentimental"}>
                Democracy is sentimental
              </Link>
              {", "}
              <Link to={"/when-hope-is-a-hindrance"}>
                When hope is a hindrance
              </Link>
              {", "}
              <Text>The Calcutta Chromomsome, </Text>
              <Link to={"/the-nutmeg-curse"}>
                The Nutmeg's Curse: Parables for a Planet in Crisis
              </Link>{" "}
              and 10 others
            </Text>
          </Section>
          <Section>
            <Heading level={2} margin={"none"}>
              Logs
            </Heading>

            <Box direction={"log-responsive"} gap={"xsmall"}>
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
      </Box>
    </DefaultMDXLayout>
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
