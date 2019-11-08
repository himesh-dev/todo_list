import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";
import { connect } from "react-redux";
import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import BucketList from "./view/BucketList/BucketList";
import TaskView from "./view/TaskView/TaskView";
import * as actions from "./utils/actions";

const StyledDashboard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

function App(props) {
  // const []
  return (
    <div className="App">
      <Header />
      <InputField buttonText="Add Bucket" onClick={props.addBucket} />
      <StyledDashboard>
        <BucketList />
        <TaskView />
      </StyledDashboard>
    </div>
  );
}
const mapDispatchToProps = dispatch => {
  return {
    addBucket: bucketName => dispatch(actions.addBucket(bucketName))
  };
};

export default connect(
  // mapStateToProps,
  null,
  mapDispatchToProps
)(App);
