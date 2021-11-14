import { graphql } from "gatsby";
import * as React from "react";
import FrontHero from "../components/FrontHero";
import Layout from "../components/Layout";

// markup
const IndexPage = ({ data }) => {
  const { title, description } = data.mdx.frontmatter;
  return (
    <Layout>
      <FrontHero title={title} description={description} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    mdx {
      frontmatter {
        title
        description
      }
    }
  }
`;

export default IndexPage;
