import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby';
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo";

const About = ( {data} ) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="About" />
            <h1>About us</h1>
            <p>{`${company} was started by ${name} in 2022`}</p>
            <p>{`At ${company} we just make blogs!`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="../images/gatsby-astronaut.png"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem` }}
                />
            </div>
            <Link to = "/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          name
          company
            }
        }
    }
}
`