import './App.css'
import FormSection from './assets/FormSection'
import Posts from './assets/Posts'
import { local_posts, handleFetch_Data } from './FetchApi'

function App() {

  return (
    <>
    <FormSection />
    <Posts/>
    </>
  )
}

export default App
