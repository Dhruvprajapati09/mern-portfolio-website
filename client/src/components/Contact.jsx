import React, { useState } from 'react';
export default function Contact(){
  const [status,setStatus]=useState('idle');

  async function submit(e){
    e.preventDefault();
    setStatus('loading');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const api = import.meta.env.VITE_API_BASE || 'http://localhost:5000';
    try{
      const r = await fetch(`${api}/api/contact`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      if(!r.ok) throw new Error();
      setStatus('success'); e.currentTarget.reset();
    }catch{ setStatus('error'); }
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={submit} style={{display:'grid', gap:8, maxWidth:480}}>
        <input name="name" placeholder="Your name" required/>
        <input name="email" type="email" placeholder="Email" required/>
        <textarea name="message" rows="5" placeholder="Message" required/>
        <button disabled={status==='loading'}>{status==='loading'?'Sending…':'Send'}</button>
        {status==='success' && <p>Thanks! Message sent.</p>}
        {status==='error' && <p>Something went wrong.</p>}
      </form>
    </section>
  );
}
