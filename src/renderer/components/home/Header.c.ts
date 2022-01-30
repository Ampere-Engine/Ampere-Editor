import styled, { keyframes } from 'styled-components'
import logo_img from '>>/logo/logo2.png'
import theme from '@/theme'

const rainbow = keyframes`
  0%   {color: #A7AEB4;}
  25%  {color: #CBD4DB;}
  50%  {color: #ADC5D8;}
  75% {color: #92A6B5;}
  100%   {color: #A7AEB4;}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  color: ${theme.black};
  font-weight: 600;
  line-height: 60px;
  user-select: none;
`

export const Logo = styled.div`
  margin: 20px;
  width: 210px;
  height: 210px;
  background-image: url(${logo_img});
  background-size cover;
`

export const Ampere = styled.div`
  font-size: 80px;
  animation: ${rainbow} 7s linear infinite;
`

export const Engine = styled.div`
  font-size: 55px;
  animation: ${rainbow} 7s linear infinite;
`
