import Desktop from './pages/desktop/Desktop'
import { AppProvider } from './context/AppContext'
function App() {
  return (
    <AppProvider>
      <Desktop />
    </AppProvider>
  )
}

export default App