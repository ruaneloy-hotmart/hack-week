import { HcStructureHeader } from "@hotmart/cosmos-web/dist/react/hc-structure";

import { HcButton } from "@hotmart/cosmos-web/dist/react/hc-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/pro-light-svg-icons/faBell'
import { faGrid } from '@fortawesome/pro-light-svg-icons/faGrid'

import { faUserCircle } from '@fortawesome/pro-light-svg-icons/faUserCircle'

import './styles.css';

const Header = ({ loading, getSuggestion }) => {
  return (
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
  )
}

export default Header
