function postUserSucceeded(name) {
  return {
    type: 'POST_USER_SUCCEEDED',
    payload: {name: name}
  };
}

export function postUser(name) {
  return (dispatch) => {
    dispatch(postUserSucceeded(name));
  };
}

function postMessageSucceeded(content, author) {
  return {
    type: 'POST_MESSAGE_SUCCEEDED',
    payload: {content: content, author: author}
  };
}

export function postMessage(content, author) {
  return (dispatch) => {
    dispatch(postMessageSucceeded(content, author));
  };
}
