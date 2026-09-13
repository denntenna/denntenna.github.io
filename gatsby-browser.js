import React from "react"
import DefaultMDXLayout from "./src/components/default-mdx-layout"

export const wrapPageElement = ({ element, props }) => {
  if (props.pageContext?.isMdxPage) {
    return <DefaultMDXLayout>{element}</DefaultMDXLayout>
  }
  return element
}
