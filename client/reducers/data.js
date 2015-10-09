export function users(state=[], {type, payload}) {
  switch (type) {
  case 'POST_USER_INITIATED':
    return [ ...state, payload.name];
  default:
    return state;
  }
}

export function messages(state=[], {type, payload}) {
  switch (type) {
  case 'POST_MESSAGE_INITIATED':
    return [ ...state, {content: payload.content, author: payload.author}];
  default:
    return state;
  }
}
