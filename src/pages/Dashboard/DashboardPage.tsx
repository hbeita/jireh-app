import DashboardLayout from '../../layouts/DashboardLayout/DashboardLayout';

const DashboardPage = () => {
  console.log('DashboardPage');
  return (
    <>
      <DashboardLayout>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          {/* Add more content or components here */}
        </div>
      </DashboardLayout>
    </>
  );
};

export default DashboardPage;
