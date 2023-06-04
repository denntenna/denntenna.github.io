import React from "react";
import { graphql, Link } from "gatsby";
import DefaultMDXLayout from "../../components/default-mdx-layout";
import { StaticImage } from "gatsby-plugin-image";
import {
  ResponsiveContext,
  Box,
  Heading,
  Text,
  Anchor,
  Image,
  Stack,
} from "grommet";
import { LogImage } from "../../components/Image";

const MasonryLayout = (props) => {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < props.columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  for (let i = 0; i < props.children.length; i++) {
    const columnIndex = i % props.columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${props.gap}px` }}>{props.children[i]}</div>
    );
  }

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return (
    <Box fill style={{ display: "flex" }}>
      {result}
    </Box>
  );
};

const Feed = ({ data }) => {
  const posts = data.allMdx.nodes;
  const size = React.useContext(ResponsiveContext);
  return (
    <DefaultMDXLayout width="fill">
      <Text>{size}</Text>
      <Box>
        <Stack anchor="top-left">
          <Box>
            <StaticImage
              src="../../images/logs_cover.jpg"
              alt={"A picture of a notebook with handwritten notes"}
            />
          </Box>
          <Box gap="large">
            <Box background="#FFFFFFAA" pad="small" width="fit-content">
              <Heading level={2} margin={"none"} color="#3C3C3C">
                Logs
              </Heading>
            </Box>
            <Box
              background="#FFFFFFCC"
              margin="small"
              pad="small"
              round="small"
            >
              <Box gap={"xsmall"} margin={{ top: "medium", bottom: "large" }}>
                {posts
                  ? posts.map((post, ix) => (
                      <Box key={ix} direction={"row-responsive"} gap={"xsmall"}>
                        <Text textAlign="center">
                          <Link to={`/${post.slug}`}>
                            <Text> {post.frontmatter.title}</Text>
                          </Link>
                          <Text>{` - `}</Text>
                          <Text>{" " + post.frontmatter.description}</Text>
                        </Text>
                      </Box>
                    ))
                  : null}
              </Box>
            </Box>
          </Box>
        </Stack>
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

      <Box fill>
        <MasonryLayout columns={4} gap={25}>
          <LogImage caption="What a blessing this drilling machine has been">
            <StaticImage
              src={"../../images/arranged-routers.jpg"}
              alt={
                "Neatly wrapped wires and internet equipment drilled to a wall"
              }
            />
          </LogImage>
          <LogImage caption="First Pizza in the new oven">
            <StaticImage
              src={"../../images/pizza-new-oven.jpg"}
              alt={"First Pizza in the new oven"}
            />
          </LogImage>
          <LogImage caption="New visiting cards">
            <Image src={"/tattle-card.gif"} alt={"Tattle Visisting Cards"} />
          </LogImage>
          <LogImage caption="A handrawn labelled map of Mumbai">
            <StaticImage
              src="../../images/my-mumbai-map.jpg"
              alt={"A handrawn labelled map of Mumbai"}
            />
          </LogImage>
          <LogImage caption="A picture of Mint Lounge Article on Viral Spiral">
            <StaticImage src="../../images/vs-mint-article.png" alt={""} />
          </LogImage>
        </MasonryLayout>
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
