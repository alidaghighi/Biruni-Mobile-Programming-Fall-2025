import StudentItem from './StudentItem';

// StudentList.jsx - renders a list of students
function StudentList({ students, onDelete, searchTerm }) {
  // Empty state
  if (students.length === 0) {
    if (searchTerm && searchTerm.trim()) {
      return <p className="no-data">No students match "<em>{searchTerm}</em>"</p>;
    }
    return <p className="no-data">No students yet — use the form above.</p>;
  }

  return (
    <ul className="student-list">
      {students.map(student => (
        <StudentItem 
          key={student.id} 
          student={student} 
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default StudentList;
