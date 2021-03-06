import React from "react";
import { Link } from "gatsby";
import { graphql } from 'gatsby'
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo";

const Contact = ({ data }) => {
    const { name, company, address } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Contact" />
            <h1>Contact us</h1>
            <p>Please send all inquiries to: </p>
            <div>{company}</div>
            <div>{`C/O ${name}`}</div>
            <div>{address}</div>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
                <StaticImage
                    src="../images/gamer-plays-video-game.jpg"
                    width={300}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="A Gatsby astronaut"
                    style={{ marginBottom: `1.45rem`, top: "25px" }}
                />
            </div>
            <Link to="/">Home</Link>
        </Layout>
    )
}

export default Contact;
export const query = graphql`
query {
    site {
      siteMetadata {
        contact {
          name
          company
          address
            }
        }
    }
}`