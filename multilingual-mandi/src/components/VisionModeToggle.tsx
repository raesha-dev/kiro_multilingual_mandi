import React from 'react';

interface VisionModeToggleProps {
    isVisionMode: boolean;
    onToggle: (enabled: boolean) => void;
}

const VisionModeToggle: React.FC<VisionModeToggleProps> = ({ isVisionMode, onToggle }) => {
    return (
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg p-3 mb-4">
            <div className="flex items-center justify-center space-x-4">
                <button
                    onClick={() => onToggle(false)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${!isVisionMode
                            ? 'bg-mandi-green text-white shadow-sm'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    Today's Mandi ✅
                </button>
                <button
                    onClick={() => onToggle(true)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${isVisionMode
                            ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-sm'
                            : 'bg-white text-gray-600 hover:bg-gray-50'
                        }`}
                >
                    Bharat 2048 Vision ✨
                </button>
            </div>
            {isVisionMode && (
                <div className="mt-2 text-center">
                    <p className="text-xs text-indigo-700 font-hindi">
                        Future-ready features preview • Building Bharat's Trade OS
                    </p>
                </div>
            )}
        </div>
    );
};

export default VisionModeToggle;