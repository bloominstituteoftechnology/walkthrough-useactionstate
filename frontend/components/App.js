import React from 'react'

const REGISTER_URL = '/api/auth/token/register'

export default function App() {
  return (
    <div>
      {/* {message && <h3>{message}</h3>} */}
      {/* {error && <h3>{error}</h3>} */}
      {/* {isPending && <h3>Wait...</h3>} */}
      <form>
        <input name='username' placeholder='type username' />
        <input name='password' placeholder='type password' />
        <input type='submit' />
      </form>
    </div>
  )
}
