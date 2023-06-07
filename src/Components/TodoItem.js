import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
  return (
    <>
      <div>
        <h4 className='my-3'>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
      </div>
      <hr />
    </>
  )
}
//we used arrow function for passing onDelete(todo), instead of doing it directly because  then it gets called not
//passed