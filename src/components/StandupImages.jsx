import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const StandupImages = () => {
  const data = useStaticQuery(graphql`
    query StandupImagesQuery {
      allFile(
        filter: { relativeDirectory: { eq: "standup-days" } }
        sort: { name: ASC }
      ) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(width: 1200, placeholder: BLURRED)
          }
        }
      }
    }
  `)

  return (
    <>
      {data.allFile.nodes.map((file, i) => {
        const image = getImage(file.childImageSharp)
        return image ? (
          <GatsbyImage
            key={file.name}
            image={image}
            alt={`Standup comedy 2014 - ${i + 1}`}
            style={{ marginBottom: "1rem", display: "block" }}
          />
        ) : null
      })}
    </>
  )
}

export default StandupImages
