function TaskCard({ task }) {
    return (
        <div className='bg-slate-900 p-3 hover:bg-slate-800 hover:cursor-pointer'>
            <h3 className='font-bold text-2xl mb-2'>{task.title}</h3>
            <p>{task.description}</p>
            <p className='mt-2'>{new Date(task.createdAt).toLocaleDateString()}</p>
        </div>
    )
}