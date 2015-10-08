import { DEFAULT_MESSAGES } from 'constants/data';

export function users(state=[], { type, payload }) {
  switch (type) {
  case 'POST_USER_SUCCEEDED':
    return [ ...state, payload.name];
  default:
    return state;
  }
}

export function messages(state=DEFAULT_MESSAGES) {
  return state;
}
