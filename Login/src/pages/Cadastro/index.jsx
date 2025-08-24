import { useState } from 'react'
import './style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form class='card'>
        <h1>Login</h1>
        <div class='mb-3 text-start'>
          <label htmlFor='name' class='form-label text-light'>Nome</label>
          <input type="text" name="name" id="name" class='form-control' />
        </div>
        <input type="number" name="idade" id="" class='form-control' />
        <input type="email" name="email" id="" class='form-control' />
        <input type="button" value="Cadastrar" class='btn btn-primary' />
      </form>

    </>
  )
}

export default App
