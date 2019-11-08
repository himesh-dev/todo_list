import React, { useState } from "react";
import styled from "styled-components";
import edit from "../../assets/edit.svg";
import del from "../../assets/delete.svg";
import close from "../../assets/close.svg";
import { updateListItemStatus } from "../../utils/actions";

const StyledList = styled.div`
  width: 100vh;
  margin-bottom: 10px;
  margin-top: 20px;
  /* border-bottom: 1px solid black; */
  display: flex;
  padding: 5px 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: ${props => {
    // console.log("style", props);
    return props.checked ? "#a8ffc1" : "#f5f5f5";
  }};
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledText = styled.p`
  margin: 2px;
  flex: 10;
  /* background-color: red; */
  text-align: left;
  font-size: 14px;
`;
const StyledButton = styled.button`
  width: 25px;
  flex: 1;
  height: 25px;
  align-content: center;
  display: flex;
  border: none;
  background-color: transparent;
  justify-content: center;
`;
const StyledInput = styled.input`
  width: 100vh;
  padding-left: 10px;
  border: none;
`;
const StyledInputBox = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #f5f5f5;
  border-radius: 4px;
`;
const ListItem = props => {
  const [editing, setEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const editHandler = () => {
    setEditing(true);
    setInputValue(props.item.text);
  };
  const updateHandler = e => {
    setInputValue(e);
  };
  const submitUpdateHandler = key => {
    if (key == "Enter") {
      props.updateListItem(inputValue);
      setEditing(false);
    }
  };
  const updateListItemStatus = () => {
    props.updateListItemStatus(props.item.status == "done" ? "todo" : "done");
  };
  return (
    <StyledList checked={props.item.status == "done" ? true : false}>
      {editing ? (
        <StyledInputBox>
          <StyledInput
            value={inputValue}
            onChange={e => {
              updateHandler(e.target.value);
            }}
            onKeyDown={e => submitUpdateHandler(e.key)}
          />
          <StyledButton onClick={() => setEditing(false)}>
            <img src={close} style={{ height: "15px" }} />
          </StyledButton>
        </StyledInputBox>
      ) : (
        <>
          <input
            // onKey
            type="checkbox"
            style={{ flex: 1 }}
            checked={props.item.status == "done" ? true : false}
            onChange={() => updateListItemStatus()}
          />
          <StyledText>{props.item.text}</StyledText>
          <div
            style={{
              display: "flex",
              // backgroundColor: "blue",
              justifyContent: "center",
              alignContent: "center"
              //   marginBottom: "10px"
            }}
          >
            <StyledButton onClick={() => editHandler()}>
              <img
                src={edit}
                style={{
                  height: "15px"
                  //   justifyContent:
                  //   alignSelf: "center",
                  //   backgroundColor: "red",
                  //   margin: "auto"
                }}
              />
            </StyledButton>
            <StyledButton onClick={() => props.deleteListItem()}>
              <img src={del} style={{ height: "15px" }} />
            </StyledButton>
          </div>
        </>
      )}
    </StyledList>
  );
};

export default ListItem;
