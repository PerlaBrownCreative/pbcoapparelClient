import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const Wrapper = styled.div`
  margin-left: 300px;
  margin-right: 300px;
`;

export const StyledButton = styled(IconButton)`
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 50px;
`;
