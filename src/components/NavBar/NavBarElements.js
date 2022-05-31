import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 0;
  background: rgb(41,0,30);
  background: rgb(36, 36, 36);
  width:100%;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  span{
    color: rgba(255, 255, 255);
    text-transform: uppercase;
    font-size: 12px;
    opacity: 0.7;
  }

  h2{
    font-size: 1.25rem;
    font-weight: bold;
    border: 3px solid rgb(240, 100, 60);
    padding: 3px;
    color: rgba(240, 100, 60);
  }

  &.active {
    span{
        color: rgba(240, 100, 60);
    }
  }

  &:hover {
    span{
        opacity: 1;
        border-bottom: 1px solid #dbdbdb;
    }
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
  @media screen and (max-width: 425px) {
    transform: translate(-100%, 50%);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: ${({open}) => open ? '' : 'none'};
    padding-bottom: 10vh;
    flex-direction: column;
    position: fixed;
    top: 10vh;
    background: rgb(36, 36, 36, 0.7);
    backdrop-filter: blur(6px);
    width: 100vw;
    height: 100vh;
  }
`;

export const NavButton = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavButtonLink = styled(Link)`
  border-radius: 4px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Image = styled.img`
  padding: 0.75 rem;
  width: 100%;
  max-width: 100px;
  height: auto;
`