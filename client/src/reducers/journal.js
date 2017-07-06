//{ type: 'DELETE_NOTE' id: 'ssdj3r44klj43lk5j43' }
const journal = ( state = [], action ) => {
  switch (action.type) {
    case 'ENTRY':
      return action.entries
    case 'ADD_ENTRY':
      return [ action.entry, ...state ]
    case 'UPDATE_ENTRY':
      return state.map( entry => {
        if (entry._id === action.entry._id)
          return action.entry;
        return entry;
      })
    case 'DELETE_ENTRY':
      return state.filter( entry => entry._id !== action.id )
    default:
      return state;
  }
}

export default journal;
