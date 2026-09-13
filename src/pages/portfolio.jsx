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

        <Box direction={"column"} gap="small">
          <Box gap="xsmall">
            <Text>
              <Anchor href={"https://tattle.co.in"} target={"blank"}>Tattle</Anchor>
              {" (2020 onwards) : Open Source Software and datasets to understand and respond to online harms in India."}
            </Text>
            <Box margin={{ left: "medium" }} gap="xsmall">
              <Text size="small">
                <Anchor href={"https://tattle.co.in/products/ogbv/"} target={"blank"}>Uli</Anchor>
                {" — Reduces effects of Online Gender-Based Violence with datasets and software for collective response."}
              </Text>
              <Text size="small">
                <Anchor href={"https://tattle.co.in/products/viral-spiral/"} target={"blank"}>Viral Spiral</Anchor>
                {" — Multiplayer card game about sharing news on the internet."}
              </Text>
              <Text size="small">
                <Anchor href={"https://tattle.co.in/products/feluda/"} target={"blank"}>Feluda</Anchor>
                {" — Analysis engine for multimodal and multilingual social media data."}
              </Text>
              <Text size="small">
                <Anchor href={"https://tattle.co.in/products/dau/"} target={"blank"}>Deepfakes Analysis Unit</Anchor>
                {" — Platform for triaging and authenticating manipulated media for fact-checkers and forensics experts."}
              </Text>
            </Box>
          </Box>
          <Text>
            <Anchor href={"https://www.instagram.com/mouthwash.reels/reels/"} target={"blank"}>Mouthwash</Anchor>
            {" (2022) : Comedy sketches on Instagram Reels."}
          </Text>
          <Text>
            <Anchor href={"https://winners.webbyawards.com/2019/apps-and-software/general-mobile-ott-apps/public-service-activism/78754/migracam"} target={"blank"}>Migracam</Anchor>
            {" (2020) : An app for immigrants on the US border to record law enforcement misdemeanor. Built at Quadrant2."}
          </Text>
          <Text>
            <Anchor href={"https://www.youtube.com/watch?v=yvUFGLoQxfI"} target={"blank"}>Dhish</Anchor>
            {" (2019) : Make music with intuitive percussive hand gestures."}
          </Text>
          <Text>
            <Anchor href={"https://www.vice.com/en/article/kbnbvn/this-invention-lets-your-pizza-tweet-every-time-you-take-a-bite"} target={"blank"}>Tweat</Anchor>
            {" (2016) : Live tweet every bite of your food."}
          </Text>
          <Text>
            <Link to={"/standup-comedy-2014"}><Text weight="bold">Standup Comedy</Text></Link>
            {" (2014) : Performing standup comedy in New Delhi's burgeoning comedy scene."}
          </Text>
        </Box>
      </Section>
      <Section width={"medium"}>
        <Heading level={2} margin={{ bottom: "small", top: "none" }}>
          Work in Progress
        </Heading>

        <Link to={"/generative-workout-mix"}>
          <Text size="medium" weight="bold">Live Coding Workout Mix</Text>
        </Link>
      </Section>
    </IndexLayout>
  );
}

export default Page;
