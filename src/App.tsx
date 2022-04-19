import { Link, Outlet } from 'react-router-dom'
import { Layout } from 'antd'

import Router from './Router'
import TodoProvider from './store/TodoContext'

const { Header, Footer, Content } = Layout

const App = () => {
	return (
		<TodoProvider>
			<Layout>
				<Header>
					<Link to='/'>
						<h2 className='logo'>Todo App</h2>
					</Link>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<Router />
					<Outlet />
				</Content>
				<Footer>Cool Todo App</Footer>
			</Layout>
		</TodoProvider>
	)
}

export default App
