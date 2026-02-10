import { useState } from 'react'
import TaskItem from '../../../components/TaskItem'

function App() {
  const [text, setText] = useState('Text exemple')
  const [state, setState] = useState('Pendent')
  const [taskList, setTaskList] = useState([])

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

  function removeTask(id) {
    setTaskList(taskList.filter(item => item.id !== id))
  }

  return (
    <div>
      <header className='flex flex-col items-center justify-center gap-5'>
        <h1>Gestor de Tasques</h1>
        <p className='text-muted-foreground'>Crea tasques i controla l'estat d'aquestes</p>
        <a href='#create-task'
          className='px-6 py-3 text-lg text-foreground! border-2 border-border hover:bg-accent transition rounded-full'
        >
          Crear tasca &rarr;
        </a>
      </header>

      <main className='p-10 mb-10'>
        <section className='grid gap-3'>
          <h2 id='create-task' className='text-3xl my-5 text-center'>Create Task</h2>
          <div className='border border-border rounded-xl p-5 grid grid-cols-2 gap-3'>
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
            <button onClick={validateTask}
              className='col-span-2'
            >
              Create task
            </button>
          </div>
        </section>
        <section className='grid'>
          <div className='my-5 relative'>
            <h2 id='task-list' className='text-3xl text-center'>Task List</h2>
            <p className='text-sm text-muted-foreground text-center'>Clica la tasca per canviar l'estat</p>
            {taskList.filter(item => item.state === 'Pendent').length ?
              <span className='absolute left-0 bottom-0 px-5 py-3 rounded-full border border-border'>Pendents: {taskList.filter(item => item.state === 'Pendent').length}</span>
              : null
            }
          </div>
          <div className='grid grid-cols-3 gap-3'>
            {
              taskList.length ?
                taskList.map(item =>
                  <TaskItem key={item.id} id={item.id} text={item.text} state={item.state} removeTask={removeTask} />
                )
                : <p className='col-span-3 text-center text-muted-foreground'>No tasks!</p>
            }
          </div>
        </section>
      </main>

      <footer className='w-full p-5 flex justify-center'>
        <span className='text-sm text-muted-foreground'>Gestor de Tasques &copy; Pol Poblet Pallisé</span>
      </footer>
    </div>
  )
}

export default App
