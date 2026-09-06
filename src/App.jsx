import styles from './App.module.css';
import Header from './componets/Header/Header';
import ArticleList from './componets/ArticleList/ArticleList';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;