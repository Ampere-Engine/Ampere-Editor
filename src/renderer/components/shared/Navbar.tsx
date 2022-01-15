import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navbar, WindowButtons, WindowOptions, WindowTitle } from './Navbar.c'

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
        <div>❌</div>
      </WindowButtons>
    </Navbar>
  )
}
