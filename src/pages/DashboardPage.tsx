// src/pages/DashboardPage.tsx
import React from "react";
import Card from "@/components/common/Card";
import {
  FiBarChart2,
  FiUsers,
  FiCheckCircle,
  FiAlertCircle,
  FiTruck,
  FiMap,
} from "react-icons/fi"; // Example Icons

// Dummy Data - Replace with actual data source/state management later
const overviewData = {
  totalCases: 1700,
  livesSaved: 1580,
  livesLost: 120,
  resourcesDeployed: 1150,
  national: { cases: 500, saved: 450, lost: 50, resources: 300 },
  state: { cases: 1000, saved: 950, lost: 50, resources: 700 },
  airAmbulance: { cases: 200, saved: 180, lost: 20, resources: 150 },
};

const nationalStats = {
  saveRate: "90%",
  foodSupply: 10000,
  totalPersonnel: 680,
  activeCases: 10,
};
const stateStats = {
  saveRate: "95%",
  foodSupply: 2900,
  totalPersonnel: 340,
  activeCases: 34,
};

const DashboardPage: React.FC = () => {
  const saveRate = (saved: number, total: number) =>
    total > 0 ? ((saved / total) * 100).toFixed(1) + "%" : "N/A";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-primary mb-2">Dashboard</h1>
      <p className="text-text-secondary mb-8">
        Overview of rescue operations and statistics.
      </p>

      {/* Overview Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card title="Total Cases" titleIcon={<FiUsers />}>
          <p className="text-3xl font-bold">
            {overviewData.totalCases.toLocaleString()}
          </p>
        </Card>
        <Card
          title="Lives Saved"
          titleIcon={<FiCheckCircle className="text-accent-green" />}
        >
          <p className="text-3xl font-bold text-accent-green">
            {overviewData.livesSaved.toLocaleString()}
          </p>
          <p className="text-sm text-text-secondary mt-1">
            Save Rate:{" "}
            {saveRate(overviewData.livesSaved, overviewData.totalCases)}
          </p>
        </Card>
        <Card
          title="Lives Lost"
          titleIcon={<FiAlertCircle className="text-accent-red" />}
        >
          <p className="text-3xl font-bold text-accent-red">
            {overviewData.livesLost.toLocaleString()}
          </p>
        </Card>
        <Card title="Resources Deployed" titleIcon={<FiTruck />}>
          <p className="text-3xl font-bold">
            {overviewData.resourcesDeployed.toLocaleString()}
          </p>
        </Card>
      </div>

      {/* Detailed Overview Table */}
      <Card
        title="Agency Breakdown"
        titleIcon={<FiBarChart2 />}
        className="mb-12 overflow-x-auto"
      >
        <table className="min-w-full divide-y divide-secondary-light">
          <thead className="bg-background-paper">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                Metric
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                National Rescue (NDRF etc.)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                State Rescue (SDRF etc.)
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                Air Ambulance
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-text-secondary uppercase tracking-wider"
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-secondary-light">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                Cases
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.national.cases.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.state.cases.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.airAmbulance.cases.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-text-primary">
                {overviewData.totalCases.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                Lives Saved
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-green">
                {overviewData.national.saved.toLocaleString()}{" "}
                <span className="text-xs text-gray-400">
                  (
                  {saveRate(
                    overviewData.national.saved,
                    overviewData.national.cases
                  )}
                  )
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-green">
                {overviewData.state.saved.toLocaleString()}{" "}
                <span className="text-xs text-gray-400">
                  (
                  {saveRate(overviewData.state.saved, overviewData.state.cases)}
                  )
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-green">
                {overviewData.airAmbulance.saved.toLocaleString()}{" "}
                <span className="text-xs text-gray-400">
                  (
                  {saveRate(
                    overviewData.airAmbulance.saved,
                    overviewData.airAmbulance.cases
                  )}
                  )
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-accent-green">
                {overviewData.livesSaved.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                Lives Lost
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-red">
                {overviewData.national.lost.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-red">
                {overviewData.state.lost.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-accent-red">
                {overviewData.airAmbulance.lost.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-accent-red">
                {overviewData.livesLost.toLocaleString()}
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-text-primary">
                Resources Deployed
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.national.resources.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.state.resources.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary">
                {overviewData.airAmbulance.resources.toLocaleString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-text-primary">
                {overviewData.resourcesDeployed.toLocaleString()}
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </Card>

      {/* Graphical / Detailed Section (Conceptual - requires charting library like Recharts or Chart.js) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="National Operations" titleIcon={<FiMap />}>
          {/* Add a Chart Component here */}
          <div className="h-64 bg-secondary-light rounded flex items-center justify-center text-text-secondary">
            Chart Placeholder (e.g., Lives Saved Distribution)
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Save Rate:</span>{" "}
              {nationalStats.saveRate}
            </div>
            <div>
              <span className="font-medium">Food Supply Units:</span>{" "}
              {nationalStats.foodSupply.toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Personnel:</span>{" "}
              {nationalStats.totalPersonnel.toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Active Cases:</span>{" "}
              {nationalStats.activeCases}
            </div>
          </div>
        </Card>
        <Card title="State Operations (Example)" titleIcon={<FiMap />}>
          {/* Add another Chart Component here */}
          <div className="h-64 bg-secondary-light rounded flex items-center justify-center text-text-secondary">
            Chart Placeholder (e.g., Resource Allocation by District)
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium">Avg. Save Rate:</span>{" "}
              {stateStats.saveRate}
            </div>
            <div>
              <span className="font-medium">Food Supply Units:</span>{" "}
              {stateStats.foodSupply.toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Personnel:</span>{" "}
              {stateStats.totalPersonnel.toLocaleString()}
            </div>
            <div>
              <span className="font-medium">Active Cases:</span>{" "}
              {stateStats.activeCases}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
