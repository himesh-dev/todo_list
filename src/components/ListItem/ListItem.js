import React from "react";
import styled from "styled-components";
import edit from "../../assets/edit.svg";
import del from "../../assets/delete.svg";
const StyledList = styled.div`
  width: 100vh;
  margin-bottom: 10px;
  /* border-bottom: 1px solid black; */
  display: flex;
  padding: 5px 10px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const StyledText = styled.p`
  margin: 2px;
  text-align: left;
  font-size: 14px;
`;
const StyledButton = styled.button`
  width: 25px;
  height: 25px;
  align-content: center;
  display: flex;
  justify-content: center;
`;

const ListItem = () => {
  return (
    <StyledList>
      <StyledText>
        lfjbsdjvoigbuev hfuie bsfohiohe i iheowfhjsdnc ihihjlkbcdsilbgvadlksdbv
        dfbxbdfzbfb
      </StyledText>
      <div
        style={{
          display: "flex",
          backgroundColor: "blue",
          justifyContent: "center",
          alignContent: "center"
          //   marginBottom: "10px"
        }}
      >
        <StyledButton>
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
        <StyledButton>
          <img src={del} style={{ height: "15px" }} />
        </StyledButton>
      </div>
    </StyledList>
  );
};

export default ListItem;
