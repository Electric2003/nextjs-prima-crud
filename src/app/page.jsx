import { prisma } from '@/app/libs/prisma'

async function loadTasks() {
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()

  return await prisma.task.findMany()
}

async function HomePage() {

  const tasks = await loadTasks()
  console.log(tasks);

  return (
    <section className='container mx-auto'>
      <div className='grid grid-cols-3 gap-3 mt-10'>{tasks.map(task => (
        <div key={task.id} className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer'>
          <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
          <p>{task.description}</p>
          <p className='mt-2'>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
      ))}</div>
    </section>
  )
}

export default HomePage