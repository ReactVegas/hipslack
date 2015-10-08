export function inputValue(state='', { type, payload }) {
  switch (type) {
  case 'SET_INPUT_VALUE':
    return payload.value;
  default:
    return state;
  }
}

export function inputFocused(state=false, { type, payload }) {
  switch (type) {
  case 'TOGGLE_INPUT_FOCUSED':
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
