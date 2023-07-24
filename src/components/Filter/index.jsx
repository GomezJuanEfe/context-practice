import React from 'react';

export const Filter = () => {
  return (
    <div className='filter-container'>
      <div className="filter-card">
        <h3>Ver</h3>
        <div>
          <input type="radio" name="info-type" id="info-type-per" />
          <label htmlFor="info-type">%</label>
        </div>
        <div>
          <input type="radio" name="info-type" id="info-type-num" />
          <label htmlFor="info-type">Total</label>
        </div>
        <div>
          <input type="checkbox" name="filter-all" id="filter-all" />
          <label htmlFor="filter-all">Todos</label>
        </div>
      </div>
    </div>
  )
}
