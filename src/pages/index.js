import { graphql } from "gatsby";
import * as React from "react";
import FrontHero from "../components/FrontHero";
import Layout from "../components/Layout";

// markup
const IndexPage = ({ data }) => {
  const { title, description, socials } = data.mdx.frontmatter;
  const frontHeroProps = { title, description, socials };
  console.log(socials);
  return (
    <Layout>
      <FrontHero {...frontHeroProps} />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    mdx {
      frontmatter {
        title
        description
        socials {
          url
          icon
        }
      }
    }
  }
`;

export default IndexPage;
