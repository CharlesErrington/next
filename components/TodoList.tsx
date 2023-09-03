import Todo from './Todo'
import { TodoProps } from '@/types/todos'

type TodoListProps = {
  todos: TodoProps[]
}

const TodoList = ({ todos }: TodoListProps) => {
  console.log('TodoList todos', todos)
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </div>
  )
}

export default TodoList
