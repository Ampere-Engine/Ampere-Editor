import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  background-color: #1d2326;
  color: #e3e3e3;
`

const WindowOptions = styled.div`
  display: flex;
  > div {
    padding: 5px 10px;
    &:hover {
      background-color: #566672;
    }
  }
`

const WindowTitle = styled.div`
  padding: 5px 10px;
`

const WindowButtons = styled.div`
  display: flex;
  align-items: flex-end;
  > div {
    padding: 5px 10px;
    &:hover {
      background-color: #566672;
    }
    &:last-child {
      &:hover {
        background-color: #4b9faf;
      }
    }
  }
`

export default () => {
  return (
    <Navbar>
      <WindowOptions>
        <div>File</div>
        <div>View</div>
        <div>Help</div>
      </WindowOptions>
      <WindowTitle>Ampere Engine</WindowTitle>
      <WindowButtons>
        <div>
          <FontAwesomeIcon icon={['far', 'window-minimize']} />
        </div>
        <div>
          <FontAwesomeIcon icon={['far', 'square']} />
        </div>
        <div>
          <FontAwesomeIcon icon="times" />
        </div>
      </WindowButtons>
    </Navbar>
  )
}
