import React from 'react';

const ArtistNew = ({ artist, bill_board }) => {
  const { id } = bill_board;
  const { name, about, age, errors } = artist;
  const defaultName = name ? name : "";
  const defaultabout = about ? about : "";
  const defaultAge  = age ? age : "";
  return(
    <>
      { errors && errors }
      <form action={`/bill_boards/${bill_board.id}/artists`} method="post">
      <fieldset>
        <legend><b>New Artist</b></legend>
        <p>Name</p>
        <input
        defaultValue = {defaultName}
        name         = "artist[name]"
        type         = "text"
        required
        />
        <br />
        <p>Age</p>
        <input
        defaultValue = {defaultAge}
        name         = "artist[age]"
        type         = "number"
        required
        />
        <br />
        <p>About</p>
        <textarea
        defaultValue = {defaultabout}
        name         = "artist[about]"
        type         = "text"
        required
        />
        <br />
        <button type="submit">Add</button>
        </fieldset>
      </form>

      <a href={`/bill_boards/${bill_board.id}/artists`}>Back</a>
    </>
  )
}

export default ArtistNew;