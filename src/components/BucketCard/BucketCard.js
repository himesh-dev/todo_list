import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  height: 100px;
  width: 250px;
  padding: 5px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  margin: 10px;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledHeading = styled.div`
  height: 25px;
  /* background-color: blue; */
  /* display: inline; */
  padding-top: 8px;
  border-bottom: 1px solid #888 !important;
`;
const StyledP = styled.p`
  margin: 0px;
  /* vertical-align: middle; */
`;
const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  width: 250px;
  height: 30px;
`;
const StyledAddItem = styled.p`
  line-height: 0px;
  font-size: 12px;
`;
const BucketCard = () => {
  return (
    <StyledCard>
      <StyledHeading>
        <StyledP>todolist</StyledP>
      </StyledHeading>
      <StyledAddItem>No items</StyledAddItem>
      <StyledButton type="button">Add Item</StyledButton>
    </StyledCard>
  );
};

export default BucketCard;
