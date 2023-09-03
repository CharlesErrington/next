import { newTodo } from '@/utils/actions'

export const NewTodoForm = ({}) => {
  return (
    <div>
      <form action={newTodo}>
        <input name="content" type="text" className="border border-black/25" />
        <button type="submit">New Todo</button>
      </form>
    </div>
  )
}
