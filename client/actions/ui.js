export function setMessageInput(input) {
  return {
    type: 'SET_MESSAGE_INPUT',
    payload: { input: input }
  };
}

export function setCurrentUserInput(name) {
  return {
    type: 'SET_CURRENT_USER_INPUT',
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
