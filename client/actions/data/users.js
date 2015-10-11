import {url} from 'helpers/network';

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
    fetch(url('users.json')).then((response) => {
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

function createUserInitiated(name, lastSeen) {
  return {
    type: 'CREATE_USER_INITIATED',
    payload: {name: name, lastSeen: lastSeen}
  };
}

function createUserSucceeded(json) {
  return {
    type: 'CREATE_USER_SUCCEEDED',
    payload: {json: json}
  };
}

function createUserFailed(response) {
  return {
    type: 'CREATE_USER_FAILED',
    payload: {response: response}
  };
}

export function createUser(name, lastSeen) {
  return (dispatch) => {
    dispatch(createUserInitiated(name, lastSeen));
    fetch(url('users.json'), {
      method: 'post',
      body: JSON.stringify({name: name, lastSeen: lastSeen})
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(createUserSucceeded(json));
        });
      } else {
        dispatch(createUserFailed(response));
      }
    });
  };
}

function updateUserInitiated(id, lastSeen) {
  return {
    type: 'UPDATE_USER_INITIATED',
    payload: {id: id, lastSeen: lastSeen}
  };
}

function updateUserSucceeded(json) {
  return {
    type: 'UPDATE_USER_SUCCEEDED',
    payload: {json: json}
  };
}

function updateUserFailed(response) {
  return {
    type: 'UPDATE_USER_FAILED',
    payload: {response: response}
  };
}

export function updateUser(currentUser, lastSeen) {
  return (dispatch) => {
    dispatch(updateUserInitiated(currentUser, lastSeen));
    fetch(url(`users/${currentUser.id}.json`), {
      method: 'put',
      body: JSON.stringify({name: currentUser.name, lastSeen: lastSeen})
    }).then((response) => {
      if (response.ok) {
        response.json().then((json) => {
          dispatch(updateUserSucceeded(json));
        });
      } else {
        dispatch(updateUserFailed(response));
      }
    });
  };
}
