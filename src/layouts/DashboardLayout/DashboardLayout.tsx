const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
