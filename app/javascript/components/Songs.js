import React from 'react';
import Artists from './Artists';

const Songs = ({ songs, artist, bill_board }) => {
  const { name, about, age, id } = artist
  return(
    <>
      <h1>Songs Page from {name}</h1>
      {/* <p><a href={`/artists/${id}`}>Back to Artist</a></p> */}
      <br />
      <a href={`/artists/${id}/songs/new`}>New Song</a>
      <br />
      {
        songs.map ((song) => (
          <div key={song.id} className="song-card">
            <h3><a href={`/artists/${artist.id}/songs/${song.id}`}>{song.title}</a></h3>
            <p>{song.body}</p>
            <br />
            <a href={`/artists/${artist.id}/songs/${song.id}/edit}`}>Edit Song</a>
            <br />
            <a href={`/artists/${artist.id}/songs/${song.id}`} data-method="delete">Delete Song</a>
          </div>
        ))
      }
    </>
  );
}

export default Songs;