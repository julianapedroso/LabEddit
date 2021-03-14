import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import Card from "@material-ui/core/Card";

export const StyledCard = styled(Card)`
  /* max-height: 300px; */
  min-width: 20vw;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyleSimpleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  height: auto;
  grid-gap: 1rem;
  margin: 2rem 1rem;
`;

export const SimpleCardResponsive = styled.div`
  @media (min-width: 500px) and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 95%;
  }

  @media (max-width: 499px) {
    display: flex;
    flex-direction: column;
    justify-self: center;
    width: 95%;
  }
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
