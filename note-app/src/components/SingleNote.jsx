/* eslint-disable react/prop-types */
import formCheck from '../assets/icon-check.svg';
import { RxCross1 } from "react-icons/rx";
import { LiaEdit } from "react-icons/lia";
import { useRemoveNoteMutation } from '../store/features/apiSlice';

const SingleNote = ({ note }) => {
  const [removeNote] = useRemoveNoteMutation();
  const removeNoteHandler = async () => {
    const isDelete = window.confirm("Are sure want to delete this note?")
    if (isDelete) {
        await removeNote(note.id);
    }

  };

  return (
    <li className='relative w-full flex items-center py-4 px-6 border-b border-slate-600'>
      <p className='text-slate-500 absolute top-0 right-6' style={{ fontSize: `12px` }}>{note.date}</p>
      <div className='bg-check-bg p-2 rounded-full cursor-pointer'>
        <img src={formCheck} alt="" className='h-3 w-3' />
      </div>
      <div className='border hidden border-slate-600 p-3 cursor-pointer rounded-full'></div>
      <div className='flex justify-between items-center w-full'>
        <div className='focus:none outline-none text-sm bg-slate-800 text-slate-300 pl-5 overflow-auto'>
          <p className='pb-1 italic text-slate-400' style={{ 'font-size': '12px' }}>{note.title}</p>
          <hr className='w-1/2 opacity-50' />
          <p>{note.desc}</p>
        </div>
        <div className='flex items-center gap-3'>
          <LiaEdit className='cursor-pointer text-slate-600 text-2xl hover:text-slate-400' />
          <RxCross1 className='cursor-pointer text-slate-600 text-2xl hover:text-slate-400' onClick={removeNoteHandler} />
        </div>
      </div>
    </li>
  );
};

export default SingleNote;
