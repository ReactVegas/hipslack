import {endpoint, payload} from 'helpers/network';

function postUserInitiated(name) {
  return {
    type: 'POST_USER_INITIATED',
    payload: {name: name}
  };
}

export function postUser(name) {
  return (dispatch) => {
    dispatch(postUserInitiated(name));
  };
}

function postMessageInitiated(content, author) {
  return {
    type: 'POST_MESSAGE_INITIATED',
    payload: {content: content, author: author}
  };
}

function postMessageSucceeded(json) {
  return {
    type: 'POST_MESSAGE_SUCCEEDED',
    payload: {json: json}
  };
}

function postMessageFailed(response) {
  return {
    type: 'POST_MESSAGE_FAILED',
    payload: {response: response}
  };
}

export function postMessage(content, author) {
  return (dispatch) => {
    dispatch(postMessageInitiated(content, author));
    return fetch(endpoint('messages.json'), payload({
      content: content, author: author
    })).then((response) => {
      if (response.ok) {
        return response.json().then((json) => {
          return dispatch(postMessageSucceeded(json));
        });
      } else {
        return dispatch(postMessageFailed(response));
      }
    });
  };
}
