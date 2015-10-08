export function currentUser(state={}, { type, payload }) {
  switch (type) {
  case 'POST_USER_SUCCEEDED':
    return payload.name;
  default:
    return state;
  }
}

export function currentUserInput(state='', { type, payload }) {
  switch (type) {
  case 'SET_CURRENT_USER_INPUT':
    return payload.name;
  default:
    return state;
  }
}

export function messageInput(state='', { type, payload }) {
  switch (type) {
  case 'SET_MESSAGE_INPUT':
    return payload.input;
  default:
    return state;
  }
}

export function messageFocused(state=false, { type, payload }) {
  switch (type) {
  case 'TOGGLE_MESSAGE_FOCUSED':
    return payload.bool;
  default:
    return state;
  }
}

export function showModal(state=false, { type, payload }) {
  switch (type) {
  case 'TOGGLE_SHOW_MODAL':
    return payload.bool;
  default:
    return state;
  }
}
