import Header from './components/header'
import { HcStructure} from "@hotmart/cosmos-web/dist/react/hc-structure";

import useAISuggestions from './hooks/use-ai-suggestions'
import Menu from './components/menu';
import Content from './components/Content';

function App() {
  const { suggestion, loading, getSuggestion} = useAISuggestions()

  return (
    <HcStructure>
      <Header loading={loading} getSuggestion={getSuggestion} />
      <Menu/>
      <Content suggestion={suggestion} loading={loading}/>
    </HcStructure>
  )
}

export default App
