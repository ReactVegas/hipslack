import { combineReducers } from 'redux';
import * as data from 'reducers/data';
import * as ui from 'reducers/ui';

export const rootReducer = combineReducers({
  ui: combineReducers({...ui}),
  data: combineReducers({...data})
});
