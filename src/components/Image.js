import React from 'react';

const Image = ({ url, title }) => {

  console.log(url, title,'lllllllllllllllllllll')
  return (
  <li>
    <img src={url} alt={title} />
  </li>
  );
}
export default Image;
