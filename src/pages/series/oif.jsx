import React from "react";
import { Box, Heading, Paragraph, Text, Anchor } from "grommet";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";

const OIFPage = () => {
	return (
		<DefaultMDXLayout>
			<Box>
				<Heading level={2}>Opinions in Formation</Heading>
				<StaticImage
					src="../../images/oif_cover.jpeg"
					alt={
						"An artwork by Tanaka Atsuko featuring colored circles and smooth curves overlayed on each other"
					}
				/>
			</Box>
			<Text size={"small"} color={"light-2"}>
				Painting by Tanaka Atsuko found{" "}
				<Anchor href={"https://www.artic.edu/artworks/229393/untitled"}>
					here
				</Anchor>
			</Text>

			<Paragraph>asdf asdfasdff</Paragraph>
		</DefaultMDXLayout>
	);
};

export default OIFPage;
