import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../firebase';
import styled from 'styled-components';

const Details = () => {
    const {id}=useParams();
    const [detail,setDetail]=useState({});

    useEffect(()=>{
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if(doc.exists){
                setDetail(doc.data());
            }
            else {
                console.log("no such document in firebase 🔥");
              }
        })
        .catch((error)=>{
            console.log(error);
        })
    },[id]);

    return (
        <Container>
            <Background>
                <img src={detail.backgroundImg}/>
            </Background>
            
            <ImgTitle>
                <img src={detail.titleImg}/>
            </ImgTitle>
            
            <Controls>
                <PlayButton>
                    <img src='/images/play-icon-black.png'/>
                    <span>PLAY</span>
                </PlayButton>

                <TrailerButton>
                    <img src='/images/play-icon-white.png'/>
                    <span>TRAILER</span>
                </TrailerButton>

                <AddButton>
                    <span>+</span>
                </AddButton>

                <GroupWatchButton>
                    <img src='/images/group-icon.png'/>
                </GroupWatchButton>
            </Controls>

            <SubTitles>
                {detail.subTitle}
            </SubTitles>

            <Description>
            {detail.description} 
            </Description>
        </Container>
    );
};

export default Details;

const Container=styled.div`
    position: relative;
    min-height: calc(100vh-250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`

const Background=styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 0px;
    top: 0px;
    z-index: -1;

    img {
        width: 100vw;
        height: 100vh;
    
        @media (max-width: 768px) {
          width: initial;
        }
      }
}

`

const ImgTitle=styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0px auto;
  height: 30vw;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;

  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
  }
`

const Controls=styled.div`
    display:flex;
    align-items:center;
`

const PlayButton=styled.button`
    display:flex;
    align-items:center;
    border-radius:4px;
    border:none;
    font-size:15px;
    padding:0px 24px;
    margin-right:22px;
    letter-spacing:1.8px;
    cursor:pointer;
    height:56px;

    &:hover{
        background:rgb(198, 198, 198);
    }
    @media (max-width:768px){
        height:45px;
        padding:0px 12px;
        font-size:12px;
        margin:0px 12px 0px 0px;
        img{
            width:25px;
        }
    }
`

const TrailerButton=styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249 , 249, 249);
    color:rgb(249 , 249, 249);

`

const AddButton=styled.button`
    background:rgba(0,0,0,0.6);
    margin-right:16px;
    width:44px;
    height:44px;
    border-radius:50%;
    border:2px solid white;
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;

    span{
        font-size:26px;
        color:white;
    }
`

const GroupWatchButton=styled(AddButton)`
   background:rgb(0,0,0);
`

const SubTitles=styled.div`
   color:rgb(249 , 249, 249);
   font-size:15px;
   margin-top:26px;
   min-height:20px;

   @media (max-width:768px){
     font-size:12px;
   }
`

const Description=styled.div`
   font-size:20px;
   margin-top:16px;
   color:rgb(249 , 249, 249);
   line-height:1.4;
   max-width:900px;

   @media (max-width:768px){
       font-size:14px
   }
`