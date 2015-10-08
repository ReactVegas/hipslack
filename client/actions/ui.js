export function setMessageValue(value) {
  return {
    type: 'SET_MESSAGE_VALUE',
    payload: { value: value }
  };
}

export function setCurrentUser(name) {
  return {
    type: 'SET_CURRENT_USER',
    payload: { name: name }
  };
}

export function toggleMessageFocused(bool) {
  return {
    type: 'TOGGLE_MESSAGE_FOCUSED',
    payload: { bool: bool }
  };
}

export function toggleshowModal(bool) {
  return {
    type: 'TOGGLE_SHOW_MODAL',
    payload: { bool: bool }
  };
}
