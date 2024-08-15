import { useEffect, useState } from 'react'
import data from '../data.json'
import { setComments, addNewComments, addReplyToComment, removeComment, removeReply, updateComment, updateReply, inCrementScore, decrementScore } from './store/reducers/commentReducer';
import { formatDistanceToNow } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import plusIcon from './assets/images/avatars/icon-plus.svg'
import minusIcon from './assets/images/avatars/icon-minus.svg'
import replyIcon from './assets/images/avatars/icon-reply.svg'

import removeIcon from './assets/images/avatars/icon-delete.svg'
import editIcon from './assets/images/avatars/icon-edit.svg'

import { FaSave } from "react-icons/fa";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function App() {
  const [newComment, setNewComment] = useState('');
  const [replies, setReplies] = useState('');
  const [activeReplyId, setActiveReplyId] = useState(null);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');

  const dispatch = useDispatch();
  const commentData = useSelector((state) => state.comments.comments);
  const currentUser = useSelector((state) => state.comments.currentUser);

  const formatDate = (isoDateString) => {

    const date = new Date(isoDateString);
    if (isNaN(date.getTime())) {
        return "Invalid date"; 
    }
    return formatDistanceToNow(date, { addSuffix: true });
};


  useEffect(() => {
    dispatch(setComments(data));  // Load initial data
  }, [dispatch]);

  const handleOnchange = (e) => {
    setNewComment(e.target.value);
  };
  const handleOnReply = (e) => {
    setReplies(e.target.value)
  }

  const handleToggleReplyForm = (id,username = '') => {
    setActiveReplyId(activeReplyId === id ? null : id)
  }

  const handleAddComment = () => {

    if (!newComment.trim()) {
      return
    }

    const newCommentObj = {
      id: commentData.length + 1,
      content: newComment,
      createdAt: new Date().toISOString(),
      score: 0,
      user: currentUser,
      replies: [],
    };
    dispatch(addNewComments(newCommentObj));
    setNewComment('');
  };


  const handleAddReply = (commentId, replyId = null) => {
    const content = replies;
    if (!content.trim()) return;
    const targetComment = commentData.find(comment => comment.id === commentId);
    let replyingToUsername;
    if (replyId) {
      const targetReply = targetComment.replies.find(reply => reply.id === replyId);
      replyingToUsername = targetReply.user.username;
    } else {
      replyingToUsername = targetComment.user.username;
    }
    const reply = {
      id: Date.now(),
      createdAt: new Date().toISOString(),
      content: content,
      replyingTo: replyingToUsername,
      user: currentUser,
      score: 0,
    };

    dispatch(addReplyToComment({ commentId, reply }));
    setReplies(''); // Clear the input after submission
    setActiveReplyId(null); // Close the reply form
  };

  const handleRemoveComment = (commentId) => {
    if (window.confirm("Are you sure you want to delete this reply?")) {  
      dispatch(removeComment(commentId));
    }
  };

  const handleRemoveReply = (commentId, replyId) => {
    if (window.confirm("Are you sure you want to delete this reply?")) {
      dispatch(removeReply({ commentId, replyId }));
    }
  };

  const handleEditText = (id, content) => {
    setEditId(id);
    setEditText(content);
  }

  const handleSaveEdit = () => {
    if (editId) {
      dispatch(updateComment({ id: editId, content: editText }))
      setEditId(null)
      setEditText('')
    }
  }

  const handleSaveReplyEdit = (commentId, replyId) => {
    if (editId) {
      dispatch(updateReply({ commentId, replyId, content: editText }))
      setEditId(null)
      setEditText('')
    }
  };

  const handleIncrementScore = (commentId, replyId = null) => {
    dispatch(inCrementScore({ commentId, replyId }))
  }

  const handleDecrementScore = (commentId, replyId) => {
    dispatch(decrementScore({ commentId, replyId }));
  };

  return (
    <div className=' bg-slate-200'>
      <section className='comment__section h-full py-20 md:container md:mx-auto xl:w-3/6 lg:w-4/6'>
        {
          commentData?.map((data) => (
            <>
              <article key={data.id} className='comment bg-white shadow rounded-lg mb-5 mx-3'>
                <div className="commenet_card flex flex-col gap-5 p-5">
                  <div className="card__title flex items-center gap-5">
                    <img src={data.user.image.png} alt="user image" className='w-10' />
                    <h2 className='text-xl font-medium text-slate-700'>{data.user.username}</h2>
                    <p className='md:text-lg font-semibold text-slate-400'>{formatDate(data.createdAt)}</p>
                  </div>
                  <div className="card_body">
                    {
                      editId === data.id ? (
                        <textarea
                          className='border px-3 py-4 w-full rounded-lg outline-none'
                          value={editText}
                          onChange={e => setEditText(e.target.value)}
                        />
                      ) : (
                        <p className='md:text-lg font-semibold text-slate-500'>{data.content}</p>
                      )
                    }

                  </div>
                  <div className="card__controller flex items-center justify-between">
                    <div className="score_btn flex justify-between w-28 py-2 px-3 rounded-xl  bg-slate-200 ">
                      <button onClick={() => handleIncrementScore(data.id)}><img src={plusIcon} alt="plus" /></button>
                      <p className='text-violet-600 font-bold'>{data.score}</p>
                      <button onClick={() => handleDecrementScore(data.id)}><img src={minusIcon} alt="minus" /></button>
                    </div>

                    {
                      currentUser.username === data.user.username ? (

                        editId === data.id ? (

                          <div className='comment_modify flex gap-4'>
                            <button className='flex items-center gap-1 font-bold text-red-500' onClick={handleSaveEdit} > <FaSave /> Save</button>
                            <button className='flex items-center gap-1 font-bold text-violet-500' onClick={() => setEditId(null)}><IoIosRemoveCircleOutline /> Cancle</button>
                          </div>

                        ) : (
                          <div className='comment_modify flex gap-4'>
                            <button className='flex items-center gap-1 font-bold text-red-500' onClick={() => handleRemoveComment(data.id)} ><img src={removeIcon} alt="remove" />Delete</button>
                            <button className='flex items-center gap-1 font-bold text-violet-500' onClick={() => handleEditText(data.id, data.content)}><img src={editIcon} alt="edit" /> Edit</button>
                          </div>

                        )

                      ) : (
                        <div className="reply_btn flex items-center gap-1">
                          <img src={replyIcon} alt="" />
                          <button className='text-violet-800 text-lg font-bold' onClick={() => handleToggleReplyForm(data.id,data.user.username)}>Reply</button>
                        </div>
                      )
                    }

                  </div>
                </div>
              </article>

              {
                activeReplyId === data.id && (
                  <div className="reply__form mb-4">
                    <div className="form__card bg-white shadow rounded-lg mx-3 p-5 ">
                      <form action="" className='flex flex-col gap-8' onSubmit={(e) => {
                        e.preventDefault();
                        handleAddReply(data.id);
                      }}>
                        <textarea
                          type="textarea"
                          placeholder='Add a reply...'
                          className='border px-3 py-4 w-full rounded-lg outline-none'
                          value={replies}
                          onChange={handleOnReply}
                        />
                        <div className='currentUser flex items-center justify-between'>
                          <img src={currentUser?.image.png} alt="current user" className='w-9' />
                          <button className='bg-violet-800 text-white px-8 py-2 rounded-lg uppercase text-lg font-medium' >Reply</button>
                        </div>
                      </form>
                    </div>
                  </div>
                )
              }

              <article className='reply__section mx-3 border-l md:ml-24 border-slate-400'>
                {data.replies?.map(reply => (
                  <>
                    <div key={reply.id} className="commenet_card flex flex-col gap-5  bg-white shadow rounded-lg mb-5 p-5 ml-5 ">
                      <div className="card__title flex items-center gap-5">
                        <img src={reply.user.image.png} alt="" className='w-10' />
                        <h2 className='text-xl font-medium text-slate-700'>{reply.user.username}</h2>
                        <p className='md:text-lg font-semibold text-slate-400'>{formatDate(reply.createdAt)}</p>
                      </div>
                      <div className="card_body">
                        {
                          editId === reply.id ? (
                            <textarea
                              className='border px-3 py-4 w-full rounded-lg outline-none'
                              value={editText}
                              onChange={e => setEditText(e.target.value)}
                            />
                          ) : (
                            <p className='md:text-lg font-semibold text-slate-500'> <span className='text-violet-700 font-bold'>@{reply.replyingTo}</span> {reply.content}</p>
                          )
                        }

                      </div>
                      <div className="card__controller flex items-center justify-between">
                        <div className="score_btn flex justify-between w-28 py-2 px-3 rounded-xl  bg-slate-200 ">
                          <button onClick={() => handleIncrementScore(data.id, reply.id)} ><img src={plusIcon} alt="plus" /></button>
                          <p className='text-violet-600 font-bold'>{reply.score}</p>
                          <button onClick={() => handleDecrementScore(data.id, reply.id)}><img src={minusIcon} alt="minus" /></button>
                        </div>
                        {
                          currentUser.username === reply.user.username ? (
                            editId === reply.id ? (
                              <div className='comment_modify flex gap-4'>
                                <button className='flex items-center gap-1 font-bold text-red-500' onClick={() => handleSaveReplyEdit(data.id, reply.id)} > <FaSave />Save</button>
                                <button className='flex items-center gap-1 font-bold text-violet-500' onClick={() => setEditId(null)}><IoIosRemoveCircleOutline /> Cancle</button>
                              </div>
                            ) : (

                              <div className='comment_modify flex gap-4'>
                                <button className='flex items-center gap-1 font-bold text-red-500'
                                  onClick={() => handleRemoveReply(data.id, reply.id)}
                                ><img src={removeIcon} alt="remove" />Delete</button>
                                <button className='flex items-center gap-1 font-bold text-violet-500'
                                  onClick={() => handleEditText(reply.id, reply.content)}
                                ><img src={editIcon} alt="edit"
                                  /> Edit</button>
                              </div>
                            )

                          ) : (
                            <div className="reply_btn flex items-center gap-1">
                              <img src={replyIcon} alt="" />
                              <button className='text-violet-800 text-lg font-bold' onClick={() => handleToggleReplyForm(reply.id)}>Reply</button>
                            </div>
                          )
                        }

                      </div>
                    </div>

                    {
                      activeReplyId === reply.id && (
                        <div key={reply.id} className="reply__form mb-4 ml-2">
                          <div className="form__card bg-white shadow rounded-lg mx-3 p-5 ">
                            <form action="" className='flex flex-col gap-8'
                              onSubmit={(e) => {
                                e.preventDefault();
                                handleAddReply(data.id, reply.id);
                              }}>
                              <textarea type="textarea" placeholder='Add a reply' className='border px-3 py-4 w-full  rounded-lg outline-none'
                                value={replies}
                                onChange={handleOnReply}
                              />
                              <div className='currentUser flex items-center justify-between'>
                                <img src={currentUser?.image.png} alt="current user" className='w-9' />
                                <button className='bg-violet-800 text-white px-8 py-2 rounded-lg uppercase text-lg font-medium' >Reply</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      )
                    }

                  </>
                ))}
              </article>
            </>
          ))

        }


        <section className="comment__form">
          <div className="form__card bg-white shadow rounded-lg mx-3 p-5">
            <form onSubmit={(e) => {
              e.preventDefault();
              handleAddComment();
            }} className='flex flex-col gap-8'>
              <textarea
                className='border px-3 py-4 w-full rounded-lg outline-none'
                placeholder='Add a comment'
                onChange={handleOnchange}
                value={newComment}
              />
              <div className='currentUser flex items-center justify-between'>
                <img src={currentUser?.image.png} alt="current user" className='w-9' />
                <button type='submit' className='bg-violet-800 text-white px-8 py-2 rounded-lg uppercase text-lg font-medium'>Send</button>
              </div>
            </form>
          </div>

        </section>

      </section>
    </div>
  )
}

export default App
