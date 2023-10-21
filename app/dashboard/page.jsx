
const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div>
      <h1>Welcome, {user?.fullName}</h1>
      {/* Dashboard content */}
    </div>
  );
};