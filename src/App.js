import React from "react";
import logo from "./logo.svg";
import "./App.css";

import styled from "styled-components";

import Header from "./components/Header/Header";
import InputField from "./components/InputField/InputField";
import BucketList from "./view/BucketList/BucketList";
import TaskView from "./view/TaskView/TaskView";

const StyledDashboard = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;


function App() {
  return (
    <div className="App">
      <Header />
      <InputField buttonText="Add Bucket" />
      <StyledDashboard>
        <BucketList />
        <TaskView />
      </StyledDashboard>
    </div>
  );
}

export default App;
