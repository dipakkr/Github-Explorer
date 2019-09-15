import React from 'react';

function RepoItem({ name, description }) {
  return (
    <div className='repo-item'>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default RepoItem;
