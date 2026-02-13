'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/store/useResumeStore';
import { parseCVFromText } from '@/lib/ai/cvParser';
import { Sparkles, X, Loader2, FileText } from 'lucide-react';

interface SmartImportModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SmartImportModal = ({ isOpen, onClose }: SmartImportModalProps) => {
    const [text, setText] = useState('');
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const { importData } = useResumeStore();

    if (!isOpen) return null;

    const handleImport = async () => {
        if (!text.trim()) return;

        setIsAnalyzing(true);

        // Simulate a small delay for "AI thinking" UX
        await new Promise(resolve => setTimeout(resolve, 800));

        try {
            const parsedData = parseCVFromText(text);

            // Build summary of what was found
            const found: string[] = [];
            if (parsedData.personalInfo?.fullName) found.push('Tên');
            if (parsedData.personalInfo?.email) found.push('Email');
            if (parsedData.personalInfo?.phone) found.push('SĐT');
            if (parsedData.personalInfo?.summary) found.push('Tóm tắt');
            if (parsedData.skills && parsedData.skills.length > 0) found.push(`${parsedData.skills.length} Kỹ năng`);

            importData(parsedData as any);

            if (found.length > 0) {
                alert(`✅ Đã nhập thành công: ${found.join(', ')}`);
            } else {
                alert('⚠️ Không tìm thấy dữ liệu cấu trúc (email, phone, tên...). Văn bản đã được lưu vào Tóm tắt.');
            }

            onClose();
            setText('');
        } catch (error) {
            console.error("Import failed:", error);
            alert("Failed to parse text. Please try again.");
        } finally {
            setIsAnalyzing(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden border border-gray-100">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 flex justify-between items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                            <Sparkles className="text-yellow-300" />
                            Smart Import
                        </h2>
                        <p className="text-blue-100 text-sm mt-1">
                            Paste your LinkedIn summary or old CV text here. Our AI will extract the data for you.
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="text-white/80 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    <div className="relative">
                        <textarea
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Example:
Nguyen Van A
Senior Frontend Developer
Email: abc@gmail.com
Skills: React, Node.js..."
                            className="w-full h-64 p-4 text-sm border-2 border-gray-100 rounded-lg focus:border-blue-500 focus:ring-4 focus:ring-blue-50 outline-none resize-none bg-gray-50 font-mono text-gray-800 placeholder:text-gray-400"
                        />
                        <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                            {text.length} chars
                        </div>
                    </div>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            onClick={onClose}
                            className="px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleImport}
                            disabled={isAnalyzing || !text.trim()}
                            className="flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-blue-200"
                        >
                            {isAnalyzing ? (
                                <>
                                    <Loader2 size={18} className="animate-spin" />
                                    Analyzing...
                                </>
                            ) : (
                                <>
                                    <Sparkles size={18} />
                                    Analyze & Auto-Fill
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
