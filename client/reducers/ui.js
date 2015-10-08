export function messageInput(state='', { type, payload }) {
  switch (type) {
  case 'SET_MESSAGE_VALUE':
    return payload.value;
  default:
    return state;
  }
}
