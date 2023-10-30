import { useSession } from 'next-auth/react';

const Dashboard = () => {
  const { data: session } = useSession();

  if (!session) {
    return <div>Please sign up or log in to view the dashboard.</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session.user.name}!</p>
    </div>
  );
};

export default Dashboard;