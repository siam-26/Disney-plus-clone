import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import Disney from './Disney';
import Originals from './Originals';
import Trending from './Trending';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../features/user/userSlice';
import { useEffect } from 'react';
import db from '../firebase';
import { setMovies } from '../features/movies/movieSlice';

const Home = () => {
    const  dispatch = useDispatch();
    const userName = useSelector(selectUserName);
    let recommendMovies = [];
    let disney = [];
    let originals = []; 
    let trending = [];

    useEffect(()=>{
        db.collection("movies")
        .onSnapshot((snapshot)=>{
            snapshot.docs.map((doc)=>{
                switch(doc.data().type){
                    case "recommend":
                        recommendMovies=[...recommendMovies,{id:doc.id,...doc.data()}];
                    break;

                    case "new":
                        disney = [...disney , {id:doc.id,...doc.data()}];
                    break;

                    case "original":
                        originals=[...originals,{id:doc.id,...doc.data()}];
                    break;

                    case "trending":
                        trending=[...trending,{id:doc.id,...doc.data()}];
                    break;
                }
            })
            dispatch(setMovies({
                recommendMovies:recommendMovies,
                disney:disney,
                originals:originals,
                trending:trending,
            }));
        })          
    },[userName]);
    
    return (
        <Container>
            <ImgSlider/>
            <Viewers/>
            <Movies/>
            <Disney/>
            <Originals/>
            <Trending/>
        </Container>
    );
};

export default Home;

const Container=styled.main`
     min-height: calc(100vh - 70px);
     padding:0 calc(3.5vw + 5px);
     position:relative;
     overflow-x:hidden;
     
     &:before{
        background:url("/images/home-background.png") center center / cover no-repeat fixed;
        content:"";
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        z-index:-1;
     }
`