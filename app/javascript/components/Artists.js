import React from 'react';

const Artists = ({ artists, bill_board }) => {
  const { title, body, id } = bill_board
  return(
    <>
      <h1>Artits Page from {title} BillBoard</h1>
      <p><a href={`/bill_boards/${id}`}>Back to {title}</a></p>
      <br />
      <a href={`/bill_boards/${id}/artists/new`}>New Artist</a>
      <br />
      {
        artists.map ((artist) => (
          <div key={artist.id} className="artist-card">
            <h3><a href={`/bill_boards/${bill_board.id}/artists/${artist.id}`}>{artist.name}</a></h3>
            <p>{artist.about}</p>
            <br />
            <a href={`/bill_boards/${bill_board.id}/artists/${artist.id}/edit`}>Edit Artist</a>
            <br />
            <a href={`/bill_boards/${bill_board.id}/artists/${artist.id}`} data-method="delete">Delete Artist</a>
          </div>
      ))}
    </>
  )
}

export default Artists;