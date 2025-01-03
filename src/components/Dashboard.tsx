import Loading from './Loading.tsx';
import useCustomReactQueryHook from './../hooks/useCustomReactQueryHook.ts';
import ErrorComponent from './ErrorPage.tsx';

const Dashboard = () => {

  const { data: contests, error, loading } = useCustomReactQueryHook('/api');

  if (error) {
    return <ErrorComponent />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className='w-full h-full min-h-screen flex justify-center items-center flex-col'>
      <h1>Codeforces Contest Dashboard</h1>
      <h2>Number of contests are: {contests.length}</h2>
    </div>
  );
};

export default Dashboard;