export const MESSAGE_INPUT_CONTAINER_HEIGHT = 60;
export const SIDEBAR_WIDTH = 200;
export const INPUT_STYLES = {
  fontSize: 14,
  width: '100%',
  padding: '6px 8px',
  border: '2px solid',
  borderColor: '#E0E0E0',
  borderRadius: 5
};

export const BUTTON_STYLES = {
  outline: 0,
  fontSize: 14,
  color: 'white',
  borderRadius: 5,
  cursor: 'pointer',
  padding: '6px 8px',
  fontWeight: 'bold',
  borderColor: '#3699EE',
  backgroundColor: '#3699EE'
};

export function inputStyles(focused) {
  return {
    fontSize: 14,
    width: '100%',
    borderRadius: 5,
    padding: '6px 8px',
    border: '2px solid',
    borderColor: focused ? '#3699EE' : '#E0E0E0'
  };
}
