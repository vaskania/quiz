import ReactDOM from "react-dom";
import Reducer from "./components/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

const store = createStore(Reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
