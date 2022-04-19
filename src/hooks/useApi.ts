import { useState } from 'react'

interface HookData {
	data: null | []
	error: string
	loading: boolean
	request: Function
}

export default (apiFn: Function): HookData => {
	const [data, setData] = useState(null)
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const request = async (...args: any) => {
		setLoading(true)
		try {
			const result = await apiFn(...args)
			setData(result.data)
		} catch (err) {
			setError(err.message || 'API Error')
		} finally {
			setLoading(false)
		}
	}

	return {
		data,
		error,
		loading,
		request,
	}
}
