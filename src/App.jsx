import React, { useState } from 'react';
import ProtocolViewer from './components/ProtocolViewer';

function Placeholder({ title }) {
  return <div className="text-lg text-gray-400">{title} panel coming soon.</div>;
}

export default function App() {
  const [view, setView] = useState('protocols');

  return (
    <div className="flex h-screen">
      <div className="w-64 bg-gray-800 text-white p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-6">Argus</h1>
        <button onClick={() => setView('protocols')} className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Protocols</button>
        <button onClick={() => setView('identity')} className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Identity</button>
        <button onClick={() => setView('training')} className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Training</button>
        <button onClick={() => setView('logs')} className="w-full text-left px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Logs</button>
      </div>
      <div className="flex-1 p-8 bg-gray-900 text-white overflow-y-auto">
        {view === 'protocols' && <ProtocolViewer />}
        {view === 'identity' && <Placeholder title="Identity" />}
        {view === 'training' && <Placeholder title="Training" />}
        {view === 'logs' && <Placeholder title="Logs" />}
      </div>
    </div>
  );
}