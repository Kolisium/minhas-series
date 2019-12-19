import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const EditarGenero = (props) => {
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    axios.get(`/api/genres/${props.match.params.id}`).then(res => {
      
      setName(res.data.name)
    })
  }, [props.match.params.id])
  console.log(props)
  const onChange = evt => {
    setName(evt.target.value)
  }

  const save = () => {
    axios.put(`/api/genres/${props.match.params.id}`, {name}).then(res => {
      setSuccess(true)
    })
  }

  if(success){
    return (
      <Redirect to='/generos' />
    )
  }

  return (
    <div className='container'>
      <h1>Novo Genêros</h1>
      <form>
        <div className='form-group'>
          <label htmlFor='name'>Nome</label>
          <input type='text' className='form-control' value={name} onChange={onChange} id='name' placeholder='Nome do Genêro' />
        </div>
        <button type='button' onClick={save} className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default EditarGenero