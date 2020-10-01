import React from 'react';

// Components
import Header from './components/Header';
import JobsList from './components/JobsList';

function App() {
  return (
    <div>
      <Header />
      <main className="mt-20">
        <JobsList />
      </main>
    </div>
  );
}

export default App;
