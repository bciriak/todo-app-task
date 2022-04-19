import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TodoDetail from './pages/TodoDetail'

const Router = () => (
	<Routes>
		<Route path='/' element={<Home />} />
		<Route path='todo/:id' element={<TodoDetail />} />
	</Routes>
)

export default Router
