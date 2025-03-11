import { HashRouter } from 'react-router-dom'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

function AppRoutes() {
  const element = useRoutes(routes)
  return element
}

function App() {
  return (
    <HashRouter>
      <AppRoutes />
    </HashRouter>
  )
}

export default App
