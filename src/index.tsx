import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux'
import { AppWrapper } from "./App";

import store from "./store";

render(<AppWrapper />, document.getElementById("root"));
