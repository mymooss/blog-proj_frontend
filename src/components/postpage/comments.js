import React, { useState } from "react";
import Commentbox from './commentbox';

const Comments = () => {
  const [commentBoxes, setCommentBoxes] = useState([]);

  const handleAddCommentBox = () => {
    setCommentBoxes(prevBoxes => [...prevBoxes, <Commentbox />]);
  };

  const handleRemoveCommentBox = () => {
    setCommentBoxes(prevBoxes => prevBoxes.slice(0, -1));
  };

  return (
    <div>
      댓글 수 {commentBoxes.length}
      {commentBoxes}
      <button onClick={handleAddCommentBox}>댓글 추가</button>
      <button onClick={handleRemoveCommentBox}>댓글 제거</button>
    </div>
  );
};

export default Comments;
