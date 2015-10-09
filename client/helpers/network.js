export function endpoint(endpoint) {
 return `https://hipslack.firebaseio.com/${endpoint}`;
}

export function payload(payload) {
  return {
    method: 'post',
    body: JSON.stringify(payload)
  };
}
