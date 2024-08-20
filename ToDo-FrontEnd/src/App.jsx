import { useRoutes } from 'react-router-dom'
import { routes } from './routes'
import { Toaster } from 'react-hot-toast'

function App() {
  
  const element = useRoutes(routes)

  return (
    <>
      {element}
      <Toaster position='bottom-left' reverseOrder={false} />
    </>
  )
}

export default App
