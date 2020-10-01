import React from 'react';

// Context
import { JobsProvider } from './context/jobs/JobsProvider';

// Components
import Header from './components/Header';
import JobsList from './components/JobsList';

function App() {
  return (
    <JobsProvider>
      <div className="relative">
        <Header />
        <main className="mt-20">
          <JobsList />
        </main>
        <div className="absolute top-0 left-0 w-full mt-2">
          <p className="text-xs text-center text-cyan-very-light-grayish font-bold">
            Made with ❤ by{' '}
            <a
              className="hover:underline"
              href="https://github.com/angel-codes/job-listings"
            >
              Angel Martinez
            </a>
          </p>
        </div>
      </div>
    </JobsProvider>
  );
}

export default App;
