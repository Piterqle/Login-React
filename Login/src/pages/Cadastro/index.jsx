import { useState } from 'react'
import './style.css'

function Cadastro() {

  const cadastro = () => {
    setUsers([...users, { ...formUser, id: Date.now().toString() }])
    setFormUser({ name: '', age: '', email: '' })
  }

  const inputChage = (event) => {
    const { name, value } = event.target
    setFormUser({
      ...formUser,
      [name]: value
    })
  }

  const [users, setUsers] = useState([ //users já cadastrado
    {
      id: 1,
      name: 'Pedro',
      age: '21',
      email: 'pedro@gmail.com'
    },
    {
      id: 1,
      name: 'Alice',
      age: '21',
      email: 'alice@gmail.com'
    }
  ])

  const [formUser, setFormUser] = useState({
    id: '',
    name: '',
    age: '',
    email: '',
  })
  return (
    <>
      <form class='card p-3'>
        <h1>Cadastro</h1>
        <div class='mb-2 text-start'>
          <label htmlFor='name' class='form-label text-dark'>Nome</label>
          <input type="text" name="name" id="name" class='form-control' value={formUser.name} onChange={inputChage} />
        </div>
        <div class='mb-2 text-start'>
          <label htmlFor='age' class='form-label text-dark'>Idade</label>
          <input type="number" name="age" id="idade" class='form-control' value={formUser.age} onChange={inputChage} />
        </div>
        <div class='mb-2 text-start'>
          <label htmlFor='email' class='form-label text-dark'>Email</label>
          <input type="email" name="email" id="email" class='form-control' value={formUser.email} onChange={inputChage} />
        </div>
        <div class='text-center'>
          <input type="button" value="Cadastrar" class='btn btn-primary' id='btn_cadastro' onClick={cadastro} />
        </div>
      </form>

      {users.map((user) => (
        <div key={user.id} class='card text-start mt-2 p-2'>
          <p>Name: {user.name}</p>
          <p>Idade: {user.age}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </>
  )
}

export default Cadastro
