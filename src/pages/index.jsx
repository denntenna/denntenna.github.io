import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { Edit } from "react-feather";
import DefaultMDXLayout from "../components/default-mdx-layout";
import Section from "../components/section";
import { Link } from "gatsby";

const IndexPage = () => (
  <DefaultMDXLayout>
    <Box fill>
      <Box pad={"medium"} round border width={"fit-content"}>
        <Text>
          I am currently hiring a Full stack javascript developer for Tattle
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
          <Box height="0.8em"></Box>

          <Box direction={"column"} gap={"xsmall"}>
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
            <Link to={"/reading-notes/democracy-is-sentimental"}>
              Democracy is sentimental
            </Link>
            {", "}
            <Link to={"/reading-notes/when-hope-is-a-hindrance"}>
              When hope is a hindrance
            </Link>{" "}
            and 10 others
          </Text>
        </Section>
      </Box>
    </Box>
  </DefaultMDXLayout>
);

export default IndexPage;
