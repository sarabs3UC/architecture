import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const App = () => (
  <Fragment>
    <h4>Page 2</h4>
    <Link to="/">Home</Link>
    <br />
    <Link to="/page1">Page 1</Link>
  </Fragment>
);

export default App;
