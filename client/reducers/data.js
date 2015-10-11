export function users(state={}, {type, payload}) {
  switch (type) {
  case 'GET_USERS_SUCCEEDED':
    return {...state, ...payload.json};
  case 'CREATE_USER_INITIATED':
    return {...state, optimistic: {name: payload.name, lastSeen: payload.lastSeen}};
  case 'CREATE_USER_SUCCEEDED':
    const {optimistic, ...oldState} = state;
    return {...oldState, [payload.json.name]: optimistic};
  default:
    return state;
  }
}

export function messages(state={}, {type, payload}) {
  switch (type) {
  case 'GET_MESSAGES_SUCCEEDED':
    return {...state, ...payload.json};
  case 'CREATE_MESSAGE_INITIATED':
    return {...state, optimistic: {content: payload.content, author: payload.author}};
  case 'CREATE_MESSAGE_SUCCEEDED':
    const {optimistic, ...oldState} = state;
    return {...oldState, [payload.json.name]: optimistic};
  default:
    return state;
  }
}
