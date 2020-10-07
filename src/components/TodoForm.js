import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {

   const [input,setInput] = useState(props.edit ? props.edit.value : '')

   const inputRef = useRef(null)

   useEffect(() => {
       inputRef.current.focus()
   })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text:input
        })

        setInput('')
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (  
                <>
            <input
             type="text"
              placeholder="update your todo..."
               name="text"
                className="todo-input"
                value={input} onChange={handleChange} ref={inputRef}
            />
            <button className="todo-button">Update</button>
            </>
            ) : (  
            <>
            <input
                type="text"
                 placeholder="add your todo..."
                  name="text"
                   className="todo-input"
                   value={input} onChange={handleChange} ref={inputRef}
               />
               <button className="todo-button">Add</button>
               </> 
               )
              }
          
        </form>
    )
}

export default TodoForm
