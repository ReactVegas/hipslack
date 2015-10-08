function postUserSucceeded(json) {
  return {
    type: 'POST_USER_SUCCEEDED',
    payload: { json: json }
  };
}

export function postUser(name) {
  return (dispatch) => {
    dispatch(postUserSucceeded(name));
  };
}
