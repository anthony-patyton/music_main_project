import React from 'react';

const Navbar = () = (
  <nav>
    <ul>
      <li>
        <a href="/bill_boards">BillBoards</a>
      </li>
      <li>
        <a href="/bill_boards/new">New BillBoard</a>
      </li>
      <li>
        <a href="/bill_boards/" data-method="post">Create BillBoard</a>
      </li>
      <li>
        <a href="/artists">Artists</a>
      </li>
      <li>
        <a href="/artists/new">New Artist</a>
      </li>
      <li>
        <a href="/artists" data-method="post">Create Artist</a>
      </li>
    </ul>
  </nav>
)
export default Navbar;