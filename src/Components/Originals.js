import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Originals = () => {
    return (
        <Container>
            <h4>Originals</h4>

            <Content>
                <Wrap>
                    <Link to="/">
                       <img src='https://i.ytimg.com/vi/7rspQR7rhf0/maxresdefault.jpg'/>
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to='/'> 
                       <img src='https://pixarpost.com/wp-content/uploads/2020/10/1f02d-watch-pixar-bao-online-for-free.jpg'/> 
                    </Link>
                </Wrap>

                <Wrap>
                    <Link to='/'>
                       <img src='https://m.media-amazon.com/images/M/MV5BN2IxMmUwN2ItZjBlYy00OGZmLThlYjktN2JjOWFhM2EyMjBkXkEyXkFqcGdeQXVyODUxNjI1MzQ@._V1_.jpg'/>
                    </Link>
                </Wrap>

                <Wrap>
                    <img src='https://media.gq.com/photos/5c1e63340a6d90408dff16a5/master/w_1366,h_768,c_limit/Screenshot%202018-12-22%20at%2011.15.19%20AM.png'/>
                </Wrap>

                <Wrap>
                    <img src='https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/25/1529337756-bao1.jpg'/>
                </Wrap>

                <Wrap>
                    <img src='https://s1.dmcdn.net/v/SwTTq1XIH_Bj48cmU/x720'/>
                </Wrap>

                <Wrap>
                    <img src='https://media.blogto.com/articles/20190122-bao2.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70'/>
                </Wrap>

                <Wrap>
                    <img src='https://www.gamespot.com/a/uploads/original/171/1712892/3404259-3.png'/>
                </Wrap>
            </Content>
        </Container>
    );
};

export default Originals;

const Container=styled.div`

`

const Content=styled.div`
    display:grid;
    grid-gap:25px;
    grid-template-columns: repeat(4, minmax(0,1fr));

    @media (max-width:768px){
        grid-template-columns: repeat(2, minmax(0,1fr));
    }
`

const Wrap=styled.div`
   cursor:pointer;
   border-radius: 10px;
   border:3px solid rgba(249, 249, 249, 0.1);
   overflow:hidden;
   box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
   transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
   
   img{
      width:100%;
      height:100%;
      object-fit:cover;
   }

   &:hover{
      transform: scale(1.05);
      border-color:rgba(249, 249, 249, 0.8);
      box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
   }
`