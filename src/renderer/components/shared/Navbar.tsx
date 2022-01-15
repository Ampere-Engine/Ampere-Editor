import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, WindowButtons, WindowOptions, WindowTitle } from './Navbar.c'
import { close, max, min } from './Navbar.s'

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
        <div onClick={min}>
          <FontAwesomeIcon icon={['far', 'window-minimize']} />
        </div>
        <div onClick={max}>
          <FontAwesomeIcon icon={['far', 'square']} />
        </div>
        <div onClick={close}>❌</div>
      </WindowButtons>
    </Navbar>
  )
}
