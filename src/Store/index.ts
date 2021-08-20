import {createStore, applyMiddleware, combineReducers} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import WeatherReducer from "./Reducers/WeatherReducer";


const rootReducer= combineReducers({
    weather: WeatherReducer,
    
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type RootState= ReturnType<typeof rootReducer>;

export default store;