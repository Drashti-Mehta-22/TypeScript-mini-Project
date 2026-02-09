import CatFactCard from "./CatFactCard";
import type { CatFact } from "../types";
import React ,{ useState } from "react";


const CatList: React.FC = () => {

  const [catFacts, setCatFacts] = useState<CatFact[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  
  const [error, setError] = useState<string>('');

  const delay = (s: number) =>
  new Promise(resolve => setTimeout(resolve, s))

  // fetch cat facts
  const fetchCatFacts = async (): Promise<void> => {
  setLoading(true);
  setError('');

  try {
    const response = await fetch('https://catfact.ninja/facts?limit=10');
    const data = await response.json();
    await delay(1000)

    setCatFacts(data.data);
  } catch (err) {
    setError('Failed to load cat facts!');
  }

  setLoading(false);
};

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      padding: '40px 20px',
      textAlign: 'center',
    }}>
      
      {/* Title */}
      <h1 style={{
        marginBottom: '30px',
        color: '#333',
        fontSize: '36px',
      }}>
        Users Directory
      </h1>

      {/* Load Button */}
      <button
        onClick={fetchCatFacts}
        disabled={loading}
        style={{
          padding: '15px 40px',
          fontSize: '18px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: loading ? '#6c757d' : '#007bff',
          border: 'none',
          borderRadius: '8px',
          cursor: loading ? 'not-allowed' : 'pointer',
          marginBottom: '30px',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = '#0056b3';
            e.currentTarget.style.transform = 'scale(1.05)';
          }
        }}
        onMouseLeave={(e) => {
          if (!loading) {
            e.currentTarget.style.backgroundColor = '#007bff';
            e.currentTarget.style.transform = 'scale(1)';
          }
        }}
      >
        {loading ? '⏳ Loading...' : '📥 Cat Info'}
      </button>

      {/* Error Message */}
      {error && (
        <div style={{
          color: '#dc3545',
          fontSize: '18px',
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#f8d7da',
          borderRadius: '8px',
          maxWidth: '400px',
          margin: '0 auto 20px auto',
        }}>
          ❌ {error}
        </div>
      )}

      {/* Display Users */}
      {catFacts.length > 0 && (
  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  }}>
    {catFacts.map((fact, index) => (
      <CatFactCard key={index} catFact={fact} />
    ))}
  </div>
)}

      {/* Empty State */}
      {catFacts.length === 0 && !loading && !error && (
        <p style={{
          color: '#999',
          fontSize: '18px',
          marginTop: '50px',
        }}>
          🐱 Cat Facts Directory
        </p>
      )}

    </div>
  );
};

export default CatList