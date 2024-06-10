
import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { News } from './Components/news';
import { News1 } from './Components/news1';
import { ScrollPagination } from './Components/scrollpagination';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>Data List</h1>
      <News/>
      {/* <News1/> */}
      {/* <ScrollPagination/> */}
    </div>
    </Provider>
  );
}

export default App;
