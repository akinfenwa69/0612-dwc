import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { X } from 'lucide-react'

function TaskItem({ id, text, state, removeTask, toggleTask }) {

  return (
    <div
      onClick={() => toggleTask(id)}
      className={`relative p-5 select-none cursor-pointer transition rounded-xl bg-accent hover:bg-card border ${state === 'Completada' ? 'border-green-500' : 'border-border'}`}
    >
      <div onClick={(e) => { e.stopPropagation(); removeTask(id); }}
        className="group absolute right-2 top-2 flex cursor-pointer items-center justify-center bg-red-500/10 w-8 aspect-square rounded-full border border-red-500 text-muted-foreground hover:rotate-90 transition hover:text-red-500"
      >
        <X size={18} className="group-hover:rotate-90 transition group-hover:stroke-red-400" />
      </div>
      <span className="text-xs text-muted-foreground">{id}</span>
      <p className="text-2xl mb-4 w-full truncate">{text}</p>
      <p className="w-full truncate">{state}</p>
    </div>
  )
}

export default function GestorTasques() {
  const [text, setText] = useState('Text exemple')
  const [state, setState] = useState('Pendent')
  const [taskList, setTaskList] = useState([])
  const [pendingTasks, setPendingTasks] = useState(0)
  const [filter, setFilter] = useState('Tots')

  // validate & create
  function validateTask() {
    const error = document.getElementById('error')
    if (!text) {
      return error.textContent = 'Afegeix text!'
    }
    if (!state) {
      return error.textContent = 'Afegeix estat!'
    }
    error.textContent = ''
    setTaskList([...taskList, { id: Date.now(), text: text, state: state }])
  }

  // toggle state
  function toggleTask(id) {
    const newTaskList = taskList.map(item => {
      if (item.id === id) {
        return { ...item, state: item.state === 'Pendent' ? 'Completada' : 'Pendent' }
      }
      return item
    })
    setTaskList(newTaskList)
  }

  // delete
  function removeTask(id) {
    if (confirm("Vols eliminar-la?")) setTaskList(taskList.filter(item => item.id !== id))
  }

  // update pendingTasks
  useEffect(() => {
    setPendingTasks(taskList.filter(item => item.state === 'Pendent').length)
  }, [taskList])


  // filters
  const filteredTasks = taskList.filter(item => filter === 'Tots' ? true : item.state === filter)

  return (
    <main className='p-10 mb-10 grid grid-cols-1 2xl:grid-cols-2 gap-5'>
      <section className='relative flex flex-col gap-3'>
        <h2 id='create-task' className='text-3xl mb-5 text-center'>Create Task</h2>
        <div className='sticky top-6 border border-border rounded-xl p-5 flex flex-col gap-3 h-fit'>
          <div className='grid gap-2'>
            <label htmlFor="text" className='text-xl'>Text</label>
            <input type="text" id='text' placeholder='Escriu text...'
              onInput={(e) => setText(e.target.value)} defaultValue={text}
              className='border border-border p-3'
            />
          </div>
          <div className='grid gap-2'>
            <label htmlFor="state" className='text-xl'>Estat</label>
            <select name="satte" id="state"
              onInput={(e) => setState(e.target.value)} defaultValue={state}
              className='border border-border p-3 cursor-pointer'
            >
              <option value="Pendent">Pendent</option>
              <option value="Completada">Completada</option>
            </select>
          </div>
          <span id='error' className='text-red-500 text-sm'></span>

          <button onClick={validateTask} className='p-3'>
            Create task
          </button>
          <button onClick={() => setTaskList([])} className='py-2 px-5 mx-auto bg-transparent! hover:bg-red-500/20! transition'>
            Remove all tasks
          </button>
        </div>
      </section>

      <section className='flex flex-col gap-5'>
        <div className='my-5 grid grid-cols-[1fr_2fr_1fr]'>
          <AnimatePresence initial={false}>
            {pendingTasks !== 0 ?
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className='w-fit h-fit px-5 py-2 rounded-full border border-border hover:scale-105 hover:bg-accent'
              >
                Pendents: {pendingTasks}
              </motion.span>
              : null
            }
          </AnimatePresence>
          <div className='flex flex-col gap-2 col-start-2 col-end-3'>
            <h2 id='task-list' className='text-3xl text-center'>Task List</h2>
            <p className='text-sm text-muted-foreground text-center'>Clica la tasca per canviar l'estat</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className='flex gap-1 items-center'>
              <label htmlFor='tots' className='cursor-pointer'>Tots</label>
              <input type="radio" name="filter" id="tots" value="Tots" checked={filter === 'Tots'} onChange={(e) => setFilter(e.target.value)} className='cursor-pointer' />
            </div>
            <div className='flex gap-2 items-center'>
              <div className='flex gap-1 items-center'>
                <label htmlFor='pendents' className='cursor-pointer'>Pendents</label>
                <input type="radio" name="filter" id="pendents" value="Pendent" checked={filter === 'Pendent'} onChange={(e) => setFilter(e.target.value)} className='cursor-pointer' />
              </div>
              <div className='flex gap-1 items-center'>
                <label htmlFor='completats' className='cursor-pointer'>Completats</label>
                <input type="radio" name="filter" id="completats" value="Completada" checked={filter === 'Completada'} onChange={(e) => setFilter(e.target.value)} className='cursor-pointer' />
              </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-3 gap-3'>
          {
            filteredTasks.length ?
              filteredTasks.map(item =>
                <TaskItem key={item.id} id={item.id} text={item.text} state={item.state} changeState={() => toggleTask(item.id)} removeTask={removeTask} toggleTask={toggleTask} />
              )
              : <p className='col-span-3 text-center text-muted-foreground'>No tasks!</p>
          }
        </div>
      </section>
    </main>
  )
}