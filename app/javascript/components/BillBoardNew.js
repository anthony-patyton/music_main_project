import React from 'react';

const BillBoardNew = ({ bill_board }) => {
  const { title, body } = bill_board
  const defaultTitle = title ? title : "";
  const defaultBody = body ? body : "";
  return( 
    <>
      <form action="/bill_boards" method="post">{/*#target="_blank"> */}
        <fieldset>
        <legend>Add a BillBoard</legend>
        <label for="title">Title</label>
        <br />
        <input 
        type          = "text"
        id            = "title"
        placeholder   = "title"
        name          = "BillBoard[title]"
        defalultTitle = {defaultTitle}
        required
        />
        <br />
        <label for="body">Body</label>
        <br />
        <textarea
        type          = "text"
        id            = "body"
        placeholder   = "body"
        name          = "BillBoard[body]"
        defaultBody   = {defaultBody}
        required
        >
        </textarea>
        <button type="submit">Submit</button>
        </fieldset>
      </form>
    </>
  );
} 

export default BillBoardNew;