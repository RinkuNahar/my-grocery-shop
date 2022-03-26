import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import Blog from './Components/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Blog></Blog>
    </div>
  );
}

export default App;
