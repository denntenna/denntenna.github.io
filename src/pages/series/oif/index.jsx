import React from "react";
import {
	Grommet,
	Box,
	Stack,
	Heading,
	Content,
	Paragraph,
	Text,
	Anchor,
} from "grommet";
import { ThemedLink } from "../../../components/links";
import { StaticImage } from "gatsby-plugin-image";
import Theme from "../../../components/theme";
import { Link } from "gatsby";
import styled from "styled-components";

const BlurBox = styled.div`
	width: fit-content;
	h1 {
		filter: drop-shadow(2px 2px 4px #000000);
	}
	p {
		filter: drop-shadow(2px 2px 4px #a8dadc);
	}
`;

const OIFPage = () => {
	return (
		<Grommet full theme={Theme}>
			<Box fill flex={"grow"} gap={"small"}>
				<Box height={{ min: "100vh" }} overflow={"hidden"}>
					<Stack fill>
						<Box height={{ min: "100vh", max: "fit-content" }}>
							<StaticImage
								aspectRatio={1 / 2}
								src={"../../../images/oif_cover.jpeg"}
								alt={
									"An artwork by Tanaka Atsuko featuring colored circles and smooth curves overlayed on each other"
								}
								objectFit={"contain"}
							/>
						</Box>

						<Box fill>
							<Box pad={"medium"}>
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
										a digital garden, feed, portfolio and
										experiment in content creation
									</Text>
								</Box>
							</Box>
							<Box flex={"grow"} justify="center">
								<BlurBox>
									<Heading level={1} color={"light-1"}>
										Opinions in Formation
									</Heading>
									<Paragraph
										alignSelf={"center"}
										color={"light-1"}
										size={"large"}
									>
										This section of live documents that show
										my current understanding of contentious
										issues. I see some value in sharing how
										I've been thinking about some of these
										things. I collect literature that I have
										reffered to and provide my notes and
										commntary on it. I also invite
										additional link and resource submissions
										from readers.
									</Paragraph>
								</BlurBox>
							</Box>
						</Box>
					</Stack>
				</Box>
				<Box pad={"large"} flex={"grow"} gap={"medium"}>
					<Link to={"synthetic-media"}>
						<Box pad={"large"} border hoverIndicator={true}>
							<Heading level={2}>Synthetic Media</Heading>
							<Text>
								Is deep fake technology even capable of being
								used for a good purpose? Since the genie is out
								of the bottle now, how do we make sense of the
								forthcoming chaos it brings.
							</Text>
						</Box>
					</Link>

					<Box pad={"large"} border>
						<Heading level={2}>Aryan Invasion Theory</Heading>
					</Box>

					<Box pad={"large"} border>
						<Heading level={2}>Internet Shutdowns</Heading>
					</Box>
				</Box>
			</Box>
		</Grommet>
	);
};

export default OIFPage;
