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
import { StaticImage } from "gatsby-plugin-image";
import Theme from "../../components/theme";
import { Link } from "gatsby";

const OIFPage = () => {
	return (
		<Grommet full theme={Theme}>
			<Box fill flex={"grow"} gap={"small"}>
				<Box
					height={{ min: "100vh" }}
					background={"red"}
					overflow={"hidden"}
				>
					<Stack fill>
						<Box height={{ min: "100vh" }} background={"aqua"}>
							<StaticImage
								src={"../../images/oif_cover.jpeg"}
								alt={
									"An artwork by Tanaka Atsuko featuring colored circles and smooth curves overlayed on each other"
								}
								objectFit={"cover"}
							/>
						</Box>

						<Box fill justify={"center"} background={"#00000011"}>
							<Heading
								level={1}
								alignSelf={"center"}
								color={"light-1"}
							>
								Opinions in Formation
							</Heading>
							<Paragraph alignSelf={"center"} color={"light-1"}>
								This section of live documents that show my
								current understanding of contentious issues. I
								see some value in sharing how I've been thinking
								about some of these things. I collect literature
								that I have reffered to and provide my notes and
								commntary on it. I also invite additional link
								and resource submissions from readers.
							</Paragraph>
						</Box>
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
					</Stack>
				</Box>
				<Box pad={"large"} flex={"grow"} gap={"medium"}>
					<Box pad={"large"} border>
						<Heading level={2}>Synthetic Media</Heading>
						<Text>
							Is deep fake technology even capable of being used
							for a good purpose? Since the genie is out of the
							bottle now, how do we make sense of the forthcoming
							chaos it brings.
						</Text>
					</Box>

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
