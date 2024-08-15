import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: [],
  currentUser: null
};

const commentReducer = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments(state, action) {
      state.comments = action.payload.comments;
      state.currentUser = action.payload.currentUser;
    },
    addNewComments(state, action) {
      state.comments.push(action.payload);  // Safely push using Redux Toolkit
    },
    addReplyToComment(state, action) {
      const { commentId, reply } = action.payload;
      const commentIndex = state.comments.findIndex(comment => comment.id === commentId);
      if (commentIndex !== -1) {
        state.comments[commentIndex].replies.push(reply);
      }
    },
    removeComment(state, action) {
      const commentId = action.payload;
      state.comments = state.comments.filter(comment => comment.id !== commentId);
    },
    removeReply(state, action) {
      const { commentId, replyId } = action.payload;
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        comment.replies = comment.replies.filter(reply => reply.id !== replyId);
      }
    },
    updateComment(state, action) {
      const { id, content } = action.payload
      const index = state.comments.findIndex(comment => comment.id === id);
      if (index !== -1) {
        state.comments[index].content = content
      }
    },
    updateReply(state, action) {
      const { commentId, replyId, content } = action.payload
      const comment = state.comments.find(comment => comment.id === commentId);
      if (comment) {
        const replyIndex = comment.replies.findIndex(reply => reply.id === replyId)
        if (replyIndex !== -1) {
          comment.replies[replyIndex].content = content
        }
      }
    },

    inCrementScore(state, action) {
      const { commentId, replyId } = action.payload;
      if (replyId) {
          const comment = state.comments.find(comment => comment.id === commentId);
          const reply = comment?.replies.find(reply => reply.id === replyId);
          if (reply) {
              reply.score += 1;
          }
      } else {
          const comment = state.comments.find(comment => comment.id === commentId);
          if (comment) {
              comment.score += 1;
          }
      }
  },

  decrementScore(state, action) {
      const { commentId, replyId } = action.payload;
      if (replyId) {
          const comment = state.comments.find(comment => comment.id === commentId);
          const reply = comment?.replies.find(reply => reply.id === replyId);
          if (reply) {
              reply.score -= 1;
          }
      } else {
          const comment = state.comments.find(comment => comment.id === commentId);
          if (comment && comment.score > 0) {
              comment.score -= 1;
          }
      }
  },




  }
});

export const { setComments, addNewComments, addReplyToComment, removeComment, removeReply, updateComment, updateReply, inCrementScore, decrementScore } = commentReducer.actions;
export default commentReducer.reducer;
