import styled from "styled-components";

const Title = styled.h2`
  text-align: center;
  padding: 1rem 0rem;
  font-weight: bolder;
  color: black;
`;

export const Heading2 = (props) => {
    return(
        <Title>{props.title}</Title>
    );
}