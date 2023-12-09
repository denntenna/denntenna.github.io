import React from "react";
import Section from "../components/section";
import { Box, Heading, Text, Anchor } from "grommet";
import IndexLayout from "../components/index-layout";
import { Link } from "gatsby";

function Page() {
  return (
    <IndexLayout>
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

          <Anchor href={"https://puddle.vip"}>puddle</Anchor>

          {" and "}
          <Anchor href={"https://denntenna.github.io/oif"}>
            Opinions In Formation
          </Anchor>
          {/* <Link to={`/chronospatial`}>
        <Text>Chronospatial</Text>
      </Link> */}
        </Text>
      </Section>
    </IndexLayout>
  );
}

export default Page;
