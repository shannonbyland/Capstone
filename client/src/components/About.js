import React from 'react';
import { connect } from 'react-redux';
import { Header, Container, Image, Divider } from 'semantic-ui-react';
import JL_Logo from '../images/JL_Logo.jpg'

const About = ({ username }) => (
  <Container text>
    <Image src={JL_Logo} centered size='medium' />
    <Divider />
    <Header as="h2" textAlign='center'>About Journal Love</Header>
    <Divider />
      <p>
        Journal Love makes you fall in love with journaling again. Remember that time in Vegas? Or when you
        wanted to learn your sibling's darkest secret? Didn't think so. Who actually owns a pen anymore? Everyone
        uses devices now a days. Why not use it to journal? You will be able to read it for years to come!
      </p>
      <p>
        Can't think of anything to write? A picture is worth a 1000 words! Add a photo with the journal
        app and skip the lengthy story! Use this journal app as a photo album, so you can store your
        precious memories.
      </p>
      <Divider />
  </Container>
)

const mapStateToProps = (state) => {
  return { username: state.user.username }
}

export default connect(mapStateToProps)(About);
