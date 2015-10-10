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
