import React, { useState } from 'react';
import { useAuth } from '../../stores/contexts/Auth';
import Navigation from '../../components/Navigation';
import { User, Mail, Building2, MapPin, Phone, Calendar, Save, Edit3 } from 'lucide-react';

const Profile: React.FC = () => {
    const { user } = useAuth();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        company: user?.company || '',
        position: 'Senior Structural Engineer',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        joinDate: 'January 2022'
    });

    const handleSave = () => {
        setIsEditing(false);
        // In a real app, you would save to your backend here
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navigation />
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-8">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="bg-white bg-opacity-20 p-3 rounded-full">
                                    <User className="h-8 w-8 text-white" />
                                </div>
                                <div className="ml-4">
                                    <h1 className="text-2xl font-bold text-white">User Profile</h1>
                                    <p className="text-blue-100">Manage your account information</p>
                                </div>
                            </div>
                            <button
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-lg
                         flex items-center space-x-2 transition-all duration-200"
                            >
                                {isEditing ? (
                                    <>
                                        <Save className="h-4 w-4" />
                                        <span>Save Changes</span>
                                    </>
                                ) : (
                                    <>
                                        <Edit3 className="h-4 w-4" />
                                        <span>Edit Profile</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Profile Content */}
                    <div className="px-6 py-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Personal Information */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                    Personal Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.name}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.email}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.phone}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Location
                                        </label>
                                        <div className="relative">
                                            <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.location}
                                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.location}</div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Professional Information */}
                            <div className="space-y-6">
                                <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                                    Professional Information
                                </h2>

                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Company
                                        </label>
                                        <div className="relative">
                                            <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.company}
                                                    onChange={(e) => handleInputChange('company', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.company}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Position
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    value={formData.position}
                                                    onChange={(e) => handleInputChange('position', e.target.value)}
                                                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            ) : (
                                                <div className="pl-10 py-2 text-gray-900">{formData.position}</div>
                                            )}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Member Since
                                        </label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                                            <div className="pl-10 py-2 text-gray-900">{formData.joinDate}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Account Stats */}
                                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                                    <h3 className="text-sm font-medium text-gray-900 mb-3">Account Statistics</h3>
                                    <div className="grid grid-cols-2 gap-4 text-center">
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600">127</div>
                                            <div className="text-xs text-gray-500">Calculations</div>
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-green-600">23</div>
                                            <div className="text-xs text-gray-500">Projects</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Profile;