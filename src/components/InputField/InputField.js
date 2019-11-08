import React, { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: ${props => {
    // console.log("style", props);
    return props.inputStyle ? props.inputStyle.width : "300px";
  }};
  height: 25px;
  padding-left: 10px;
  border-radius: 3px;
  border: 1px solid #888;
`;
const StyledP = styled.p`
  width: ${props => {
    // console.log("style", props);
    return props.inputStyle ? props.inputStyle.width : "300px";
  }};
  margin: 5px auto;
  font-size: 13px;
  text-align: left;
  color: red;
  align-self: center;
`;
const StyledContainer = styled.div`
  margin-top: 20px;
  display: flexbox;
  justify-content: center;
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
  const [error, setError] = useState(null);
  const inputHandler = e => {
    console.log("E", e.target.value);

    setInputValue(e.target.value);
  };
  const onClickHandler = () => {
    if (inputValue == "") {
      console.log("err");
      setError("Enter a valid Input");
      return;
    }
    props.onClick(inputValue);

    setError(null);
    setInputValue("");
  };
  console.log("ee", error);
  return (
    <StyledContainer>
      <div>
        <StyledInput
          type="text"
          value={inputValue}
          onChange={inputHandler}
          style={props.inputStyle}
        />
        {!error || error != "" ? (
          <StyledP style={props.inputStyle}>{error}</StyledP>
        ) : null}
      </div>
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
