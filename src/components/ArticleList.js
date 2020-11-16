import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ArticleList = () => {
	const [data, setData] = useState([])

	// preparing data from jsonplaceholder
	async function _getArticles() {
		try {
			const { data } = await axios('https://jsonplaceholder.typicode.com/posts')
			setData(data)
			console.log('data', data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		// calling api data before render
		_getArticles()
	}, [])

	return data.length > 0 ? (
		<ul>
			{data.map(({ title, body, id }) => {
				return (
					<li>
						{id},{title},{body}
					</li>
				)
			})}
		</ul>
	) : (
		<h1>no data</h1>
	)
}

export default ArticleList
