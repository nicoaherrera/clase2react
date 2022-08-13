import React, {useState} from "react";

import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./NavBarElements";
import { FaLaravel, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CartWidget } from "./CartWidget";
import { FiShoppingCart } from "react-icons/fi";
import {  Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";



const linkstyle = {
    
        margin: "0 10px",
        color: "#64b2ff",
        textDecoration: "none",
      
}

const NavBar = () => {
      const [showMobileMenu, setShowMobileMenu] = useState(false)
      const {totalProducts} = useCartContext();

    return (
        <Container>
            <Wrapper>
                  <IconContext.Provider value={{ style : {fontSize: "2em"}}}> 

                 
                <LogoContainer>
                
                   <FaLaravel/>
                <Link to="/" style={{textDecoration:"none"}}>    
                   <p>NUTRIDIET MARKET</p>
                </Link>   
                </LogoContainer>
               
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FaBars />
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                        <Link to="/" style={linkstyle}>HOME </Link>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                         <Link to="/category/frutas_secas" style={linkstyle}>Frutas Secas </Link>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                        <Link to="/category/varios" style={linkstyle}>Varios </Link>
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Quienes Somos
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Tienda
                        </MenuItemLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuItemLink>
                           Contacto
                        </MenuItemLink>
                       
                    </MenuItem>
                    <CartWidget><span style={{color:"white"}}>{totalProducts() || ''}</span>
                    <Link to="/Cart"><FiShoppingCart/></Link>
                        </CartWidget>   
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>    
    );
};

export default NavBar;