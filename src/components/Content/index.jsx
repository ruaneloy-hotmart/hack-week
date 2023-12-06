import { HcContainer } from "@hotmart/cosmos-web/dist/react/hc-container";
import { HcH } from "@hotmart/cosmos-web/dist/react/hc-h";
import { HcP } from "@hotmart/cosmos-web/dist/react/hc-p";
import { HcStructureContent} from "@hotmart/cosmos-web/dist/react/hc-structure";


const Content = ({suggestion, loading}) => {
  return (
    <HcStructureContent slot="content">
      <HcContainer>
        <HcH type="h1">Suggestion</HcH>
        {loading ? 
          <HcP>Loading...</HcP> : 
          <HcP>{suggestion || 'No suggestion available'}</HcP>
        }
      </HcContainer>
    </HcStructureContent>
  )
}

export default Content
