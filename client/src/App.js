import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Auth from './components/Auth';
import NoMatch from './components/NoMatch';
import Journal from './components/Journal';
import SingleEntry from './components/SingleEntry';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import JournalHistory from './components/JournalHistory'
import { Container, Segment } from 'semantic-ui-react';

const App = () => (
  <Segment basic>
    <NavBar />
    <Container>
      <FetchUser>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/register" render={ (props) => <Auth {...props} title="Register" /> } />
          <Route path="/login" render={ (props) => <Auth {...props} title="Login" /> } />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute path="/singleentry/:id" component={SingleEntry} />
          <ProtectedRoute path='/history' component={JournalHistory} />
          <ProtectedRoute path="/journal" component={Journal} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </Container>
  </Segment>
);

export default App;
