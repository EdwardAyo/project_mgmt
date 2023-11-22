import React from 'react';
import Button from './Button.jsx';

const Sidebar = ({onAddProject, projects}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">YOUR PROJECTS</h2>
        <div>
          <Button onClick={onAddProject}>+ Add Project</Button>    
        </div>
        <ul className='mt-5'>
          {projects.map(project => <li key={project.id}>
            <button className='w-full text-left px-2 py-1 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'>
              {project.title}
            </button>
          </li>)}
        </ul>
    </aside>
  )
}

export default Sidebar