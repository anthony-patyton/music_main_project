import React from 'react';

const ArtistEdit = ({ artist, bill_board }) => {
  const { id } = artist;
  const { name, about, age, errors } = artist;
  return(
    <>
      <h1>Edit Artist: {artist.name}</h1>
      { errors && errors }
      <form action={`/bill_boards/${bill_board.id}/artists/${id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <p>Name</p>
        <input
        defaultValue = {name}
        name         = "artist[name]"
        type         = "text"
        />
        <button type="submit">Update</button>
        <br />
        <p>Age</p>
        <input
        defaultValue = {age}
        name         = "artist[age]"
        type         = "number"
        />
        <button type="submit">Update</button>
        <br />
        <p>About</p>
        <textarea
        defaultValue = {about}
        name         = "artist[about]"
        type         = "text"
        />
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default ArtistEdit;