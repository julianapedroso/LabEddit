import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";

export const StyledCard = styled(Card)`
  min-width: 20vw;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StylePostCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  row-gap: 2rem;
  width: 100%;
  margin: 2rem auto;
`;

export const StyleCommentsCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  align-content: center;
  text-align: center;
  row-gap: 2rem;
  width: 40vw;
  margin: 2rem auto;
`;

export const LoadingGIF = styled.img`
  justify-content: center;
  display: flex;
  flex: 1;
  justify-items: center;
  align-items: center;
  align-self: center;
  margin: auto;
`;
