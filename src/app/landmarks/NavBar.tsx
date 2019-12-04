import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { staticRoutes } from 'app/staticRoutes';
import { spacedContainer, flexCentered } from 'app/styles/utils';

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  ${spacedContainer('0.25rem')}
  a {
    flex: 0 0 6rem;
    ${flexCentered}
    color: black;
    border: 1px solid;
    padding: 0.25rem 0.5rem;
  }
`

const NavBar = () => {
  return (
    <StyledNav>
      <Link to={staticRoutes.overview}>overview</Link>
      <Link to={staticRoutes.government}>government</Link>
      <Link to={staticRoutes.population}>population</Link>
      <Link to={staticRoutes.industry}>industry</Link>
      <Link to={staticRoutes.science}>science</Link>
      <Link to={staticRoutes.military}>military</Link>
      <Link to={staticRoutes.diplomacy}>diplomacy</Link>
    </StyledNav>
  );
};

export default NavBar;