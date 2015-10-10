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

function getMessagesInitiated() {
  return {
    type: 'GET_MESSAGES_INITIATED'
  };
}

function getMessagesSucceeded(json) {
  return {
    type: 'GET_MESSAGES_SUCCEEDED',
    payload: {json: json}
  };
}

function getMessagesFailed(response) {
  return {
    type: 'GET_MESSAGES_FAILED',
    payload: {response: response}
  };
}

export function getMessages() {
  return (dispatch) => {
    dispatch(getMessagesInitiated());
    fetch(endpoint('messages.json')).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(getMessagesSucceeded(json));
        });
      } else {
        dispatch(getMessagesFailed(response));
      }
    });
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
    fetch(endpoint('messages.json'), payload({
      content: content, author: author
    })).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(postMessageSucceeded(json));
        });
      } else {
        dispatch(postMessageFailed(response));
      }
    });
  };
}
