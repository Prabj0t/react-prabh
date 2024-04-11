import viteLogo from '/vite.svg'
import Card from './components/Card'
import './App.css'


function App() {

  return (
    <>
      <h1 className=' mb-4 bg-green-700 p-4 rounded-xl'>Tailwind test</h1>
      <Card username="Prabhjot" btntxt='kholke dekho' />
      <Card username="prabhuu" />
    </>
  )
}

export default App
