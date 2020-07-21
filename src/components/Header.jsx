import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Navigation from './Navigation'

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44,62,80);
        padding: 1rem;
      `}
    >
      <NavBar>
        <Brand to={'/'}>
          <h1>Hotel Gatsby</h1>
        </Brand>
        <Navigation />
      </NavBar>
    </header>
  )
}

export default Header

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
