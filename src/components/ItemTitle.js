import styled from "styled-components";
import {Heading3} from "./Heading3";
import {CustomButton} from "./CustomButton";

const Title = styled.div`
  padding: 0.5rem;
  margin: 0.3rem;
  width: 12rem;
  display: inline-block;
  vertical-align: top;
`;

export const ItemTitle = (props) =>{
    return (
      <Title>
        <br />
        <Heading3 title={props.title} />
        <br />
        <CustomButton text={props.text} href="#" />
      </Title>
    );
}