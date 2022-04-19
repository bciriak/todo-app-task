import apiClient from './api'

const getTodos = () => apiClient.get('/todos')

export default {
	getTodos,
}
