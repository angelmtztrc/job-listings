import React from 'react';

// Context
import { JobsProvider } from './context/jobs/JobsProvider';

// Components
import Header from './components/Header';
import JobsList from './components/JobsList';

function App() {
  return (
    <JobsProvider>
      <div>
        <Header />
        <main className="mt-20">
          <JobsList />
        </main>
      </div>
    </JobsProvider>
  );
}

export default App;
