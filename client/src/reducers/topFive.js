const topFive = ( state = [], action ) => {
  switch(action.type) {
    case "TOP_FIVE":
      return action.entries;
    default:
      return state;
  }
}

export default topFive;
