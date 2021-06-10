import React from 'react';

const Artist = ({ artist, bill_board }) => {
  const { name, about, age } = artist
  return(
    <>
      <div className="artist-card">
        <h1>Artist: {name}</h1>
        <h3><a href={`/bill_boards/${bill_board.id}/artists`}>BillBoard: {bill_board.title}</a></h3>
        <p>{about}</p>
        <br />
        <a href={`/artists/${artist.id}/songs`}>Show Songs</a>
      </div>
    </>
  )
}

export default Artist; 