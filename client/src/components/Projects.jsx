import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const api = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
    fetch(`${api}/api/projects`)
      .then(r=>r.json())
      .then(setList)
      .finally(()=>setLoading(false));
  },[]);

  if (loading) return <section><h2>Projects</h2><p>Loading…</p></section>;

  return (
    <section>
      <h2>Projects</h2>
      <div style={{display:'grid', gap:16, gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))'}}>
        {list.map(p=>(
          <article key={p._id} style={{border:'1px solid #333', borderRadius:12, padding:12}}>
            <img src={p.image} alt={p.title} style={{width:'100%', aspectRatio:'16/9', objectFit:'cover', borderRadius:8}}/>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div style={{display:'flex', gap:8, flexWrap:'wrap'}}>
              {p.tech?.map(t=><span key={t} style={{border:'1px solid #444', padding:'2px 8px', borderRadius:12, fontSize:12}}>{t}</span>)}
            </div>
            <div style={{marginTop:8, display:'flex', gap:8}}>
              {p.github && <a href={p.github} target="_blank" rel="noreferrer">GitHub</a>}
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live</a>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
