import { useState } from 'react';

// StudentForm.jsx - form for adding new students
function StudentForm({ onAdd, students }) {
  const [name, setName] = useState('');
  const [grade, setGrade] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Clear previous errors

    // Validation
    if (!name.trim()) {
      setError('Name is required');
      return;
    }

    const gradeNum = Number(grade);
    if (isNaN(gradeNum) || gradeNum < 0 || gradeNum > 100) {
      setError('Grade must be a number between 0 and 100');
      return;
    }

    // Check for duplicate names (case-insensitive)
    const existingStudent = students.find(
      student => student.name.toLowerCase() === name.toLowerCase()
    );
    
    if (existingStudent) {
      setError('A student with this name already exists');
      return;
    }

    // Add the student
    onAdd({ 
      id: Date.now(), 
      name: name.trim(), 
      grade: gradeNum 
    });

    // Clear form
    setName('');
    setGrade('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder="Student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        className="input input-grade"
        placeholder="Grade (0-100)"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        min="0"
        max="100"
      />
      <button type="submit" className="btn">
        Add Student
      </button>
      {error && <span className="form-error">{error}</span>}
    </form>
  );
}

export default StudentForm;
