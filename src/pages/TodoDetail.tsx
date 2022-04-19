import { Card } from 'antd'
import { FC, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Todo from '../components/Todo'
import { TodoShape } from '../interfaces/todos'
import { TodoContext } from '../store/TodoContext'

interface Props {
	todo: TodoShape | null
}

const TodoDetail: FC<Props> = (props) => {
	const [todo, setTodo] = useState<TodoShape | null>(null)
	const { id } = useParams()
	const { todos } = useContext(TodoContext)

	const setupTodo = () => {
		if (props.todo) {
			setTodo(props.todo)
		} else {
			if (id) {
				const tempTodo = todos.find((t) => t.id === +id) as TodoShape
				setTodo(tempTodo)
			}
		}
	}

	useEffect(() => {
		setupTodo()
	}, [todo, todos])

	return (
		<div
			className='site-card-border-less-wrapper'
			style={{ marginTop: '20px' }}
		>
			{todo && (
				<Card title='Todo' bordered={false} style={{ width: 300 }}>
					<Todo todo={todo} />
				</Card>
			)}
		</div>
	)
}

export default TodoDetail
