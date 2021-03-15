import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './components/Main/Main';
import Login from './components/SignUser/Login';
import Registration from './components/SignUser/Registration';
import Header from './components/Header/Header';
import NewPost from './components/NewPost/NewPost';
import logo from './assets/reddit-logo2.png';

export default function App() {
  return (
    <>
      <Header />
      <Router>
      <div className='nav'>
      <Link to='/'><img src={logo} alt='logo' />
      <p>post to /r/space: news, articles and discussion</p></Link>
      <Link to='/login'><button className='btn btn-primary'>Log in</button></Link>
      <Link to='/registration'><button className='btn btn-light sign-up'>Registration</button></Link>
      <Link to='/newpost'><div className='new-post'>New post</div></Link>
    </div>
        <Switch>
          <Route exact path='/'>
            <Main />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/registration'>
            <Registration />
          </Route>
          <Route path='/newpost'>
          <NewPost />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
