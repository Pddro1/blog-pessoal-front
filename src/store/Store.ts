import { tokenReducer } from './token/tokenReducer';
import { legacy_createStore as createStore } from "redux";

const store = createStore(tokenReducer)

export default store