import Header from './components/Header'
import Posts from './components/Posts'
import ContextProvider from './context/AppContext'

const App = () => {
  return (
    <main className='w-full bg-main h-screen p-10'>
      <Header />
      <Posts />
    </main>
  )
}

export default App
