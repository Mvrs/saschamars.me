import React, { useState } from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './burger.styled';
import Header from '../header';

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Header open={open} />
    </>
  );
};

export default Burger;
