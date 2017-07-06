import React from 'react';
import { connect } from 'react-redux';
import SlideShow from './SlideShow';
import { Header } from 'semantic-ui-react';

const Home = ({ username }) => (
  <div>
    <Header as="h3">
      { username ? `Welcome ${username}` : 'Welcome please sign in' }
      <SlideShow />
    </Header>
  </div>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(Home);
