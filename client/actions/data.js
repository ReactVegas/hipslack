import {endpoint, payload} from 'helpers/network';

function getUsersInitiated() {
  return {
    type: 'GET_USERS_INITIATED'
  };
}

function getUsersSucceeded(json) {
  return {
    type: 'GET_USERS_SUCCEEDED',
    payload: {json: json}
  };
}

function getUsersFailed(response) {
  return {
    type: 'GET_USERS_FAILED',
    payload: {response: response}
  };
}

export function getUsers() {
  return (dispatch) => {
    dispatch(getUsersInitiated());
    fetch(endpoint('users.json')).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(getUsersSucceeded(json));
        });
      } else {
        dispatch(getUsersFailed(response));
      }
    });
  };
}

function postUserInitiated(name) {
  return {
    type: 'POST_USER_INITIATED',
    payload: {name: name}
  };
}

function postUserSucceeded(json) {
  return {
    type: 'POST_USER_SUCCEEDED',
    payload: {json: json}
  };
}

function postUserFailed(response) {
  return {
    type: 'POST_USER_FAILED',
    payload: {response: response}
  };
}

export function postUser(name) {
  return (dispatch) => {
    dispatch(postUserInitiated(name));
    fetch(endpoint('users.json'), payload({
      name: name
    })).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(postUserSucceeded(json));
        });
      } else {
        dispatch(postUserFailed(response));
      }
    });
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
