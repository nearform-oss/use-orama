import React from 'react';
import ReactDOM from 'react-dom/client';
import {LyraProvider} from 'use-lyra/lib/Provider';
import {type PropertiesSchema} from '@lyrasearch/lyra';
import App from './App';
import './index.css';

const schema: PropertiesSchema = {
  title: 'string',
  description: 'string',
};

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <LyraProvider
      schema={schema}
      options={{
        components: {
          elapsed: {
            // Make the elapsed time human readable
            format: 'human',
          },
        },
      }}
    >
      <App />
    </LyraProvider>
  </React.StrictMode>,
);
