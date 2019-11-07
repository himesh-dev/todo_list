import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  width: 100%;
  height: 50px;
  display: inline-block;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0px 0px 8px 2px #999;
`;
const StyledP = styled.p`
  font-size: 20px;
  float: left;
  margin: 10px 30px ;
  align-self: center;
  font-weight: bold;
`;
const Header = () => {
  return (
    <StyledHeader>
      <StyledP>Todo List</StyledP>
    </StyledHeader>
  );
};

export default Header;
