import React from 'react';

const BillBoardEdit = ({ bill_board }) => {
  const { title, body, id } = bill_board;
  const defaultTitle = title ? title : "";
  const defaultBody = body ? body : "";
  return(
    <>
      <h1>Update {title}</h1>
      <p>{body}</p>
      <form action={`/bill_boards/${id}`} method="post">
        <p>Title:</p>
        <input type="hidden" name="_method" value="patch" />
        <input
        placeholder   = "title"
        type          = "text"
        defaultTitle  = {defaultTitle}
        name          = "BillBoard[title]"
        />
        <button type="submit">Update</button>
        <br />
        {/* <p>Body:</p>
        <input type="hidden" name="_method" value="patch" />
        <textarea
        placeholder   = "body"
        defaultBody   = {defaultBody}
        name          = "BillBoard[body]"
        />
        <button type="submit">Update</button> */}
      </form>
    </>
  );
}

export default BillBoardEdit;


// const SubEdit = ({ sub }) => {
//       const { name, id } = sub;
//       const defaultName = name ? name : "";
//       return (
//           <>
//             <h1>SubNew Component Here</h1>
//             <form action={`/subs/${id}`} method="post">
//               {/* need this for edit! */}
//               <input type="hidden" name="_method" value="patch" /> // need this for edit!
//               <input
//                 placeholder="Name"
//                 type="text"
//                 defaultValue={defaultName}
//                 name="sub[name]"
//               />
//               <button type="submit">add</button>
//             </form>
//           </>
//         );
    // const TopicEdit = ({ topic, sub }) => {
    //   const { id } = topic;
    //   const { name, body, errors } = topic;
    //   return (
    //     <>
    //       <h1>Topic Edit</h1>
    //       {errors && errors}
    //       <form action={`/subs/${sub.id}/topics/${id}`} method="post">
    //         <input type="hidden" name="_method" value="patch" />
    //         <p>Name</p>
    //         <input defaultValue={name} name="topic[name]" type="text" />
    //         <p>Body</p>
    //         <textarea defaultValue={body} name="topic[body]" />
    //         <br />
    //         <button type="submit">update</button>
    //       </form>
    //     </>
    //   );
    // }