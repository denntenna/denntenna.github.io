import React from "react";
import { graphql, Link } from "gatsby";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Heading, Text, Anchor, Image } from "grommet";

const ReadingNotes = ({ data }) => {
  const posts = data.allMdx.nodes;

  console.log(data);
  return (
    <DefaultMDXLayout breadcrumb="reading notes">
      <Box direction="row-responsive" gap="medium">
        <Box width={"medium"} gap="medium">
          <Box>
            <Box width={"100%"} height={"fit-content"}>
              <StaticImage
                src="../../images/rn_cover.jpg"
                alt={"A picture of an old cinema theatre"}
              />
            </Box>
            <Text size={"small"} color={"dark-2"}>
              Picture by Walker Evans -{" "}
              <Anchor
                href={"https://www.artic.edu/artworks/33833/untitled-cinema"}
              >
                source
              </Anchor>
            </Text>
          </Box>
        </Box>

        <Box gap={"medium"}>
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
                    pad={"small"}
                    background={ix % 2 === 0 ? "light-1" : "light-2"}
                  >
                    {featuredImg ? (
                      <Box height={"xsmall"} width={"xsmall"} round overflow="hidden">
                        <GatsbyImage image={featuredImg} alt={featuredImage?.alt || "Thumbnail"} />
                      </Box>
                    ) : null}
                    <Box>
                      <Anchor href={post.fields.slug}>
                        <Heading level={4} margin={"none"}>
                          {frontmatter.title}
                        </Heading>
                      </Anchor>
                      <Text> {frontmatter.author}</Text>
                      <Text>{frontmatter.description}</Text>
                      <Text size={"xsmall"}>
                        {new Date(frontmatter.date).toDateString()}
                      </Text>
                    </Box>
                  </Box>
                );
              })
            : null}
        </Box>
      </Box>
      {/* <Box margin={{ bottom: "medium" }}>
        <StaticImage src="../images/udr-skyline.png" alt={"Udaipur Skyline"} />
      </Box> */}
    </DefaultMDXLayout>
  );
};

export const query = graphql`
  query RNFeedIndexQuery {
    allMdx(
      filter: { fields: { slug: { glob: "/reading-notes/*" } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
          author
          featuredimage {
            src {
              childImageSharp {
                gatsbyImageData(width: 100)
              }
            }
            alt
          }
          date
        }
      }
    }
  }
`;

export default ReadingNotes;
