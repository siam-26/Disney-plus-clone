import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
            <Nav>
                <Logo src='/images/logo.svg'/>

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

                <UserImg src='https://images.mubicdn.net/images/cast_member/2184/cache-2992-1547409411/image-w856.jpg?size=800x'/>
            </Nav>
    );
};

export default Header;

const Nav=styled.nav`
       height:70px;
       background:#090b13;
       display:flex;
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

const UserImg=styled.img`
       height: 48px;
       width: 48px;
       border-radius: 50%;
       cursor:pointer;
`