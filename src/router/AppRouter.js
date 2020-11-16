import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Article from '../components/Article'
import ArticleList from '../components/ArticleList'
import ArticlePage from '../components/ArticlePage'

export default function AppRouter() {
	return (
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/Article'>Article</Link>
						</li>
						<li>
							<Link to='/ArticleList'>ArticleList</Link>
						</li>
						<li>
							<Link to='/ArticlePage'>ArticlePage</Link>
						</li>
					</ul>
				</nav>

				<Switch>
					<Route path='/Article'>
						<Article />
					</Route>
					<Route path='/ArticleList'>
						<ArticleList />
					</Route>
					<Route path='/ArticlePage'>
						<ArticlePage />
					</Route>
				</Switch>
			</div>
		</Router>
	)
}
