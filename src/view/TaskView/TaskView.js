import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import InputField from "../../components/InputField/InputField";
import ListItem from "../../components/ListItem/ListItem";
// import { addListItem } from "../../utils/actions";
import * as actions from "../../utils/actions";

const StyledContainer = styled.div`
  height: 76.8vh;
  width: 110vh;
  /* background-color: yellow; */
  align-content: flex-start;
  /* background-color: red; */
  border: 1px solid black;
  padding: 15px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
`;
const TaskView = props => {
  console.log("TaskView", props.todos);
  const addListItem = text => {
    let listItemObject = {
      text,
      status: "todo"
    };
    props.addListItem(listItemObject);
  };
  const updateListItem = (id, val) => {
    let updateditem = {
      id,
      text: val
    };
    props.updateListItem(updateditem);
  };
  return (
    <StyledContainer>
      {/* <p>Select you Bucket...</p> */}
      <InputField
        inputStyle={{ width: "80vh" }}
        buttonStyle={{ width: "11vh" }}
        buttonText="Add Item"
        onClick={text => addListItem(text)}
      />
      {props.todos.currentId || props.todos.currentId == 0 ? (
        <div style={{ marginTop: "20px" }}>
          {props.todos.todos[props.todos.currentId].list.length ? (
            props.todos.todos[props.todos.currentId].list.map((item, i) => (
              <ListItem
                key={i}
                item={item}
                index={i}
                updateListItem={val => updateListItem(i, val)}
                deleteListItem={() => props.deleteListItem(i)}
              />
            ))
          ) : (
            <p>No data</p>
          )}
        </div>
      ) : null}
      {/* <ListItem /> */}
    </StyledContainer>
  );
};
const mapStateToProps = (state, props) => {
  return {
    todos: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addListItem: listItem => dispatch(actions.addListItem(listItem)),
    updateListItem: updateditem =>
      dispatch(actions.updateListItem(updateditem)),
    deleteListItem: id => dispatch(actions.deleteListItem(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskView);
