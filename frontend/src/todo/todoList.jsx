import React from 'react'
import IconButton from '../template/iconButton'

export default props =>{

    const renderRows = () => {
        const list = props.list || []

        return list.map(todo => (
            <tr key={todo._id}>
                 <td className={todo.done ? 'markAsDone' : ''}>{todo.description}</td>           
                <td>
                <IconButton onClick={()=> props.handleMarkAsDone(todo)} style='success' icon='check' hide={todo.done}/>
                <IconButton onClick={()=> props.handleMarkAsPending(todo)} style='warning' icon='undo' hide={!todo.done} />
                <IconButton onClick={()=> props.handleRemove(todo)} style='danger' icon='trash-o' hide={!todo.done} />
                </td>
            </tr>
            )
        )

    }

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableAction'>Ações</th>
                    
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}