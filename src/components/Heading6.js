import styled from "styled-components";

const Title = styled.h6`
  //padding: 0.5rem 0rem;
  text-align: center;
`;

export const Heading6 = (props) => {
    return(
        <Title>{props.title}</Title>
    );
}