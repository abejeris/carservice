import { Link } from 'react-router-dom';
import { styled } from "styled-components";

export const NavbarContainer = styled.nav`

display: flex;
height: 90px;
justify-content: space-between;
align-items: center;
width: 70%;
margin: auto;
`;

export const NavbarLogo = styled.div`
    height: 27px;
`;

export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;

export const NavLinkItem = styled.li`
  margin-right: 30px;
  text-align: center;

  &:last-child {
    margin-right: 0;
  }
 
`;

export const NavLink = styled(Link)`
  font-family: ${props => props.theme.fonts.manrope};
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 16px;

`;
