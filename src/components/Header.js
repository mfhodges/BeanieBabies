import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Header = () =>
    <Fragment>
        <header role="banner">
            <hgroup>
                <h1><a href="/">Beanie Babies</a></h1>
            </hgroup>
            <ul class="header-links">
                <li><Link to="/graphql">GraphQL</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="https://github.com/Mfhodges/beaniebabies">Github</a></li>
            </ul>
        </header>
        <nav role="navigation" class="header-nav"><ul class="main-navigation">
            <li><Link to="/random">🎲 Random</Link></li>
            <li><Link to="/search">🔍 Search</Link></li>
            <li><Link to="/birthday">🎂 Bday</Link></li>
        </ul>
        </nav>
    </Fragment>

export default Header