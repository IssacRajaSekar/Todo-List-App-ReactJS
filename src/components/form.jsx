import React from 'react'

export const Todoform = ({handleSubmit,Todo,editId,setTodo}) => {
  return (
    <form className='todoForm' onSubmit={handleSubmit}>
        <input type="text" value={Todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type='submit'>{editId ? "Edit" : "Go"}</button>
    </form>
  )
}
