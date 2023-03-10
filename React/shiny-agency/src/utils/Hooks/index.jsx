import { useState, useEffect, useContext } from 'react'
import {ThemeContext} from '../context'

export function useFetch(url) {
	const [error, setError] = useState(false)
	const [data, setData] = useState({})
	const [isLoading, setLoading] = useState(true)

	useEffect(() => {
		if (!url) return

		async function fetchData() {
			try {
				const response = await fetch(url)
				const data  = await response.json()
				setData(data)
			} catch (err) {
				console.log(err)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		setLoading(true)

		fetchData()
	}, [url])

	return { data, isLoading, error }
}

export function useTheme ()
{
	const {theme, setTheme} = useContext(ThemeContext)
	return {theme, setTheme}
}
