import styled from 'styled-components'
import theme from '@/theme'

export const Container = styled.div`
  margin: 20px;
  padding: 20px;
  width: 1100px;
  max-width: 95vw;
  display: flex;
  justify-content: space-between;
`

export const Item = styled.div`
  border: 4px solid #${theme.gray};
  border-radius: 10px;
  width: 100%;
  height: 100px;
  margin: 0 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    border-color: #${theme.sky};
    div:first-child {
      color: #${theme.sky};
    }
    div:last-child {
      color: #${theme.light}dd;
    }
  }
  div {
    transition: 0.2s all;
  }
  div:first-child {
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 600;
    color: #${theme.sky}aa;
  }
  div:last-child {
    width: 90%;
    color: #${theme.light}99;
  }
`
