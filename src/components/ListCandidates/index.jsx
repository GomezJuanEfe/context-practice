import React from 'react';

export const ListCandidates = ({children}) => {
  return (
    <div className='list-candidates'>
      <ul>
        {children}
      </ul>
    </div>
  )
}
