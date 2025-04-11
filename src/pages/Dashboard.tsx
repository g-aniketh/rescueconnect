import Card from "../components/ui/Card";

const Dashboard = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Stats</h1>
          <p className="text-neutral-600">For detailed stats:</p>
        </div>

        {/* Overview Table */}
        <Card className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Overview</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Overview
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    National Rescue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    State Rescue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Air Ambulance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-neutral-900">
                        Cases
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    500
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    1000
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    200
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    1700
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-neutral-900">
                        Lives Saved
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    450
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    950
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    180
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    1580
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-neutral-900">
                        Lives Lost
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    50
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    50
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    20
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    120
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm font-medium text-neutral-900">
                        Resources Deployed
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    300
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    700
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    150
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                    1150
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        {/* Graphical Stats */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Graphical Stats</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-start mb-6">
                <img
                  src="/src/assets/images/india.png"
                  alt="National"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">National</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-neutral-500">Save Rate</p>
                  <p className="font-medium">0.00</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Food Supply</p>
                  <p className="font-medium">10,000</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total</p>
                  <p className="font-medium">68</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Cases</p>
                  <p className="font-medium">10</p>
                </div>
              </div>

              <div className="relative h-48 bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-neutral-700 font-medium mb-2">
                    Distribution
                  </p>
                  <p className="text-sm text-neutral-500">450 Lives Saved</p>
                  <p className="text-sm text-neutral-500">
                    Faster Contact Response
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start mb-6">
                <img
                  src="/src/assets/images/telangana.png"
                  alt="State"
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">State</h3>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="text-sm text-neutral-500">Save Rate</p>
                  <p className="font-medium">89</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Food Supply</p>
                  <p className="font-medium">29</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Total</p>
                  <p className="font-medium">34</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500">Cases</p>
                  <p className="font-medium">34</p>
                </div>
              </div>

              <div className="relative h-48 bg-neutral-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <p className="text-neutral-700 font-medium mb-2">Rescues</p>
                  <p className="text-sm text-neutral-500">290 Lives Saved</p>
                  <p className="text-sm text-neutral-500">
                    Various Rescue Services
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
