import React from 'react';

const ArtistEdit = ({ artist, bill_board }) => {
  // const { bill_board_id } = bill_board
  const { name, about, age, errors, id } = artist;
  return(
    <>
      { errors && errors }
      <form action={`/bill_boards/${bill_board.id}/artists/${id}`} method="post">
        <fieldset>
        <legend>Edit Artist: {artist.name}</legend>
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input
        defaultValue = {name}
        name         = "artist[name]"
        type         = "text"
        />
        <br />
        <p>Age</p>
        <input
        defaultValue = {age}
        name         = "artist[age]"
        type         = "number"
        />
        <br />
        <p>About</p>
        <textarea
        defaultValue = {about}
        name         = "artist[about]"
        type         = "text"
        />
        <br />
        <button type="submit">Update</button>
        </fieldset>
      </form>
    </>
  )
}

export default ArtistEdit;