import './App.css'
import Article from './components/Article'
import ArticleList from './components/ArticleList'
import ArticlePage from './components/ArticlePage'
import AppRouter from './router/AppRouter'

function App() {
	return (
		<div className='App'>
			<AppRouter />
			<h1>Welcome</h1>
			<ArticleList />
		</div>
	)
}

export default App
