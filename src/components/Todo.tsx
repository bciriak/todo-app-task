import { FC } from 'react'
import { Link } from 'react-router-dom'
import { List, Typography } from 'antd'
import CheckSquareOutlined from '@ant-design/icons/lib/icons/CheckSquareOutlined'
import CloseSquareOutlined from '@ant-design/icons/lib/icons/CloseSquareOutlined'

import { TodoShape } from '../interfaces/todos'

interface Props {
	todo: TodoShape
}

const Todo: FC<Props> = ({ todo }) => {
	return (
		<List.Item>
			<Typography.Text>
				{todo.completed ? <CheckSquareOutlined /> : <CloseSquareOutlined />}
			</Typography.Text>{' '}
			<Link to={`/todo/${todo.id}`}>
				<h4 className={`inline ${todo.completed ? 'line-through' : ''}`}>
					{todo.title}
				</h4>
			</Link>
		</List.Item>
	)
}

export default Todo
