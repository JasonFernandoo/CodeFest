import React, { useState } from 'react';
import { useDarkMode } from '../DarkModeContext';

const Input = () => {
    const { darkMode } = useDarkMode();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [fileName, setFileName] = useState<string | null>(null);
    const [imageName, setImageName] = useState<string>('');

    return (
        <>
            <div
            className={`h-[100vh] w-[100vw] flex justify-center items-center py-10 px-4 ${
                darkMode ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            >
                <div className="flex flex-col items-center gap-4 p-6 border rounded-lg">
                    {/* File Upload */}
                    <label className="cursor-pointer">
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            // Handle file upload logic
                            setFileName(file.name);
                            const reader = new FileReader();
                            reader.onloadend = () => {
                            setPreviewUrl(reader.result as string);
                            };
                            reader.readAsDataURL(file);
                        }
                        }}
                    />
                    <div className={`w-60 h-60 border-2 border-dashed rounded-lg flex items-center justify-center`}>
                        {previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="Preview"
                            className="max-w-full max-h-full object-contain"
                        />
                        ) : (
                        <span className="text-gray-400">Click to upload image</span>
                        )}
                    </div>
                    </label>

                    {/* File Name */}
                    {fileName && <p className="text-sm text-gray-600">{fileName}</p>}

                    {/* Image Name Input */}
                    <input
                    type="text"
                    placeholder="Enter image name"
                    value={imageName}
                    onChange={(e) => setImageName(e.target.value)}
                    className="w-full max-w-xs border border-gray-300 rounded-lg p-2 text-sm text-gray-900 bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
                    />
                    
                    {/* Submit Button */}
                    <button
                    className="w-full max-w-xs font-semibold py-2 px-4 rounded-lg text-white 
                        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                        hover:from-blue-600 hover:via-purple-600 hover:to-pink-600
                        transition-all duration-300 ease-in-out
                        transform hover:scale-[0.98]"
                    onClick={() => {
                        // Handle submit logic
                        console.log(imageName);
                    }}
                    >
                    Submit
                    </button>
                </div>
            </div>
        </> 
    );
};

export default Input;