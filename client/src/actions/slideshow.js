export const getFiveEntries = () => {
  return(dispatch) => {
    fetch('/api/journal/top_five')
      .then(res => res.json())
      .then(entries => dispatch({ type: 'TOP_FIVE', entries})
    );
  }
}
