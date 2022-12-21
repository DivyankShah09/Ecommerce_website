import styled from "styled-components";

const Title = styled.h3`
  text-align: center;
  padding: 1rem 0rem;
  font-weight: bolder;
`;

export const Heading3 = (props) => {
    return(
        <Title>{props.title}</Title>
    );
}