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

function postUserInitiated(name, lastSeen) {
  return {
    type: 'POST_USER_INITIATED',
    payload: {name: name, lastSeen: lastSeen}
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

export function postUser(name, lastSeen) {
  return (dispatch) => {
    dispatch(postUserInitiated(name, lastSeen));
    fetch(endpoint('users.json'), payload(
      {name: name, lastSeen: lastSeen}
    )).then((response) => {
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
