import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { CHANGE_NAME } from "../actions";

const App = ({ name, changeName }) => (
  <Fragment>
    <h4>Landing Page {name}</h4>
    <button onClick={() => changeName("Sam")}>Change Name</button>
    <Link to="/page1">Page 1</Link>
    <br />
    <Link to="/page2">Page 2</Link>
  </Fragment>
);

const mapStateToProps = state => ({
  name: state.CommonReducer.name
});

const mapActionsToProps = dispatch => ({
  changeName: name => dispatch(CHANGE_NAME(name))
});
export default connect(
  mapStateToProps,
  mapActionsToProps
)(App);
