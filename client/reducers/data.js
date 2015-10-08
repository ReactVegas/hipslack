export function users(state=[], { type, payload }) {
  switch (type) {
  case 'POST_USER_SUCCEEDED':
    return [ ...state, payload.name];
  default:
    return state;
  }
}

export function messages(state=[], { type, payload }) {
  switch (type) {
  case 'POST_MESSAGE_SUCCEEDED':
    return [ ...state, { content: payload.content, author: payload.author }];
  default:
    return state;
  }
}
