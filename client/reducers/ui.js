export function messageInput(state='', { type, payload }) {
  switch (type) {
  case 'SET_MESSAGE_INPUT':
    return payload.input;
  default:
    return state;
  }
}
