'use client'
import { completeTodo } from '@/utils/actions'
import { TodoProps } from '@/types/todos'
import { type } from 'os'
import { useTransition } from 'react'

const Todo = ({ id, createdAt, content, completed }: TodoProps) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={`border border-black/25 cursor-pointer ${
        completed ? 'line-through text-gray-900' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(id))}
    >
      {content}
    </div>
  )
}

export default Todo
