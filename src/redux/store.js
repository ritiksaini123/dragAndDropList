import { legacy_createStore as createStore,applyMiddleware,compose } from "redux";
import  {thunk}  from "redux-thunk";
import {dataReducer} from './newsReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store=createStore(dataReducer,composeEnhancers(applyMiddleware(thunk)));