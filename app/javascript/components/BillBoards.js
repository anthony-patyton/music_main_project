import React from 'react';

const url = '/bill_boards/'
const BillBoards = ({ bill_boards }) => {
  return(
  <>
    <h1>All BillBoards</h1>
    {/* <a href={`${url} + /subs/new`}>Add a BillBoard</a> */}
    <a href={ url + "new" }>Add BillBoard</a>
    {
      bill_boards.map( (b) => (
        <div>
          <h3><a href={` ${url}${b.id} `}>{b.title}</a></h3>
          {b.body}
          <br />
          <br />
          <a href={`${url}${b.id}/edit`}>Edit BillBoard</a>
          <br />
          <br />
          <a href={`${url}` + b.id} data-method="delete">Delete BillBoard</a>
          <h2>{ b.length <= 0 ? "No BillBoards" : "" }</h2>
        </div>
      ))
    }
  </>
  )
}


export default BillBoards;


// need to add an HTTP veb like get, post, delete, create, etc 