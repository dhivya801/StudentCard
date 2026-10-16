import { useState, useEffect } from 'react'
import axios from 'axios'

 function EliteTask3() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [data, setData] = useState(null)
     useEffect(() => {
        axios.get('https://dummyjson.com/c/e2d7-5698-4370-bbf7')
            .then(res => setData(res.data))
    }, [])
  const handleSubmit =(e) => {
        e.preventDefault()
        if (!username|| !password) return setMsg("Fields needed")
        const isMatch=(username=== data.username && password=== data.password)
        setMsg(isMatch ?"Login successful!":"Not Login")
    }
return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) =>setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)} />
            <button type="submit">Login</button>
            <span>{msg}</span>
        </form>
    )
}
export default EliteTask3