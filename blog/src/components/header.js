import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from 'styled-components'
import '../components/Navbar.css'

const Outer = styled.header`
background: ${props => props.theme.header.backgroundColor};
margin-bottom: 1.45rem;
`

const Inner = styled.div`
margin: 0px auto;
max-width: 960px;
padding: 1.45rem 1.0875rem;
`

const H1 = styled.h1`
margin: 0px;
`

const StyledLink = styled(Link)`
color: white;
text-decoration: none;
&:hover {
    color: purple
}
`

const navBar = styled.nav`
    align: right;
`

const Header = ({ siteTitle }) => (
    <H1>
        <a href = "/" class = "pageTitle"> {siteTitle} </a>
        <ul class="ul1">
            <li class="nav">
                <a class = "noDecoration" href="/"> Home </a>
            </li>
            <li class="nav">
                <a class="noDecoration" href="/about"> About </a>
            </li>
            <li class="nav">
                <a class="noDecoration" href="/contact"> Contact </a>
            </li>
        </ul>
    </H1>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
