import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"
import Seo from "../components/seo"
import { GatsbyImage } from "gatsby-plugin-image"
import { LinkAlt } from '@styled-icons/boxicons-regular'

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
        <ul>
            {
              data.allContentfulBlogPost.edges.map(edge => (
              <li>
                  <div>
                      <GatsbyImage
                      image={edge.node.heroImage?.gatsbyImageData}
                      alt="test"/>
                      <Link to={edge.node.slug} key={edge.node.id} > <LinkAlt size="25" /> {edge.node.title} </Link>
                  </div>

                  <div>
                      {edge.node.body.childMarkdownRemark.excerpt}
                  </div>
              </li>
               ))
            }
        </ul>
  </Layout>
)

export default IndexPage

export const query = graphql`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
            body {
             childMarkdownRemark {
                excerpt
              }
            }
            heroImage {
                gatsbyImageData
                (layout: CONSTRAINED
                placeholder: BLURRED
                width: 300
                formats: [AUTO, WEBP, AVIF])
           }
         }
       }   
     }
   }
`
