export function setMessageValue(value) {
  return {
    type: 'SET_MESSAGE_VALUE',
    payload: { value: value }
  };
}
