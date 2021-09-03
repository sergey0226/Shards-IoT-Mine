import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 5.25rem;
  height: 5.25rem;
  bottom: 2%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, 50%);
  z-index: 2;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #edf1f7;
  font-size: 142%;
  color: ${props => (props.textColor ? props.textColor : "#007bff")};
  &:hover {
    cursor: pointer;
  }
`;

const RoundButton = ({ children, ...props }) => {
  // console.log(
  //   "🚀 ~ file: RoundButton.js ~ line 28 ~ RoundButton ~ props",
  //   props
  // );
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default RoundButton;
