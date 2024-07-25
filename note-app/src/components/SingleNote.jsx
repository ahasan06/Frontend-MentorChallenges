/* eslint-disable react/prop-types */
import formCheck from '../assets/icon-check.svg';
import { RxCross1 } from "react-icons/rx";
import { LiaEdit } from "react-icons/lia";
import { useRemoveNoteMutation } from '../store/features/apiSlice';
import { editNote } from '../store/reducers/noteReducer';
import { useDispatch } from 'react-redux';
import { useUpdateNoteMutation } from '../store/features/apiSlice';


const SingleNote = ({ note }) => {
  const [removeNote] = useRemoveNoteMutation();
  const [toggleUpdate] = useUpdateNoteMutation();


  const dispatch = useDispatch()
  const removeNoteHandler = async () => {
    const isDelete = window.confirm("Are sure want to delete this note?")
    if (isDelete) {
      await removeNote(note.id);
    }

  };

  const editNoteHandler = () => {
    dispatch(editNote(note))
  }

  const toggleHandler = async (note, isCompleted) => {
    toggleUpdate({ ...note, isCompleted })
  }

  return (
    <li className='relative w-full flex items-center justify-start py-4 px-6 border-b border-slate-600 '>
      <p className='text-slate-500 absolute top-0 right-6' style={{ fontSize: `12px` }}>{note.date}</p>

      <div className="check__uncheck flex">
        {
          note.isCompleted ? (
            <button className='bg-check-bg p-2 rounded-full cursor-pointer check' onClick={() => toggleHandler(note, false)}>
              <img src={formCheck} alt="" className='h-3 w-3' />
            </button>
          ) : (
            <button className='border  border-slate-600 p-3 cursor-pointer rounded-full uncheck' onClick={() => toggleHandler(note, true)}></button>
          )
        }


      </div>

      <div className='relative  focus:none outline-none text-sm bg-slate-800 text-slate-300 ml-5 w-9/12 overflow-x-auto scroll-custom'>
        {
          note.isCompleted ? (
            <>
              <p className='pb-1 italic text-slate-400  line-through' style={{ 'font-size': '12px' }}>{note.title}</p>
              <hr className='w-9/12 absolute opacity-30 ' />
              <p className=' text-slate-400 line-through mt-1'>{note.desc}</p>
            </>
          ) :
            (
              <>
              <p className='pb-1 italic text-slate-400' style={{ 'font-size': '12px' }}>{note.title}</p>
              <hr className='w-9/12 absolute opacity-30' />
              <p className='mt-1' >{note.desc}</p>
            </>
          )
        }
      </div>


      <div className='flex items-center justify-end gap-3 ml-2'>
        <LiaEdit className='cursor-pointer text-slate-600 text-2xl hover:text-slate-400' onClick={editNoteHandler} />
        <RxCross1 className='cursor-pointer text-slate-600 text-2xl hover:text-slate-400' onClick={removeNoteHandler} />
      </div>

    </li>
  );
};

export default SingleNote;
