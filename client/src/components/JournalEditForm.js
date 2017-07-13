import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateEntry } from '../actions/journalentry';
import { Header, Button, Form, Container } from 'semantic-ui-react';

class JournalEditForm extends Component {
  entry = this.props.entries.find( ent => ent._id === this.props.id);

render() {
    let { title, body, image, _id } = this.entry

  return (
    <Container text>
      <Header as='h2' textAlign='center'>Update Journal Entry</Header>
      <Form
        ref={ n => this.form = n }
        onSubmit={ e => {
          e.preventDefault();
          this.props.dispatch(updateEntry( _id , this.title.value, this.body.value, image))
          this.props.toggleEdit()
        }}
      >
        <Form.Field>
          <label>Title</label>
          <input ref={ n => this.title = n } defaultValue={title} />
        </Form.Field>
        <Form.Field>
          <label>Entry</label>
          <textarea ref={ n => this.body = n } defaultValue={body} />
        </Form.Field>
          <Button
            basic color='black'
            content='Cancel'
            icon='cancel'
            labelPosition='left'
            onClick={() => this.props.toggleEdit()}
          />
          <Button
            basic color='green'
            content='Save'
            icon='save'
            labelPosition='left'
            floated='right' />
      </Form>
    </Container>
    )
  }
}

// when you connect a component, you get dispatch as a prop
// mapStateToProps - grabs state out of redux and passes it as props

const mapStateToProps = (state) => {
  return { entries: state.journal }
}
export default connect(mapStateToProps)(JournalEditForm);
