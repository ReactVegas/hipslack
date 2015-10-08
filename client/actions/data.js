function postUserSucceeded(name) {
  return {
    type: 'POST_USER_SUCCEEDED',
    payload: { name: name }
  };
}

export function postUser(name) {
  return (dispatch) => {
    dispatch(postUserSucceeded(name));
  };
}
