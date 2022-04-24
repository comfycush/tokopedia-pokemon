import styled from '@emotion/styled';
import React, { useState } from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from 'reactstrap';

// const Navbar = styled.div`
//   position: relative;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
//   padding-top: 0.5rem;
//   padding-bottom: 0.5rem;
//   background-color: ${(props) => props.theme.colors.warning};
// `;

// const NavbarContainer = styled.div`
//   display: flex;
//   flex-wrap: inherit;
//   align-items: center;
//   justify-content: space-between;
//   width: 100%;
//   padding-right: 0.75rem;
//   padding-left: 0.75rem;
//   margin-right: auto;
//   margin-left: auto;
// `;

// const NavbarToggler = styled.button`
//   padding: 0.25rem 0.75rem;
//   font-size: 1.25rem;
//   line-height: 1;
//   background-color: transparent;
//   border: 1px solid transparent;
//   border-radius: 0.25rem;
//   transition: box-shadow 0.15s ease-in-out;

//   color: rgba(0, 0, 0, 0.9);
//   padding-top: 0.3125rem;
//   padding-bottom: 0.3125rem;
//   margin-right: 1rem;
//   font-size: 1.25rem;
//   text-decoration: none;
//   white-space: nowrap;

//   @media (min-width: 768px) {
//     display: none;
//   }
// `;

const NavContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 999;
`;

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <NavContainer>
      <Navbar color="warning" light expand="md">
        {/* <NavbarContainer>
          Pokemon!
          <NavbarToggler onClick={toggle} />
        </NavbarContainer> */}
        <NavbarBrand href="/">Pokemon!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="/my-pokemon">My Pokemon List</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </NavContainer>
  );
};

export default NavigationBar;
