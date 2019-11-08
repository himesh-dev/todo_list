import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${props => {
    // console.log("style", props);
    return props.inputStyle ? props.inputStyle.width : "300px";
  }};
  height: 25px;
  border-radius: 3px;
  border: 1px solid #888;
`;
const StyledContainer = styled.div`
  margin-top: 20px;
`;
const StyledButton = styled.button`
  width: ${props => {
    // console.log("style", props);
    return props.buttonStyle ? props.buttonStyle.width : "100px";
  }};
  margin-left: 5px;
  height: 28px;
  border-radius: 3px;
  border: none;
  color: #fff;

  background-color: blue;
`;
const InputField = props => {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = e => {
    console.log("E", e.target.value);
    setInputValue(e.target.value);
  };
  const onClickHandler = () => {
    props.onClick(inputValue);
    setInputValue("");
  };
  return (
    <StyledContainer>
      <StyledInput
        type="text"
        value={inputValue}
        onChange={inputHandler}
        style={props.inputStyle}
      />
      <StyledButton
        type="button"
        style={props.buttonStyle}
        onClick={() => onClickHandler()}
      >
        {props.buttonText}
      </StyledButton>
    </StyledContainer>
  );
};

export default InputField;
