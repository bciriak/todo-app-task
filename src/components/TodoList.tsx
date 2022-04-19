import { useContext } from 'react'
import { List } from 'antd'

import { TodoContext } from '../store/TodoContext'
import Todo from './Todo'

const TodoList = () => {
	const { todos } = useContext(TodoContext)

	return (
		<>
			<List
				style={{ marginTop: '20px' }}
				header={<h2>Todo List</h2>}
				bordered
				pagination={{
					pageSize: 10,
				}}
				dataSource={todos}
				renderItem={(item) => <Todo todo={item} />}
			/>
		</>
	)
}

export default TodoList
