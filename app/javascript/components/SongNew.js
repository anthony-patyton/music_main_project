import React from 'react';

const SongNew = ({ song, artist }) => {
  const { id } = artist;
  const { title, body, errors } = song;
  const defaultTitle = title ? title : "";
  const defaultBody = body ? body : "";
  return(
    <>
      { errors && errors }
      < form action= {`/artists/${id}/songs`} method="post">
        <fieldset>
          <legend><strong>New Song</strong></legend>
          <p>Title</p>
          <input
          defaultValue = {defaultTitle}
          name         = "song[title]"
          type         = "text"
          required
          />
          <br />
          <p>Body</p>
          <input
          defaultValue = {defaultBody}
          name         = "song[body]"
          type         = "text"
          required
          />
          <br />
          <button type="submit">Submit</button>
        </fieldset>
      </form>
      
      <a href={`/artists/${id}/songs`}>Back</a>
    </>
  )
}

export default SongNew;