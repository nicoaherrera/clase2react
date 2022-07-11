import React, {useState} from "react";

import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, MobileIcon, Wrapper } from "./NavBarElements";
import { FaLaravel, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CartWidget } from "./CartWidget";
import { FiShoppingCart } from "react-icons/fi";


const NavBar = () => {
      const [showMobileMenu, setShowMobileMenu] = useState(false)


    return (
        <Container>
            <Wrapper>
                  <IconContext.Provider value={{ style : {fontSize: "2em"}}}> 

                  
                <LogoContainer>
                   <FaLaravel/>
                   <p>NUTRIDIET MARKET</p>
                   
                </LogoContainer>
                <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FaBars />
                </MobileIcon>
                <Menu open={showMobileMenu}>
                    <MenuItem>
                        <MenuItemLink>
                           HOME
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
                    <CartWidget>
                           <FiShoppingCart/>
                        </CartWidget>   
                </Menu>
                </IconContext.Provider>
            </Wrapper>
        </Container>    
    );
};

export default NavBar;