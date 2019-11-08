import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import BucketCard from "../../components/BucketCard/BucketCard";
import * as actions from "../../utils/actions";

const StyledContainer = styled.div`
  height: 76.8vh;
  width: 90vh;
  /* width: 100%; */
  align-content: flex-start;
  /* background-color: red; */
  border: 1px solid black;
  padding: 15px;
  display: flex;
  /* justify-content: ; */
  flex-direction: row;
  flex-wrap: wrap;
`;
const BucketList = props => {
  console.log("BucketList", props.todos.todos);
  const selectBucketHandler = i => {
    props.addCurrentId(i);
  };
  return (
    <StyledContainer>
      {props.todos.todos.length > 0
        ? props.todos.todos.map((todo, i) => (
            <BucketCard
              key={i}
              todo={todo}
              index={i}
              selectBucketHandler={() => selectBucketHandler(i)}
            />
          ))
        : null}
    </StyledContainer>
  );
};

const mapStateToProps = (state, props) => {
  console.log("STATE", state);
  return {
    todos: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addCurrentId: id => dispatch(actions.addCurrentId(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BucketList);
