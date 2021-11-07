import React from "react";
import { Box, Heading, Text } from "grommet";
import { Edit } from "react-feather";
import DefaultMDXLayout from "../components/default-mdx-layout";
import Section from "../components/section";

const IndexPage = () => (
  <DefaultMDXLayout>
    <Box fill>
      <Heading level={4}>denntenna</Heading>
      <Box
        background={"neutral-2"}
        round={"xsmall"}
        pad={"xsmall"}
        width={"fit-content"}
      >
        <Text size={"small"}>
          a digital garden, feed, portfolio and experiment in content creation
        </Text>
      </Box>
      <Box height={"2em"}></Box>
      <Box direction={"column"} gap={"medium"} flex>
        <Section>
          <Box>
            <Heading level={2} margin={"none"}>
              Series
            </Heading>
            <Text size={"medium"} weight={400}>
              Opinions in Formation, Chronospatial and 2 others
            </Text>
          </Box>
        </Section>
        <Section>
          <Heading level={2} margin={"none"}>
            Cheatsheets
          </Heading>
          <Text size={"medium"}>Elasticsearch, Dart, flutter and 7 others</Text>
        </Section>
        <Section>
          <Heading level={2} margin={"none"}>
            Reading List
          </Heading>
          <Text size={"medium"}>
            Braided River, ISIS caliphate, Convinience Store Woman and 10 others
          </Text>
        </Section>
        <Section>
          <Heading level={2} margin={"none"}>
            Portfolio
          </Heading>
          <Text size={"medium"}>Dhish, Migracam and Tattle</Text>
        </Section>
      </Box>
    </Box>
  </DefaultMDXLayout>
);

export default IndexPage;
