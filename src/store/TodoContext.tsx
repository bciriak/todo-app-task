import React, {
	createContext,
	FC,
	useCallback,
	useEffect,
	useState,
} from 'react'

import todosApi from '../services/todos'
import { TodoShape } from '../interfaces/todos'

interface Todo_Context {
	todos: TodoShape[]
}
interface Props {
	children: React.ReactNode
}

export const TodoContext = createContext<Todo_Context>({
	todos: [],
})

const TodoProvider: FC<Props> = ({ children }) => {
	const [todos, setTodos] = useState<TodoShape[]>([])

	const fetchTodos = useCallback(async () => {
		const result = await todosApi.getTodos()
		if (result) {
			setTodos(result.data)
		}
	}, [])

	useEffect(() => {
		fetchTodos()
	}, [fetchTodos])

	const context = { todos }

	return <TodoContext.Provider value={context}>{children}</TodoContext.Provider>
}

export default TodoProvider
