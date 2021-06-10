import React from 'react';

const SongEdit = ({ song, artist }) => {
  const { title, body, errors , id } = song 
  return(
    <>
      { errors && errors }
      <form action={`/artists/${artist.id}/songs/${id}`} method="post">
        <fieldset>
          <legend>Edit Song: {song.title}</legend>
          <input type="hidden" name="_method" value="patch" />
          <p>Title</p>
          <input
          defaultValue = {title}
          name         = "song[title]"
          type         = "text"
          />
          <br />
          <p>Body</p>
          <input
          defaultValue = {body}
          name         = "song[body]"
          type         = "text"
          />
          <button type="submit">Update</button>
        </fieldset>
      </form>
    </>
  )
}

export default SongEdit;