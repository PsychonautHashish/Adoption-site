import { useEffect, useState } from 'react';
import ChildCard from '../components/ChildCard';
import '../styles/styles.css';

export default function Children() {
  const [children, setChildren] = useState([]);

  useEffect(() => {
    // Fetch from API in real app
    const sampleChildren = [
      { id: 1, name: 'Emma', age: 5, location: 'New York', bio: 'Loves drawing and animals' },
      { id: 2, name: 'Liam', age: 8, location: 'California', bio: 'Enthusiastic about soccer' },
    ];
    setChildren(sampleChildren);
  }, []);

  return (
    <div className="page-container">
      <h1 className="page-title">Children Waiting for a Home</h1>
      <div className="children-grid">
        {children.map(child => (
          <ChildCard key={child.id} child={child} />
        ))}
      </div>
    </div>
  );
}