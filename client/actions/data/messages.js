import {url} from 'helpers/network';

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
    fetch(url('messages.json')).then((response) => {
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

function createMessageInitiated(content, author) {
  return {
    type: 'CREATE_MESSAGE_INITIATED',
    payload: {content: content, author: author}
  };
}

function createMessageSucceeded(json) {
  return {
    type: 'CREATE_MESSAGE_SUCCEEDED',
    payload: {json: json}
  };
}

function createMessageFailed(response) {
  return {
    type: 'CREATE_MESSAGE_FAILED',
    payload: {response: response}
  };
}

export function createMessage(content, author) {
  return (dispatch) => {
    dispatch(createMessageInitiated(content, author));
    fetch(url('messages.json'), {
      method: 'post',
      body: JSON.stringify({content: content, author: author})
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(createMessageSucceeded(json));
        });
      } else {
        dispatch(createMessageFailed(response));
      }
    });
  };
}
