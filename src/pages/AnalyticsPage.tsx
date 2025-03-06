
import Dashboard from "@/components/layout/Dashboard";

const AnalyticsPage = () => {
  return (
    <Dashboard>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-medium mb-4">Analytics Content</h2>
            <p className="text-gray-500">This is the Analytics page. Content will be implemented soon.</p>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default AnalyticsPage;
