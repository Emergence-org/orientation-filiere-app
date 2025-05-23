import { useState } from 'react';

export default function Home() {
  const [profil, setProfil] = useState({});
  const [resultats, setResultats] = useState([]);

  const handleChange = (e) => {
    setProfil({ ...profil, [e.target.name]: parseInt(e.target.value) });
  };

  const handleSubmit = async () => {
    const res = await fetch('http://localhost:8000/api/orientation/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ profil }),
    });
    const data = await res.json();
    setResultats(data.resultats);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Test d'orientation</h1>
      <label>Maths (0-5) <input name="maths" type="number" onChange={handleChange} /></label><br/>
      <label>Physique (0-5) <input name="physique" type="number" onChange={handleChange} /></label><br/>
      <label>SVT (0-5) <input name="svt" type="number" onChange={handleChange} /></label><br/>
      <label>Français (0-5) <input name="francais" type="number" onChange={handleChange} /></label><br/>
      <label>Technologie (0-5) <input name="technologie" type="number" onChange={handleChange} /></label><br/>
      <button className="mt-2 p-2 bg-blue-500 text-white" onClick={handleSubmit}>Obtenir mes recommandations</button>

      <div className="mt-4">
        {resultats.length > 0 && <h2 className="text-xl">Filières recommandées :</h2>}
        <ul>
          {resultats.map(([filiere, score], idx) => (
            <li key={idx}>{filiere} (score: {score})</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
