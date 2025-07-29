import React from "react";
import { useAuth } from "../../stores/contexts/Auth";
import { BarChart3, Calculator, FileText, Users, Activity, TrendingUp } from "lucide-react";
import Navigation from "../../components/Navigation";



const Dashboard: React.FC = () => {
    const { user } = useAuth();

    const stats = [
        { name: 'Active Projects', value: '12', icon: FileText, change: '+2.1%', changeType: 'positive' },
        { name: 'Calculations Run', value: '2,847', icon: Calculator, change: '+12.5%', changeType: 'positive' },
        { name: 'Team Members', value: '8', icon: Users, change: '+1', changeType: 'positive' },
        { name: 'Analysis Hours', value: '156.7', icon: Activity, change: '+8.2%', changeType: 'positive' },
    ];

    const recentProjects = [
        { name: 'Steel Frame Analysis - Building A', status: 'In Progress', updated: '2 hours ago' },
        { name: 'Foundation Design - Plaza Project', status: 'Completed', updated: '1 day ago' },
        { name: 'Seismic Analysis - Tower B', status: 'Review', updated: '3 days ago' },
        { name: 'Wind Load Calculations', status: 'In Progress', updated: '1 week ago' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Welcome Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Welcome back, {user?.name}!
                    </h1>
                    <p className="text-gray-600">
                        Here's what's happening with your engineering projects today.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.name} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                    <div className="ml-5 w-0 flex-1">
                                        <dl>
                                            <dt className="text-sm font-medium text-gray-500 truncate">
                                                {item.name}
                                            </dt>
                                            <dd className="flex items-baseline">
                                                <div className="text-2xl font-semibold text-gray-900">
                                                    {item.value}
                                                </div>
                                                <div className={`ml-2 flex items-baseline text-sm font-semibold ${item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                                    }`}>
                                                    <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                                                    <span className="sr-only">
                                                        {item.changeType === 'positive' ? 'Increased' : 'Decreased'} by
                                                    </span>
                                                    {item.change}
                                                </div>
                                            </dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Recent Projects */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Recent Projects</h3>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {recentProjects.map((project, index) => (
                                <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {project.name}
                                            </p>
                                            <p className="text-sm text-gray-500">
                                                Updated {project.updated}
                                            </p>
                                        </div>
                                        <div className="ml-4 flex-shrink-0">
                                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${project.status === 'Completed'
                                                    ? 'bg-green-100 text-green-800'
                                                    : project.status === 'In Progress'
                                                        ? 'bg-blue-100 text-blue-800'
                                                        : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
                            <button className="text-sm font-medium text-blue-600 hover:text-blue-500">
                                View all projects →
                            </button>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-4">
                                <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <Calculator className="h-6 w-6 text-blue-600 mr-3" />
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-900">New Calculation</p>
                                        <p className="text-sm text-gray-500">Start a new structural analysis</p>
                                    </div>
                                </button>
                                <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <FileText className="h-6 w-6 text-green-600 mr-3" />
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-900">Create Project</p>
                                        <p className="text-sm text-gray-500">Set up a new engineering project</p>
                                    </div>
                                </button>
                                <button className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                                    <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                                    <div className="text-left">
                                        <p className="text-sm font-medium text-gray-900">View Reports</p>
                                        <p className="text-sm text-gray-500">Access analysis reports and data</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;