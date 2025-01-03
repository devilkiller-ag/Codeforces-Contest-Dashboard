import './App.css';
import useCustomReactQueryHook from './hooks/useCustomReactQueryHook.ts';

function App() {

  const { data: contests, error, loading } = useCustomReactQueryHook('/api');

  if (error) {
    return <h1>Something went wrong!</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Codeforces Contest Dashboard</h1>
      <h2>Number of contests are: {contests.length}</h2>
    </>
  )
}

export default App;
