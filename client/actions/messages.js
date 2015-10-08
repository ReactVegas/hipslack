export function setMessageInput(input) {
  return {
    type: 'SET_MESSAGE_INPUT',
    payload: { input: input }
  };
}
