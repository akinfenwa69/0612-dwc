import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react"
import { X } from 'lucide-react'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

function TaskItem({ id, text, state, removeTask, toggleTask }) {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      onClick={() => toggleTask(id)}
    >
      <div
        className={`relative p-5 select-none cursor-pointer rounded-xl transition bg-accent hover:bg-card border ${state === 'Completada' ? 'border-green-500' : 'border-border'}`}
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
    </motion.div>
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

      {/* CREATE TASK */}
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
          <button onClick={() => setTaskList([])} className='py-2 px-5 mx-auto bg-transparent! hover:bg-red-500/50! transition'>
            Remove all tasks
          </button>
        </div>
      </section>

      {/* TASK LIST */}
      <section className='flex flex-col gap-5'>
        <div className='my-5 flex flex-col items-center gap-5'>
          <div className='relative flex flex-col gap-2 col-start-2 col-end-3 w-full'>
            <h2 id='task-list' className='text-3xl text-center'>Task List</h2>
            <p className='text-sm text-muted-foreground text-center'>Clica la tasca per canviar l'estat</p>

            <AnimatePresence initial={false}>
              {pendingTasks !== 0 ?
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  className='absolute left-0 top-0'
                >
                  <span
                    className='w-fit h-fit px-5 py-2 rounded-full border border-border hover:scale-105 hover:bg-accent'
                  >
                    Pendents: {pendingTasks}
                  </span>
                </motion.div>
                : null
              }
            </AnimatePresence>
          </div>
          <ToggleGroup type="single" variant="outline" defaultValue="Tots" onValueChange={(val) => setFilter(val ? val : filter)}>
            <ToggleGroupItem value="Tots" className={`rounded-r-none! ${filter === 'Tots' ? 'bg-muted!' : ''}`}>Tots</ToggleGroupItem>
            <ToggleGroupItem value="Pendent" className={`rounded-none! ${filter === 'Pendent' ? 'bg-muted!' : ''}`}>Pendents</ToggleGroupItem>
            <ToggleGroupItem value="Completada" className={`rounded-l-none! ${filter === 'Completada' ? 'bg-muted!' : ''}`}>Completats</ToggleGroupItem>
          </ToggleGroup>
        </div>

        <div className='grid grid-cols-3 gap-3'>
          <AnimatePresence>
            {
              filteredTasks.length ?
                filteredTasks.map(item =>
                  <TaskItem key={item.id} id={item.id} text={item.text} state={item.state} changeState={() => toggleTask(item.id)} removeTask={removeTask} toggleTask={toggleTask} />
                )
                : <p className='col-span-3 text-center text-muted-foreground'>No tasks!</p>
            }
          </AnimatePresence>
        </div>
      </section>
    </main>
  )
}