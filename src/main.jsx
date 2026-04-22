import React from 'react';
import { createRoot } from 'react-dom/client';
import TeamAllocator from './TeamAllocator.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TeamAllocator />
  </React.StrictMode>
);
