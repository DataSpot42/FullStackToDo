import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getTodo } from "../api/getTodo"
import { editTodo } from "../api/editTodo"
const EditTodo = (todo) => {
    


    const { id } = useParams()
    const [toUpdate, setToUpdate] = useState('')
    const [userInput, setUserInput] = useState('')
    const [updated, setUpdated] = useState(false)
    
    const submitHandler = async (todo) => {       
        let obj = {
            _id: toUpdate._id,
            text: userInput,        
        }
       let responce = await editTodo(obj)         
        console.log(obj._id)
        setUpdated(true)        
        
        return(obj)
    }

    useEffect(() => {
        const fetchTodo = async () => {
            let data = await getTodo(id)
            setToUpdate(data)
            console.log(data)
        }
        fetchTodo()
    },[])
    return (
        <div>
            <h1>edit</h1>
            {updated? <h2>Todo updated to: {userInput} </h2> : <h2></h2>}
            {/* <h2>Edit todo: {data}</h2> */}
            <input 
                /* placeholder={data} */
                onChange={(e) => {setUserInput(e.target.value)}}
            />
            <button onClick={submitHandler}>submit</button>
        </div>
    )
}
export default EditTodo