import React from 'react';
import styled from 'styled-components';

const Details = () => {
    return (
        <Container>
            <Background>
                <img src='https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg'/>
            </Background>
            
            <ImgTitle>
                <img src='/images/logologo.png'/>
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
                2018 • 7m • Family, Fantasy, Kids, Animation
            </SubTitles>

            <Description>
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </Description>
        </Container>
    );
};

export default Details;

const Container=styled.div`
    min-height:calc(100vh-70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    
`

const Background=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:0.9;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
        
    }
`

const ImgTitle=styled.div`
    height:30vh;
    min-height:170px;
    width:35vw;
    min-width:200px;
     img{
        width:100%;
        height:100%;
        object-fit:contain;
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
    // background: rgb (249 , 249, 249);

    &:hover{
        background:rgb(198, 198, 198);
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
`

const Description=styled.div`
   font-size:20px;
   margin-top:16px;
   color:rgb(249 , 249, 249);
   line-height:1.4;
`