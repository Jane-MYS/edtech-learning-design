
import { HashRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

function App() {
  const element = useRoutes(routes)
  
  return (
    <HashRouter>
      {element}
    </HashRouter>
  )
}

export default App
