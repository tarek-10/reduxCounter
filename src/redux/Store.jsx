import reducer from "./reducers/countRducer";

const redux = require("redux");

const createStore = redux.createStore;




const store = createStore(reducer);

export default store;