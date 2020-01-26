import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Wrapper = styled('div')`
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  box-shadow: 0;
  display: block;
  margin: 0.5rem;
  width: 265px;
  transition: 200ms box-shadow linear;
  background-color: #000;

  &:focus,
  &:hover {
    box-shadow: 0 2px 14px #22222255;
    z-index: 10;
  }
`;

const Outer = styled('div')`
  cursor: pointer;
  perspective: 600;
`;

const Inner = styled('div')`
  height: 100%;

  transform-style: preserve-3d;
  transition: all 1s ease-in-out;
  width: 100%;

  &:hover {
    transform: rotateY(180deg);
  }
`;

const Front = styled('div')`
  backface-visibility: hidden !important;
  background-color: #000;
  border-radius: 6px;
  height: 100%;
  position: absolute;
  overflow: hidden;
  width: 100%;
  align-items: center;
  text-align: center;
`;

const Back = styled('div')`
  color: #0087cc;

  text-align: center;
  font-size: 14px;
  transform: rotateY(180deg);
`;

export { Wrapper, Outer, Inner, Front, Back };
