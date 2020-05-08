import { Switch, Route } from 'react-router-dom'
import React, {Fragment} from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home'
import Random from '../pages/Random'
import About from '../pages/About'
import BBProfile from '../pages/BBProfile'
import Birthday from '../pages/Birthday'
import Search from '../pages/Search'

const App = () => (
  <Fragment>
      <Header />
      <div id="main">
        <div id="content">
          <div>
            <article role="article">
            <Switch>
            <Route path="/search">
                <Search />
              </Route>
              <Route exact path="/" component={Home} />
              <Route path="/random">
                <Random />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/birthday">
                <Birthday />
              </Route>
              <Route path="/beanies/:bbID" component={BBProfile}/>
            </Switch>
              
            </article>
          </div>
        </div>
      </div>
      <Footer />
  </Fragment>
)

export default App

/*

<Switch>
        <Route exact path="/" component={Pets} />
      </Switch>
*/