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
      <Box style={{ marginBottom: `${props.gap}px` }}>{props.children[i]}</Box>
    );
  }

  for (let i = 0; i < props.columns; i++) {
    result.push(
      <Box
        style={{
          marginLeft: `${i > 0 ? props.gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </Box>
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
  // const size = React.useContext(ResponsiveContext);
  return (
    <DefaultMDXLayout width="100%" path="logs">
      {/* <Text>{size}</Text> */}
      <Box direction="row-responsive" gap="large">
        <Box direction="column" gap="medium" wrap={true} responsive>
          <LogImage caption="What a blessing this drilling machine has been">
            <StaticImage
              fit="cover"
              src={"../../images/arranged-routers.jpg"}
              alt={
                "Neatly wrapped wires and internet equipment drilled to a wall"
              }
            />
          </LogImage>
          <LogImage caption="First Pizza in the new oven">
            <StaticImage
              fit="cover"
              src={"../../images/pizza-new-oven.jpg"}
              alt={"First Pizza in the new oven"}
            />
          </LogImage>
          <LogImage caption="New visiting cards">
            <Image
              fit="cover"
              src={"/tattle-card.gif"}
              alt={"Tattle Visisting Cards"}
            />
          </LogImage>
          <LogImage caption="A handrawn labelled map of my Mumbai">
            <StaticImage
              fit="cover"
              src="../../images/my-mumbai-map.jpg"
              alt={"A handrawn labelled map of Mumbai"}
            />
          </LogImage>
          <LogImage caption="A picture of Mint Lounge Article on Viral Spiral">
            <StaticImage
              fit="contain"
              src="../../images/vs-mint-article.png"
              alt={""}
            />
          </LogImage>
        </Box>
        <Box>
          <Box background="#FFFFFFCC" round="small">
            <Box gap={"xsmall"}>
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
