import React from "react";
import { Grommet, Box, Heading, Text } from "grommet";
import Theme from "./theme";
import styled from "styled-components";
import { Link } from "gatsby";

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

const DefaultMDXLayout = ({ children }) => (
	<Grommet full theme={Theme}>
		<Box pad={"large"} responsive={true}>
			<Box width={"large"} alignSelf={"center"}>
				<Box
					direction={"row-responsive"}
					gap={"medium"}
					align={"baseline"}
				>
					<Link to="/">
						<Heading margin={"none"} level={4}>
							denntenna
						</Heading>
					</Link>
					<Box gap={"small"}>
						<Link to={"/about"}>
							<Text size={"small"}>about</Text>
						</Link>
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
						a digital garden, feed, portfolio and experiment in
						content creation
					</Text>
				</Box>
				<Box height={"1.2em"} />
				<Content>{children}</Content>
			</Box>
		</Box>
	</Grommet>
);

export default DefaultMDXLayout;
