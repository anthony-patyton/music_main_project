import React from 'react';

const url = "/bill_boards/"
const BillBoards = ({ bill_boards }) => {
  return(
  <>
    <h1>All BillBoards</h1>
    {/* <a href={`${url} + /subs/new`}>Add a BillBoard</a> */}
    <a href="/bill_boards/new">Add BillBoard</a>
    {
      bill_boards.map( (b) => (
        <div>
          <h3>{b.title} </h3>
          {b.body}
          <br />
          <br />
          <a href={`${url}` + b.id}>Show BillBoard</a>
          <br />
          <br />
          <a href={`${url}` + b.id + '/edit'}>Edit BillBoard</a>
          <br />
          <br />
          <a href={`${url}` + b.id} data-method="delete">Delete BillBoard</a>
        </div>
      ))
    }
  </>
  )
}


export default BillBoards;


// need to add an HTTP veb like get, post, delete, create, etc