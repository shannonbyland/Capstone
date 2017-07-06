import React, { Component } from 'react';
import { Header, Image, Divider, Container, Item, Button } from 'semantic-ui-react';
import Timestamp from 'react-timestamp';
import { getEntries, updateEntry, deleteEntry } from '../actions/journalentry';
import { connect } from 'react-redux';
import JournalEditForm from './JournalEditForm';

class SingleEntry extends Component {

  state = { edit: false, id: ''}

  componentDidMount() {
    this.props.dispatch(getEntries())
  }

  displayEntry = () => {
    let { entry: ent } = this.props;

      if (ent.body) {
        let body = ent.body.split('\n').map( (b, i) => b === '' ? <br key={i} /> : b);
        return (
          <Container text>
            <Header as ='h2'>{ent.title}</Header>
            <Timestamp time={ ent.createdAt } format="date" className='cinema' />
            <Divider />
            <Item>
                <Image src={ent.image} size='large' centered />
            </Item>
            <Divider />
            <p>{body}</p>
            <Divider  />
            <Button basic color='black' icon='edit' labelPosition='left' size='small' onClick={() => this.toggleEdit(ent._id)} content='Edit' />
            <Button basic color='red' icon='trash outline' labelPosition='left' size='small' floated='right' onClick={() => this.props.dispatch(deleteEntry(ent._id))} content='Delete' />
          </Container>
        )
      }
    }

    toggleEdit = (id) => {
    this.setState({ edit: !this.state.edit, id })
  }

  updateEntry = (title, body) => {
    let { dispatch, entry, history } = this.props
    dispatch(updateEntry(entry._id, title, body ))
    history.push('/journal')
  }

  render () {
    return (
      <div>
        {this.state.edit ?
          <JournalEditForm
            id={this.state.id}
            toggleEdit={this.toggleEdit}
            updateEntry={this.updateEntry}/>
          : this.displayEntry() }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  let entry = state.journal.find( j => j._id === props.match.params.id ) || {}
  return { entry }
}

export default connect(mapStateToProps)(SingleEntry)
