import React from 'react';
import styled from 'styled-components';

const Login = () => {
    return (
        <Container>
            <CTA>
                <CtaLogoOne src='/images/cta-logo-one.svg'/>
                <Signup>GET ALL THERE</Signup>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CtaLogoTwo src='/images/cta-logo-two.png'/>
            </CTA>
        </Container>
    );
};

export default Login;

const Container=styled.div`
   position:relative;
   height: calc(100vh - 70px);
   display:flex;
   align-items:top;
   justify-content:center;

   &:before{
    background-position:top;
    background-size:cover;
    background-repeat:no-repeat;
    background-image:url("/images/login-background.jpg");
    content:"";
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
   }
`

const CTA=styled.div`
 width: 90%;
 max-width: 650px;
 padding: 95px 40px;
 display:flex;
 flex-direction:column;
 align-items:center;
 margin-top:100px;
`

const CtaLogoOne=styled.img`

`

const Signup=styled.a`
  background-color:#0063e5;
  color:#f9f9f9;
  font-weight:bold;
  font-size:18px;
  border-radius:4px;
  padding: 17px 0px;
  text-align:center;
  width:100%;
  cursor:pointer;
  transition: all 250ms;
  letter-spacing:1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover{
    background-color:#0483ee;
  }
`

const Description=styled.p`
   font-size:12px;
   letter-spacing:1.5px;
   text-align:center;
   line-height:1.5;
`

const CtaLogoTwo=styled.img`
   width: 90%;
`