import React, { Component } from 'react';
import { Header, Divider, Container } from 'semantic-ui-react';
import { getEntries } from '../actions/journalentry';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import JournalEntryForm from './JournalEntryForm';

class Journal extends Component {
  componentDidMount() {
    this.props.dispatch(getEntries());
  }


  displayEntries = () => {
     return this.props.entry.map( ent => {
      return (
        <li key={ent._id} className="collection-item">
          <div>
            { ent.title }
            <span className="secondary-content">
              <Link to={`/journal/${ent._id}`}>
                <i className="material-icons">send</i>
              </Link>
            </span>
          </div>
        </li>
      )
    });
  }

  render() {
    return(
      <Container>
      <div>
        <Header as="h2">{this.username}</Header>
        <Header as="h3">{this._id}</Header>
        <Header as="h3">{this.role}</Header>
      </div>
        <Header as='h3' textAlign='center'>Add Journal Entry</Header>
        <Divider />
        <div className='row'>
          <div className='col s12 m6'>
            <JournalEntryForm />
          </div>
        </div>
      </Container>
    );
  }
}


const mapStateToProps = (state) => {
  return { entry: state.journal }
}

export default connect(mapStateToProps)(Journal);
