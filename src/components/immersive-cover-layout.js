import React from "react";
import { Grommet, Box, Stack, Heading, Text } from "grommet";
import Theme from "./theme";
import styled from "styled-components";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

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

const ImmersiveCoverLayout = ({ children, cover }) => (
	<Grommet full theme={Theme}>
		<Box height={"100vh"} background={"red"}>
			<Stack fill>
				<StaticImage src={`cover.src`} alt={cover.alt} />
				<Text>Hi</Text>
			</Stack>
		</Box>
		<Box pad={"large"} responsive={true}>
			<Box width={"large"} alignSelf={"center"}>
				<Content>{children}</Content>
			</Box>
		</Box>
	</Grommet>
);

export default ImmersiveCoverLayout;
