import styled from "styled-components";

export const Container = styled.div`
width: 100%;
height: 70px;
background-color: #23394d;
`;

export const Wrapper = styled.div`
width: 100%;
max-wifht: 1300px;
height: 100%;
display:flex;
flex-wrap:wrap;
justify-contect: space-between;
margin: auto;
`;

export const LogoContainer = styled.div`
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;
`;

export const Menu = styled.ul`
height: 100%;
display: flex;
justify-contect: space-between;
list-style: none;
`;

export const MenuItem = styled.li`
height: 100%;
`;

export const MenuItemLink = styled.a`
height: 100%;
display: flex;
justify-contect: center;
align-items: center;
padding: 0.5rem 2.5rem;
color: #64b2ff;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
transition: 0.5s all ease;

&:hover {
    color: #fff;
    background-color: #e0792a;
    transition: 0.5s all ease;
}
`;

