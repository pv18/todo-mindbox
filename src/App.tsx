import './App.scss';
import {TodoList} from './components/TodoList';

function App() {
    return (
        <>
            <h1 className={'todo_title'}>todos</h1>
            <div className={'todo_block'}>
                <TodoList/>
            </div>
        </>
    )
}

export default App;
