import { useState } from 'react';
import './styles/lab-styles.css';
import StudentForm from './components/StudentForm';
import StudentControls from './components/StudentControls';
import StudentList from './components/StudentList';

// Initial students data
const initialStudents = [
  { id: 1, name: 'Ali', grade: 85 },
  { id: 2, name: 'Siti', grade: 72 },
  { id: 3, name: 'Rahim', grade: 55 },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('high'); // 'high' or 'low'

  // Function to add a new student
  const addStudent = (newStudent) => {
    setStudents(prev => [...prev, newStudent]);
  };

  // Function to delete a student
  const deleteStudent = (id) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  };

  // Compute visible students based on filter, search, and sort
  const visibleStudents = students
    .filter(student => {
      // Filter by pass/fail
      if (filter === 'pass') return student.grade >= 60;
      if (filter === 'fail') return student.grade < 60;
      return true; // 'all'
    })
    .filter(student => {
      // Search by name (case-insensitive)
      return student.name.toLowerCase().includes(search.toLowerCase());
    })
    .sort((a, b) => {
      // Sort by grade
      if (sortOrder === 'high') return b.grade - a.grade;
      return a.grade - b.grade;
    });

  // Handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Handle search change
  const handleSearchChange = (newSearch) => {
    setSearch(newSearch);
  };

  // Handle sort toggle
  const handleSortToggle = () => {
    setSortOrder(prev => prev === 'high' ? 'low' : 'high');
  };

  return (
    <div className="app">
      <h1 className="header">Student Dashboard</h1>
      <StudentForm onAdd={addStudent} students={students} />
      <StudentControls 
        filter={filter}
        onFilterChange={handleFilterChange}
        search={search}
        onSearchChange={handleSearchChange}
        sortOrder={sortOrder}
        onSortToggle={handleSortToggle}
      />
      <StudentList students={visibleStudents} onDelete={deleteStudent} searchTerm={search} />
    </div>
  );
}

export default App;
