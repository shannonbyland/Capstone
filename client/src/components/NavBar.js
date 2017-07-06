import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu, Segment, Image } from 'semantic-ui-react';
import { logout } from '../actions/user';
import JL_Header from '../images/JL_Header.jpg';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about'},
]

const authenticatedLinks = [
  { name: 'Journal', path: '/journal' },
  { name: 'History', path: '/history' },
  { name: 'Logout' }
]

const unAuthenticatedLinks = [
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]

class NavBar extends React.Component {

  buildNavs = (navs) => {
    let { location, history, dispatch } = this.props;
    return navs.map( (nav, i) => {
      return (
        <Menu.Item
          key={i}
          active={ nav.name !== 'Logout' && nav.path === location.pathname}
          name={nav.name}
        >
          { nav.name === 'Logout' ?
             <a
               style={{ cursor: 'pointer' }}
               onClick={ () => {
                 dispatch(logout())
                 history.push('/login')
               }}
             >
               {nav.name}
             </a>
             :
             <NavLink to={nav.path}>
               {nav.name}
             </NavLink>
           }
         </Menu.Item>
       )
     });
  }

  render() {
    let { id } = this.props;
    let navs;

    if (id) {
      navs = [...links, ...authenticatedLinks];
    } else {
      navs = [...links, ...unAuthenticatedLinks];
  }

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
       <Image src={JL_Header} height={60} />
       { this.buildNavs(navs) }
      </Menu>
    </Segment>
  )
 }
}

const mapStateToProps = (state) => {
  return { id: state.user._id }
}

export default withRouter(connect(mapStateToProps)(NavBar));
