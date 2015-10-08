export function setInputValue(value) {
  return {
    type: 'SET_INPUT_VALUE',
    payload: { value: value }
  };
}

export function toggleInputFocused(bool) {
  return {
    type: 'TOGGLE_INPUT_FOCUSED',
    payload: { bool: bool }
  };
}

export function toggleshowModal(bool) {
  return {
    type: 'TOGGLE_SHOW_MODAL',
    payload: { bool: bool }
  };
}
