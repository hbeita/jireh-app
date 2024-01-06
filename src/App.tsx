import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './layouts/Sidebar/Sidebar';
import DashboardPage from './pages/Dashboard/DashboardPage';
import { Header } from './layouts';

const Reports = () => {
  return (
    <div>
      <h1>Reports</h1>
    </div>
  );
}

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            {/* other routes */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
