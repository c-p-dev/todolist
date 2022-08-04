import logo from './logo.svg';
import './App.css';
import TodoList from './components/todoList/todoList';
import Confetti from 'react-dom-confetti';
import { useTodoContext } from './context/todo.context';

function App() {
  const conffettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 40,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
  }
  const { confetti } = useTodoContext();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Todo app
        </p>
      </header>
      <div className="container">
        <div>
          <Confetti active={confetti} config={conffettiConfig} />
          <TodoList />
        </div>
      </div>
      
      <footer>
        <div className="instructions">
        <p>
            click items to mark as done
          </p>
          <p>
            input task to do and click/enter to add new item
          </p>
          <p>
            click clear to remove all items
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
