import React from 'react';

const BillBoard = ({ bill_board }) => {
  const { title, body, create_at  } = bill_board;
  return(
    <>
      <h1>BillBoard of: {title}</h1>
      <p>
        Created: {created_at}
      </p>
      <p>
        ID of the sub is: {id}
        <a href="/bill_boards">Back</a>
      </p>
    </>

  )
}

export default BillBoard;