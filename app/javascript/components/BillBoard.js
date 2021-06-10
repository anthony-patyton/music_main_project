import React from 'react';


const BillBoard = ({ bill_board }) => {
  const { title, body, created_at, id  } = bill_board
  return(
    <>
      <h1>{title}</h1>
      <p>
        Created: {created_at}, id: {id}
      </p>
      <h2>Body: {body}</h2>
      <a href={`/bill_boards/${id}/artists`}>Artists</a>
    </>
  );
}

export default BillBoard;