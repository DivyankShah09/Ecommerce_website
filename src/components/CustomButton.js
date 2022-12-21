import styled from "styled-components";

const NewButton = styled.p`
  background-color: #2873f0;
  border: none;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  font-weight: 600;
  height: fit-content;
  width: 7rem;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
`
export const CustomButton = (props) => {
    return(
    <NewButton>{props.text}</NewButton>
    )
}
