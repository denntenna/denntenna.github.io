import React from "react";
import { graphql, Link } from "gatsby";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Heading, Text, Anchor, Image } from "grommet";

const Feed = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <DefaultMDXLayout breadcrumb="feed">
      <Box direction={"row-responsive"} gap={"medium"}>
        <Box width={"medium"}>
          <Box>
            <Box width={"100%"} height={"fit-content"}>
              <StaticImage
                src="../../images/feed_cover.jpg"
                alt={"A stained glass painting of birds"}
              />
            </Box>
            <Text size={"small"} color={"dark-2"}>
              Picture by Marc Chagall -{" "}
              <Anchor
                href={"https://www.artic.edu/artworks/109439/america-windows"}
              >
                source
              </Anchor>
            </Text>
          </Box>
        </Box>

        <Box gap={"xsmall"}>
          {posts
            ? posts.map((post, ix) => {
                const { frontmatter } = post;
                const featuredImage = frontmatter.featuredimage;
                const featuredImg = getImage(
                  featuredImage?.src?.childImageSharp?.gatsbyImageData
                );

                return (
                  <Box
                    key={ix}
                    direction={"row-responsive"}
                    gap={"small"}
                    pad={"xsmall"}
                    background={ix % 2 === 0 ? "light-1" : "light-3"}
                  >
                    {featuredImg ? (
                      <Box height={"xsmall"} width={"xsmall"} round overflow="hidden">
                        <GatsbyImage image={featuredImg} alt={featuredImage?.alt || "Thumbnail"} />
                      </Box>
                    ) : null}
                    <Box>
                      <Anchor href={frontmatter.url}>
                        <Heading fill level={4} margin={"none"}>
                          {frontmatter.title}
                        </Heading>
                      </Anchor>

                      <Text>{frontmatter.description}</Text>
                      <Text size={"xsmall"}>{frontmatter.date}</Text>
                    </Box>
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
    </DefaultMDXLayout>
  );
};

export const query = graphql`
  query MainFeedIndexQuery {
    allMdx(
      filter: { fields: { slug: { glob: "/feed/*" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          description
          date
          url
        }
      }
    }
  }
`;

export default Feed;
