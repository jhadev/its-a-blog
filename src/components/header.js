import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

// use Link component but apply styles to it

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || 'normal'};
  line-height: 1;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    border-bottom: 2x solid #222;
    font-weight: bold;
    color: #f5429e;
  }

  &:last-of-type {
    margin-right: 0px;
  }
`;
const Header = () => {
  return (
    <header
      css={css`
        background: #eee;
        border-bottom: 1px solid #ddd;
        display: flex;
        justify-content: space-between;
        padding: 0.5rem calc((100vw - 550px - 0.5rem) / 2);
      `}
    >
      {/* site name */}
      <NavLink to="/" fontWeight="bold">
        logo
      </NavLink>
      {/* navigation */}
      <nav
        css={css`
          margin-top: 0;
        `}
      >
        <NavLink to="/" activeClassName="current-page">
          home
        </NavLink>
        <NavLink to="/about/" activeClassName="current-page">
          about
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
