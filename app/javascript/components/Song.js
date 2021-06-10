import React from 'react';

const Song = ({ song, artist }) => {
  const { title, body } = song
  return(
    <>
      <div className="song-card">
        <h1>Song: {title}</h1>
        <h3><a href={`/artists/${artist.id}/songs`}>Artist: {artist.name}</a></h3>
        <p>{body}</p>
        <br />
      </div>
      <br />
      <a href={`/artists/${artist.id}/songs`}>Back</a>
    </>
  );
}

export default Song;