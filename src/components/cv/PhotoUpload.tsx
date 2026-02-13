'use client';

import React, { useRef } from 'react';
import { useResumeStore } from '@/store/useResumeStore';
import { Camera, X, User } from 'lucide-react';

export const PhotoUpload = () => {
    const { resumeData, setPersonalInfo } = useResumeStore();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        // Convert to base64
        const reader = new FileReader();
        reader.onloadend = () => {
            setPersonalInfo({ photo: reader.result as string });
        };
        reader.readAsDataURL(file);
    };

    const handleRemove = () => {
        setPersonalInfo({ photo: undefined });
        if (inputRef.current) inputRef.current.value = '';
    };

    return (
        <div className="flex items-center gap-4 mb-4">
            <div className="relative group">
                {resumeData.personalInfo.photo ? (
                    <img
                        src={resumeData.personalInfo.photo}
                        alt="Profile"
                        className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                    />
                ) : (
                    <div className="w-20 h-20 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
                        <User className="text-gray-400" size={32} />
                    </div>
                )}

                {/* Overlay */}
                <div
                    className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    onClick={() => inputRef.current?.click()}
                >
                    <Camera className="text-white" size={24} />
                </div>

                {/* Remove Button */}
                {resumeData.personalInfo.photo && (
                    <button
                        onClick={handleRemove}
                        className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-colors shadow-lg"
                    >
                        <X size={14} />
                    </button>
                )}
            </div>

            <div className="flex-1">
                <input
                    ref={inputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                />
                <button
                    onClick={() => inputRef.current?.click()}
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                    {resumeData.personalInfo.photo ? 'Đổi ảnh' : 'Tải ảnh lên'}
                </button>
                <p className="text-xs text-gray-500 mt-1">
                    Khuyến nghị: Ảnh vuông, tối thiểu 200x200px
                </p>
            </div>
        </div>
    );
};
