import React, {useState, useEffect} from 'react';
import CustomNavbar from './components/CustomNavbar';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Generos from './components/Generos'
import NovoGenero from './components/NovoGenero'
import EditarGenero from './components/EditarGenero'

const Home = () => {
  return (
    <h1>Home</h1>
  )
}

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api').then(res => {
      setData(res.data);
    })
  }, [])
  return (
    <Router>
      <div>
        <CustomNavbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/generos' component={Generos} />
        <Route path='/generos/novo' component={NovoGenero} />
        <Route path='/generos/:id' component={EditarGenero} />
        <pre>{JSON.stringify(data)}</pre>
      </div>
    </Router>
  )
}

export default App