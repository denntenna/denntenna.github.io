import React from "react";
import { graphql, Link } from "gatsby";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Text, Anchor } from "grommet";

const Feed = ({ data }) => {
  const posts = data.allMdx.nodes;
  console.log(data);
  return (
    <DefaultMDXLayout>
      <Box height={"12em"}>
        <Heading level={2}>Logs</Heading>
        <StaticImage
          src="../../images/logs_cover.jpg"
          alt={"A picture of a notebook with handwritten notes"}
        />
      </Box>
      <Text size={"small"} color={"dark-2"}>
        Picture by James Welling{" "}
        <Anchor
          href={
            "https://www.artic.edu/artworks/217592/a197-from-the-series-diary-of-elizabeth-and-james-dixon-1840-41-connecticut-landscapes-1977-86"
          }
        >
          here
        </Anchor>
      </Text>
      <Box gap={"xsmall"} margin={{ top: "medium", bottom: "large" }}>
        {posts
          ? posts.map((post, ix) => (
              <Box key={ix} direction={"row-responsive"} gap={"xsmall"}>
                <Link to={`/${post.slug}`}>
                  <Text weight={600}> {post.frontmatter.title}</Text>
                </Link>
                <Text>{post.frontmatter.description}</Text>
              </Box>
            ))
          : null}
      </Box>

      <Box margin={{ bottom: "medium" }} gap={"small"} alignContent={"start"}>
        <StaticImage
          src="../../images/my-mumbai-map.jpg"
          alt={"A handrawn labelled map of Mumbai"}
        />
        <Text>My Mumbai Map</Text>
      </Box>

      <Box margin={{ bottom: "medium" }} gap={"small"} alignContent={"start"}>
        <StaticImage
          src="../../images/vs-mint-article.png"
          alt={"A picture of Mint Lounge Article on Viral Spiral"}
        />
        <Text>Viral Spiral in the Mint Lounge</Text>
      </Box>
    </DefaultMDXLayout>
  );
};

export const query = graphql`
  query FeedIndexQuery {
    allMdx(
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
  }
`;

export default Feed;
