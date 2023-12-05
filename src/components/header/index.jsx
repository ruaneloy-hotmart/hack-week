import {
  HcStructure,
  HcStructureHeader,
  HcStructureMenu,
  HcStructureMenuItem,
  HcStructureContent
} from "@hotmart-org-ca/cosmos-web/dist/react/hc-structure";

import { HcButton } from "@hotmart-org-ca/cosmos-web/dist/react/hc-button";
import { HcContainer } from "@hotmart-org-ca/cosmos-web/dist/react/hc-container";
import { HcH } from "@hotmart-org-ca/cosmos-web/dist/react/hc-h";
import { HcP } from "@hotmart-org-ca/cosmos-web/dist/react/hc-p";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/pro-light-svg-icons/faBell'
import { faGrid } from '@fortawesome/pro-light-svg-icons/faGrid'
import { faMeteor } from '@fortawesome/pro-light-svg-icons/faMeteor'
import { faPlanetRinged } from '@fortawesome/pro-light-svg-icons/faPlanetRinged'
import { faRocket } from '@fortawesome/pro-light-svg-icons/faRocket'
import { faRocketLaunch } from '@fortawesome/pro-light-svg-icons/faRocketLaunch'
import { faSatellite } from '@fortawesome/pro-light-svg-icons/faSatellite'
import { faTelescope } from '@fortawesome/pro-light-svg-icons/faTelescope'
import { faUserAstronaut } from '@fortawesome/pro-light-svg-icons/faUserAstronaut'
import { faUserCircle } from '@fortawesome/pro-light-svg-icons/faUserCircle'
import useAISuggestions from '../../hooks/use-ai-suggestions'

import './styles.css';

const Header = () => {
  const { suggestion, loading, getSuggestion} = useAISuggestions()

  return (
    <HcStructure>
      <HcStructureHeader slot="header">
        <HcButton slot="actions-start" variation="tertiary" context="neutral" 
          disabled={loading}
          onClick={() => getSuggestion('recomende um produto hotmart')}>
          Get a suggestion
        </HcButton>
        <HcButton slot="actions-end" variation="tertiary" context="neutral" size="large">
          <div slot="icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
        </HcButton>
        <HcButton slot="actions-end" variation="tertiary" context="neutral" size="large">
          <div slot="icon">
            <FontAwesomeIcon icon={faGrid} />
          </div>
        </HcButton>
        <HcButton slot="actions-end" variation="tertiary" context="neutral" size="large">
          <div slot="icon">
            <FontAwesomeIcon icon={faUserCircle} />
          </div>
        </HcButton>
      </HcStructureHeader>

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

      <HcStructureContent slot="content">
        {/* <HcContainer> <HcH> <HcP> it's not a part of the structure. Added for demonstration purpose only. */}
        <HcContainer>
          <HcH type="h1">Suggestion</HcH>
          {loading ? 
            <HcP>Loading...</HcP> : 
            <HcP>{suggestion || 'No suggestion available'}</HcP>
          }
        </HcContainer>
      </HcStructureContent>
    </HcStructure>
  )
}

export default Header
