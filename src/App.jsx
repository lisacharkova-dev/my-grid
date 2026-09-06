import styles from './App.module.css';
import Header from './componets/Header/Header';
import ArticleList from './componets/ArticleList/ArticleList';
import articles from './data/articles';

function App() {
  return (
    <div className={styles.app}>
      <Header count={articles.length} />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
