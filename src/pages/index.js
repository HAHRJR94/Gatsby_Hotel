import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'

import Layout from '../components/Layout'
import Imagen from '../components/Imagen'
import HomeContent from '../components/HomeContent'
import useHabitacion from '../hooks/useHabitacion'
import PreviewRoom from '../components/PreviewRoom'

const IndexPage = () => {
  const habitaciones = useHabitacion()

  console.log(habitaciones)

  return (
    <Layout>
      <Imagen />
      <HomeContent />

      <h2
        css={css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}
      >
        Nuestras habitaciones
      </h2>
      <Ul>
        {habitaciones.map(habitacion => (
          <PreviewRoom key={habitacion.id} habitacion={habitacion} />
        ))}
      </Ul>
    </Layout>
  )
}

export default IndexPage

const Ul = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`