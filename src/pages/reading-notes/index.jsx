import React from "react";
import { graphql, Link } from "gatsby";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Text, Anchor, Image } from "grommet";

const ReadingNotes = ({ data }) => {
  const posts = data.allMdx.nodes;

  console.log(data);
  return (
    <DefaultMDXLayout>
      <Heading level={2}>Reading Notes</Heading>
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

        <Box gap={"xsmall"}>
          {posts
            ? posts.map((post, ix) => {
                const { frontmatter } = post;
                const featuredImage = frontmatter.featuredimage;
                // console.log({
                //   title: frontmatter.title,
                //   image: featuredImage.src,
                // });
                let featuredImageSrc = featuredImage
                  ? featuredImage.src.childImageSharp.fluid.src
                  : undefined;

                return (
                  <Box
                    key={ix}
                    direction={"row-responsive"}
                    gap={"small"}
                    pad={"xsmall"}
                    background={ix % 2 === 0 ? "light-1" : "light-3"}
                  >
                    {featuredImageSrc ? (
                      <Box height={"xsmall"} width={"xsmall"} round>
                        <Image
                          fit="cover"
                          src={
                            post.frontmatter.featuredimage.src.childImageSharp
                              .fluid.src
                          }
                          alt={"Thumbnail image"}
                        />
                      </Box>
                    ) : null}
                    <Box>
                      <Anchor href={`/${post.slug}`}>
                        <Heading level={4} margin={"none"}>
                          {frontmatter.title}
                        </Heading>
                      </Anchor>
                      <Text> {frontmatter.author}</Text>
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
  query RNFeedIndexQuery {
    allMdx(
      filter: { fileAbsolutePath: { regex: "/.*/src/pages/reading-notes/" } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        slug
        frontmatter {
          title
          author
          featuredimage {
            src {
              childImageSharp {
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
          date
        }
        fileAbsolutePath
      }
    }
  }
`;

export default ReadingNotes;
