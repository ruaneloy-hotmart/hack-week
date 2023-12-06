import {
  HcStructureMenu,
  HcStructureMenuItem,
} from "@hotmart/cosmos-web/dist/react/hc-structure";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMeteor } from '@fortawesome/pro-light-svg-icons/faMeteor'
import { faPlanetRinged } from '@fortawesome/pro-light-svg-icons/faPlanetRinged'
import { faRocket } from '@fortawesome/pro-light-svg-icons/faRocket'
import { faRocketLaunch } from '@fortawesome/pro-light-svg-icons/faRocketLaunch'
import { faSatellite } from '@fortawesome/pro-light-svg-icons/faSatellite'
import { faTelescope } from '@fortawesome/pro-light-svg-icons/faTelescope'
import { faUserAstronaut } from '@fortawesome/pro-light-svg-icons/faUserAstronaut'

const Menu = () => {
  return (
    <HcStructureMenu slot="menu">
    <HcStructureMenuItem slot="items" onClickItem={() => { console.log('Click') }}>
      <div slot="icon">
        <FontAwesomeIcon icon={faRocketLaunch} />
      </div>
      Default
    </HcStructureMenuItem>

    <HcStructureMenuItem slot="items">
      <div slot="icon">
        <FontAwesomeIcon icon={faPlanetRinged} />
      </div>
      Default

      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default
      </HcStructureMenuItem>
      <HcStructureMenuItem slot="items">
        <div slot="icon">
          <FontAwesomeIcon icon={faRocket} />
        </div>
        Default

        <HcStructureMenuItem slot="items">
          <div slot="icon">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          Default
        </HcStructureMenuItem>
        <HcStructureMenuItem slot="items">
          <div slot="icon">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          Default
        </HcStructureMenuItem>
        <HcStructureMenuItem slot="items">
          <div slot="icon">
            <FontAwesomeIcon icon={faRocket} />
          </div>
          Default
        </HcStructureMenuItem>
      </HcStructureMenuItem>
    </HcStructureMenuItem>

    <HcStructureMenuItem slot="items">
      <div slot="icon">
        <FontAwesomeIcon icon={faTelescope} />
      </div>
      Default
    </HcStructureMenuItem>

    <HcStructureMenuItem slot="items">
      <div slot="icon">
        <FontAwesomeIcon icon={faMeteor} />
      </div>
      Default
    </HcStructureMenuItem>

    <HcStructureMenuItem slot="items" external-link>
      <div slot="icon">
        <FontAwesomeIcon icon={faUserAstronaut} />
      </div>
      Default
    </HcStructureMenuItem>

    <HcStructureMenuItem slot="items">
      <div slot="icon">
        <FontAwesomeIcon icon={faSatellite} />
      </div>
      Default
    </HcStructureMenuItem>
  </HcStructureMenu>
  )
}

export default Menu
