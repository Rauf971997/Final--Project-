import React from 'react';

const FilterButtons = ({ handleFilter, filter }) => (
  <div className="filter-btns">
    <button
      className={filter === 'all' ? 'filter-btn active' : 'filter-btn'}
      onClick={() => handleFilter('all')}
    >
      All
    </button>
    <button
      className={filter === 'completed' ? 'filter-btn active' : 'filter-btn'}
      onClick={() => handleFilter('completed')}
    >
      Completed
    </button>
    <button
      className={filter === 'uncompleted' ? 'filter-btn active' : 'filter-btn'}
      onClick={() => handleFilter('uncompleted')}
    >
      Uncompleted
    </button>
  </div>
);


