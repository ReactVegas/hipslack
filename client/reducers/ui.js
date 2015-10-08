export function currentUser(state='', { type, payload }) {
  switch (type) {
  case 'SET_CURRENT_USER':
    return payload.name;
  default:
    return state;
  }
}

export function messageValue(state='', { type, payload }) {
  switch (type) {
  case 'SET_MESSAGE_VALUE':
    return payload.value;
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
