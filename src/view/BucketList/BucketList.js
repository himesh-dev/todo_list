import React from "react";
import styled from "styled-components";

import BucketCard from "../../components/BucketCard/BucketCard";

const StyledContainer = styled.div`
  height: 76.8vh;
  width: 90vh;
  /* width: 100%; */
  align-content: flex-start;
  background-color: red;
  border: 1px solid black;
  padding: 15px;
  display: flex;
  /* justify-content: ; */
  flex-direction: row;
  flex-wrap: wrap;
`;
const BucketList = () => {
  console.log("BucketList");
  return (
    <StyledContainer>
      <BucketCard />
      <BucketCard />
      <BucketCard />
      <BucketCard />
      <BucketCard />
      <BucketCard />
    </StyledContainer>
  );
};

export default BucketList;
