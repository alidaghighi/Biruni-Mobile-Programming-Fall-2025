// StudentControls.jsx - controls for filtering and sorting
function StudentControls({ 
  filter, 
  onFilterChange, 
  search, 
  onSearchChange, 
  sortOrder, 
  onSortToggle 
}) {
  return (
    <div className="controls">
      <div className="filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'pass' ? 'active' : ''}`}
          onClick={() => onFilterChange('pass')}
        >
          Pass
        </button>
        <button 
          className={`filter-btn ${filter === 'fail' ? 'active' : ''}`}
          onClick={() => onFilterChange('fail')}
        >
          Fail
        </button>
      </div>
      
      <input 
        className="input search" 
        placeholder="Search by name" 
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      
      <button 
        className="btn sort-btn" 
        onClick={onSortToggle}
      >
        Sort: {sortOrder === 'high' ? 'High → Low' : 'Low → High'}
      </button>
    </div>
  );
}

export default StudentControls;
