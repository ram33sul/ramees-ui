import './App.css'
import { routes } from './App.util'
import AppRouter from './components/utils/AppRouter/AppRouter.component'

function App() {

  return (
    <AppRouter
      routes={routes}
      isLoggedIn={false}
      setPageBeforeLogin={() => {}}
      />
  )
}

export default App
