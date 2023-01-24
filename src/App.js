
import './App.css';
import Counter from './conponents/Counter/Counter';
import CounterList from './conponents/CounterList/CounterList';
import { TodoProvider } from './store/TodoProvider';

function App() {

  return (
    <div className="App">
      <TodoProvider>
    <Counter />
    <CounterList />
    <CounterList/>
      </TodoProvider>
    </div>
  );
}

export default App;
