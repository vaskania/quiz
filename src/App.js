import { Fragment } from "react";

import MainHeader from "./Layout/MainHeader";
import FinalScreen from "./components/FinalScreen";
import Questions from "./components/Questions";
import Settings from "./components/Settings";

function App() {
  return (
    <Fragment>
      <MainHeader></MainHeader>
      <Settings />
      <Questions></Questions>
      <FinalScreen></FinalScreen>
    </Fragment>
  );
}

export default App;
