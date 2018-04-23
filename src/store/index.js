import { createStore } from 'redux';
import reducers from '../reducers/index.js';
import DevTools from '../dev-tools.js';

const store = createStore(reducers, DevTools.instrument() );

export default store;