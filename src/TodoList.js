import React from 'react'
import DataLoop from './DataLoop'

export default function TodoList({ todos, checkBox }) {
    return (
        todos.map( todo => {
            return <DataLoop key={todo.id} checkBox={checkBox} todo={todo} />
        })
    )
}
