/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */

// import './App.css'

import { useEffect, useRef, useState } from 'react';
import navSun from './assets/icon-sun.svg'
import SingleNote from './components/SingleNote';

import { useGetAllNotesQuery } from './store/features/apiSlice';
import { useAddNoteMutation } from './store/features/apiSlice';
import { useUpdateNoteMutation } from './store/features/apiSlice';
import { useSelector } from 'react-redux';
import { useRemoveNoteMutation } from './store/features/apiSlice';


function App() {

  const initialState = {
    title: ``,
    desc: ``,
    date: new Date().toISOString().split('T')[0]
  }

  const { isError, isFetching, error, data: notes } = useGetAllNotesQuery()
  const [addNote] = useAddNoteMutation()
  const [updateNote] = useUpdateNoteMutation()
  const [removeNote] = useRemoveNoteMutation()

  const [formData, setFormData] = useState(initialState)
  const formRef = useRef(null);
  const [filter, setFilter] = useState('All');
  const editableNote = useSelector(storeState => storeState.notes.editNote)


  const inputOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const noteLeft = notes?.filter(note => !note.isCompleted)


  const handleSubmit =  () => {

      if (editableNote && formData.title.trim() && formData.desc.trim()) {
         updateNote(formData)
         setFormData(initialState);
      }
      else if( formData.title.trim() && formData.desc.trim()) {
         addNote(formData);
         setFormData(initialState);
      }

    
  };


  const clearCompletedHandler = async () => {
    const completedNotes = notes.filter(note => note.isCompleted);
    completedNotes.forEach(async (note) => {
      await removeNote(note.id);
    });
  }

  useEffect(() => {
    if (editableNote) {
      setFormData(editableNote)
    }
    
  }, [editableNote])


  useEffect(() => {

    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        handleSubmit();
      }
    }
    const handleClickOutside = (e) => {
      if (formRef.current && !formRef.current.contains(e.target)) {
        handleSubmit();
   
      }
    }

    document.addEventListener('keydown', handleEnter);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEnter);
      document.removeEventListener('keydown', handleEnter);
      document.removeEventListener('click', handleClickOutside);
    }


  }, [handleSubmit]);






  console.log("FormData", formData);
  console.log("EditableNote", editableNote);



  const getAllFilter = () => {
    switch (filter) {
      case 'Active':
        {
          return notes?.filter(note=>!note.isCompleted)
        }
      case 'Completed':
        {
          return notes?.filter(note=>note.isCompleted)
        }

      default:
        return notes;
    }
  }


  if (isFetching) {
    return <h1>Loading........</h1>;
  }
  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <header className='relative w-full h-80 flex justify-center items-center bg-no-repeat bg-cover pb-20 bg-mobile-dark md:bg-desktop-dark' >
        <ul className='nav-content flex justify-between items-center text-white  ' style={{ width: '450px' }}>
          <li className='text-4xl uppercase font-bold'>Todo</li>
          <li className='cursor-pointer'><img src={navSun} alt="Toggle theme" /></li>
        </ul>
      </header>


      <section className='main-body bg-slate-900 min-h-screen w-full flex justify-center items-center relative'>

        <div className="body-contain absolute -top-32" style={{ width: '450px' }}>

          <form className='w-full flex items-center py-4 px-6 rounded bg-slate-800 mb-3' ref={formRef}>
            <div className='border border-slate-600 p-3 rounded-full'></div>
            <div className='flex flex-col w-full'>
              <input type="text" placeholder='Create a new todo...'
                className=' focus:none outline-none text-sm  bg-slate-800 text-slate-200 pl-5 pb-1'
                name='title'
                value={formData.title}
                onChange={inputOnChange}
              />
              <hr className='w-full ml-5 opacity-30' />
              <input type="text" placeholder='Add note description...'
                className=' focus:none outline-none text-sm  bg-slate-800 text-slate-200 pl-5 '
                name='desc'
                value={formData.desc}
                onChange={inputOnChange}
              />
            </div>
          </form>

          <ul className=" form-body  bg-slate-800 rounded py-1">

            {
              getAllFilter()?.map(notes => (
                <SingleNote note={notes} key={notes.id} />
              ))
            }


            <li className='w-full flex items-center py-3 px-6'>
              <div className='py-2 flex justify-between w-full text-slate-500 text-sm'>
                <p>{noteLeft.length} items left</p>
                <button onClick={clearCompletedHandler}>Clear Completed</button>
              </div>
            </li>

          </ul>

          <div action=""
            className='w-full flex items-center justify-center gap-6 py-4 px-6 rounded text-slate-500 font-bold bg-slate-800 mt-3'>
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Active')}>Active</button>
            <button onClick={() => setFilter('Completed')}>Completed</button>
          </div>

        </div>

      </section>
    </>
  )
}

export default App
