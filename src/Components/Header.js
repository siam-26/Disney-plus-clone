import React, { useEffect } from 'react';
import styled from 'styled-components';
import { auth,provider } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from '../features/user/userSlice';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async(user)=>{
            if(user){
                setUser(user);
                history.push('/');
            }
        })
    },[userName]);

    const handleAuth=()=>{
        if(!userName){
            auth.signInWithPopup(provider)
        .then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            console.log(error);
        })
        }
        else if(userName){
            auth.signOut().then(result=>{
                dispatch(setSignOutState())
                history.push('/login');
            })
        }
    }

    const setUser = (user) =>{
        dispatch(
            setUserLoginDetails({
                name:user.displayName,
                email:user.email,
                photo:user.photoURL,
            })
        )
    }
    
    return (
            <Nav>
                <Logo src='/images/logo.svg'/>

                {
                    !userName?                   
                        <Login onClick={handleAuth}>LOGIN</Login>
                    :
                <>
                   <NavMenu>
                    <a>
                        <img src='/images/home-icon.svg'/>
                        <span>Home</span>
                    </a>

                    <a>
                        <img src='/images/search-icon.svg'/>
                        <span>Search</span>
                    </a>

                    <a>
                        <img src='/images/watchlist-icon.svg'/>
                        <span>WatchList</span>
                    </a>

                    <a>
                        <img src='/images/original-icon.svg'/>
                        <span>Originals</span>
                    </a>

                    <a>
                        <img src='/images/movie-icon.svg'/>
                        <span>Movies</span>
                    </a>

                    <a>
                        <img src='/images/series-icon.svg'/>
                        <span>Series</span>
                    </a>
                </NavMenu>

                <SignOut>
                    <UserImg src={userPhoto} alt={userName}/>

                    <DropDown>
                         <span onClick={handleAuth}>Sign out</span>
                    </DropDown>
                </SignOut>
                </>
                }          
            </Nav>
    );
};

export default Header;

const Nav=styled.nav`
       height:70px;
       background:#090b13;
       display:flex;
       justify-content:space-between;
       align-items:center;
       padding:0 36px;
       overflow:hidden;
`

const Logo=styled.img`
        height:60px;
`

const NavMenu=styled.div`
    display:flex;
    flex:1;
    margin-left: 25px;
    align-items:center;
    

      a{
        display:flex;
        align-items:center;
        padding:0px 12px;
        cursor:pointer;

        img{
            height:20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position:relative;
            
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform:scaleX(0);
            }
        }
        &:hover{
            span:after{
                opacity:1;
                transform: scaleX(1);
            }
        }
      }
`
const Login=styled.a`
  background-color:rgba(0,0,0,0.6);
  padding:8px 16px;
  letter-spacing:1.5px;
  border:1px solid #f9f9f9;
  border-radius:4px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  cursor:pointer;
  &:hover{
    background-color:#f9f9f9;
    color:#000;
    border-color:transparent;
  }
`

const UserImg = styled.img`
   height:100%;
`

const DropDown = styled.div`
   position:absolute;
   top:48px;
   right:0px;
   background:rgb(19,19,19);
   border:1px solid rgba(151,151,151,0.34);
   border-radius:4px;
   box-shadow:rgb(0 0 0 / 50%) 0px 0px 18px 0px;
   padding:10px; 
   font-size:14px;
   letter-spacing:3px;
   width:100px;
   opacity:0;
`

const SignOut = styled.div`
   position:relative;
   height:48px;
   width:48px;
   display:flex;
   cursor:pointer; 
   align-items:center;
   justify-content:center;

   ${UserImg} {
      border-radius:50%;
      width:100%;
      height:100%;
   }
      &:hover{
         ${DropDown} {
            opacity:1;
            transition-duration:1s;
         }
      }
   
`

