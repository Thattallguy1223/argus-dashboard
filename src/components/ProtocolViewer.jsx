import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function ProtocolViewer() {
  const [protocols, setProtocols] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchProtocols();
  }, []);

  async function fetchProtocols() {
    const { data, error } = await supabase
      .from('argus_memory')
      .select('*')
      .eq('memory_type', 'protocol')
      .order('created_at', { ascending: false });

    if (!error) setProtocols(data);
  }

  async function saveProtocol() {
    const { error } = await supabase.from('argus_memory').insert([
      { memory_type: 'protocol', title, content },
    ]);
    if (!error) {
      setTitle('');
      setContent('');
      fetchProtocols();
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Protocols</h2>
      <div className="mb-6">
        <input className="border p-2 mr-2 text-black" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="border p-2 mr-2 text-black" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
        <button className="bg-blue-500 px-4 py-2 text-white rounded" onClick={saveProtocol}>Save</button>
      </div>
      <ul>
        {protocols.map((p) => (
          <li key={p.id} className="mb-2 border p-2 rounded">
            <strong>{p.title}</strong>
            <pre className="text-sm whitespace-pre-wrap">{p.content}</pre>
          </li>
        ))}
      </ul>
    </div>
  );
}