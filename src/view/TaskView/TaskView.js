import React from "react";
import styled from "styled-components";

import InputField from "../../components/InputField/InputField";
import ListItem from "../../components/ListItem/ListItem";

const StyledContainer = styled.div`
  height: 76.8vh;
  width: 110vh;
  background-color: yellow;
  align-content: flex-start;
  /* background-color: red; */
  border: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TaskView = () => {
  return (
    <StyledContainer>
      {/* <p>Select you Bucket...</p> */}
      <InputField
        inputStyle={{ width: "80vh" }}
        buttonStyle={{ width: "11vh" }}
        buttonText="Add Item"
      />
      <div style={{marginTop:"20px"}}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </StyledContainer>
  );
};

export default TaskView;
