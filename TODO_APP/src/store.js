import legacy_createStore from "redux"
import todoReducer from "./reducer"
import thun

const store = legacy_createStore(todoReducer,applyMiddleware(thunk))

export default store