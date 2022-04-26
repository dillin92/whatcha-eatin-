import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './NavbarElements';
    
    
    
    
    const Navbar = () => {
    
        return (
         <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        WhatchaEatin?
                    </NavLogo>
                    <MobileIcon>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks href="#portfolio">Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#about">Profile</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks href="#contact">History</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
         </>
        )
    }
   
    export default Navbar;
