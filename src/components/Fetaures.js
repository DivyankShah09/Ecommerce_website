import styled from "styled-components";
import {Image} from "./Image";
import freedelivery from '../assets/images/freedelivery.png';
import support from '../assets/images/support.png';
import refund from '../assets/images/refund.png';

const FeatureWrapper = styled.div`
  width: 100%;
  background-color: white;
`;

const FeatureHolder = styled.div`
  padding: 1rem 1.5rem;
  margin: 0.5rem 0rem;
  width: fit-content;
  display: inline-block;
  text-align: center;
`;

const InternalDiv = styled.div`
  display: inline-block;
  margin: 0rem 0.4rem;
`

const ImageDiv = styled.div`
  display: inline-block;
  vertical-align: top;
`

const FeatureHeading = styled.h6`
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
`
const FeatureContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0px;
`

export const Features = () => {
  return (
    <FeatureWrapper>
        <center>
      <FeatureHolder>
          <ImageDiv>
              <Image src={freedelivery} height={45} width={45}/>
          </ImageDiv>
          <InternalDiv>
              <FeatureHeading>Free Shipping & Return</FeatureHeading>
              <FeatureContent>Free delivery on all orders above ₹200</FeatureContent>
          </InternalDiv>
      </FeatureHolder>
      <FeatureHolder className="divider">
          <ImageDiv>
              <Image src={support} height={45} width={45}/>
          </ImageDiv>
          <InternalDiv>
              <FeatureHeading>Online support 24/7</FeatureHeading>
              <FeatureContent>Call anyday anytime</FeatureContent>
          </InternalDiv>
      </FeatureHolder>
      <FeatureHolder>
          <ImageDiv>
              <Image src={refund} height={45} width={45}/>
          </ImageDiv>
          <InternalDiv>
              <FeatureHeading>Money Back Gaurantee</FeatureHeading>
              <FeatureContent>100% money back gaurantee</FeatureContent>
          </InternalDiv>
      </FeatureHolder>
        </center>
    </FeatureWrapper>
  );
};
