import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import DynamicImport from './DynamicImport';
import Home from './Home';
import Topics from './Topics';
import Settings from './Settings';

// const Home = (props) => (
//   <DynamicImport load={() => import('./Home' /* webpackChunkName: "home" */)}>
//     {(Component) => Component === null
//       ? <p>Loading...</p>
//       : <Component {...props} />}
//   </DynamicImport>
// );

// const Topics = (props) => (
//   <DynamicImport load={() => import('./Topics'  /* webpackChunkName: "topics" */)}>
//     {(Component) => Component === null
//       ? <p>Loading...</p>
//       : <Component {...props} />}
//   </DynamicImport>
// );

// const Settings = (props) => (
//   <DynamicImport load={() => import('./Settings' /* webpackChunkName: "settings" */)}>
//     {(Component) => Component === null
//       ? <p>Loading...</p>
//       : <Component {...props} />}
//   </DynamicImport>
// );

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/topics'>Topics</Link></li>
            <li><Link to='/settings'>Settings</Link></li>
          </ul>

          <hr />

          <Route exact path='/' component={Home} />
          <Route path='/topics' component={Topics} />
          <Route path='/settings' component={Settings} />
        </div>
      </Router>
    )
  }
}

export default App
