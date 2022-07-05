import React from "react";

import { Container, LogoContainer, Menu, MenuItem, MenuItemLink, Wrapper } from "./NavBarElements";
import { FaLaravel } from "react-icons/fa";

const NavBar = () => {
    return (
        <Container>
            <Wrapper>
                <LogoContainer>
                   <FaLaravel/>
                   <p>NUTRIDIET MARKET</p>
                   
                </LogoContainer>
                <Menu>
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
                </Menu>
            </Wrapper>
        </Container>
    );
};

export default NavBar;