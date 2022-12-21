import styled from "styled-components";
import React from "react";
import {Image} from "./Image";
import {Heading6} from "./Heading6";

const ItemHolder = styled.div`
  padding: 0.5rem;
  margin: 0.3rem;
  width: 12rem;
  display: inline-block;
  height: 16rem;
  &:hover{
    transform: scale(1.03);
  }
`

const Rating = styled.p`
  padding-x: 0.1rem;
  color: white;
  background-color: #388e3c;
  border-radius: 0.1rem;
  width: 2rem;
  font-size: 0.8rem;
  margin: 0rem;
  float: left;
  text-align: center;
  font-weight: 600;
`
const Review = styled.p`
  padding: 0rem 0.2rem;
  color: #909090;
  font-size: 0.8rem;
  margin: 0rem 0.1rem;
  float: left;
  font-weight: 600;
`

const DealPrice = styled.span`
  color: black;
  font-size: 0.8rem;
  font-weight: 600;
  float: left;
`
const OriginalPrice = styled.span`
  color: #909090;
  margin: 0rem 0.2rem;
  font-size: 0.8rem;
  text-decoration: line-through;
  font-weight: 600;
  float: left;
`
const Discount = styled.span`
  color: #388e3c;
  font-size: 0.7rem;
  margin: 0rem 0.2rem;
  font-weight: 600;
  float: left;
`

export const Item = (props) => {
    return(
    <ItemHolder className="image">
        <center>
        <Image src={props.path} height={145} width={120}/>
        </center>
        <Heading6 title={props.title} />
        <Rating>{props.rating}</Rating>
        <Review>({props.review})</Review>
        <br />
        <DealPrice>₹{props.dealprice}</DealPrice>
        <OriginalPrice>₹{props.originalprice}</OriginalPrice>
        <Discount>{props.discount}</Discount>
    </ItemHolder>
    )
}