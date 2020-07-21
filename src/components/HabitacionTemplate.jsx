import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import Layout from './Layout'

export const query = graphql`
  query($slug: String!) {
    allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        id
        slug
        contenido
        imagen {
          fluid(maxWidth: 1200) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`

const HabitacionTemplate = ({
  data: {
    allDatoCmsHabitacion: { nodes }
  }
}) => {
  const { titulo, contenido, imagen } = nodes[0]

  return (
    <Layout>
      <Main>
        <H1>{titulo}</H1>
        <p>{contenido}</p>
        <Image fluid={imagen.fluid} />
      </Main>
    </Layout>
  )
} 

export default HabitacionTemplate

const Main = styled.main`
  margin: 0 auto;
  max-width: 1200px;
  width: 95%;
`
const H1 = styled.h1`
  text-align: center;
  margin-top: 4rem;
`