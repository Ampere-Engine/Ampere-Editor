import styled from 'styled-components'
import theme from '@/theme'

const navPadding = 7

export const Navbar = styled.nav`
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  background-color: #${theme.dark};
  color: #${theme.light};
  cursor: default;
`

export const WindowOptions = styled.div`
  display: flex;
  > div {
    transition: 0.1s all;
    padding: ${navPadding}px 10px;
    &:hover {
      background-color: #${theme.gray};
    }
  }
`

export const WindowTitle = styled.div`
  text-align: center;
  padding: ${navPadding}px 10px;
  flex-grow: 1;
  app-region: drag;
`

export const WindowButtons = styled.div`
  display: flex;
  align-items: flex-end;
  > div {
    transition: 0.1s all;
    padding: ${navPadding}px 15px;
    &:hover {
      background-color: #${theme.gray};
    }
    &:last-child {
      padding: ${navPadding}px 18px;
      &:hover {
        background-color: #${theme.blue};
      }
    }
  }
`
