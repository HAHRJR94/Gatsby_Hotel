import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Navigation from './Navigation'

const Footer = ({ title }) => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44,62,80);
          margin-top: 5rem;
          padding: .5rem;
        `}
      >
        <NavBar>
          <Navigation />

          <Brand to={'/'}>
            <h1>Hotel Gatsby</h1>
          </Brand>
        </NavBar>
      </footer>
      <P>{title}. <small>Todos los derechos reservados {year} &copy;</small></P>
    </>
  )
}

export default Footer

//----------------------------- STYLE COMPONENTS -----------------------------//
const NavBar = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Brand = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`
const P = styled.p`
  text-align: center;
  color: #fff;
  background-color: rgb(33,44,55);
  margin: 0;
  padding: 1rem;
`