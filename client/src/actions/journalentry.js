export const getEntries = () => {
  return(dispatch) => {
    fetch('/api/journal')
      .then( res => res.json() )
      .then( entries => dispatch({ type: 'ENTRY', entries }))
  }
}

// ADD AN ENTRY
export const addEntry = (title, body, image) => {
  return(dispatch) => {
    fetch('/api/journal', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, image })
    }).then( res => res.json() )
      .then( entry => dispatch({ type: 'ADD_ENTRY', entry }))
  }
}

// UPDATE AN ENTRY
export const updateEntry = (id, title, body, image) => {
  return(dispatch) => {
    fetch(`/api/journal/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, body, image })
    }).then( res => res.json() )
      .then( entry => dispatch({ type: 'UPDATE_ENTRY', entry }))
  }
}

// DELETE AN ENTRY
export const deleteEntry = (id, history) => {
  return(dispatch) => {
    fetch(`/api/journal/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then( () => {
      dispatch({ type: 'DELETE_ENTRY', id });
      history.push('/history');
    });
  }
}
