import React from 'react';
import Main from './components/Main'; // Adjust the path as needed
import 'bootstrap/dist/css/bootstrap.css';

import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')); // Create a root

root.render(
  <div>
    <Main />
  </div>
);