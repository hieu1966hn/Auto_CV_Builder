'use client';

import React, { useState } from 'react';
import { ResumeForm } from '@/components/cv/ResumeForm';
import { ResumePreview } from '@/components/cv/ResumePreview';
import { DownloadButton } from '@/components/cv/DownloadButton';
import { SmartImportModal } from '@/components/cv/SmartImportModal';
import { TemplateSelector } from '@/components/cv/TemplateSelector';
import { FileText, Sparkles } from 'lucide-react';

export default function Home() {
    const [isImportOpen, setIsImportOpen] = useState(false);

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10 shadow-sm">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                        <FileText size={20} className="font-bold" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 leading-tight">Auto CV Builder</h1>
                        <p className="text-xs text-gray-500 font-medium">Create professional resumes in seconds.</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsImportOpen(true)}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors border border-blue-200"
                    >
                        <Sparkles size={16} />
                        Smart Import
                    </button>
                    <TemplateSelector />
                    <DownloadButton />
                </div>
            </header>

            <div className="flex-1 flex overflow-hidden">
                {/* Left Panel: Editor */}
                <div className="w-1/2 overflow-y-auto p-6 border-r border-gray-200 bg-slate-50">
                    <div className="max-w-3xl mx-auto">
                        <ResumeForm />
                    </div>
                </div>

                {/* Right Panel: Preview */}
                <div className="w-1/2 bg-gray-100 overflow-y-auto p-6 flex justify-center">
                    {/* Preview component handles its own layout, but we wrap it for alignment if needed */}
                    <ResumePreview />
                </div>
            </div>

            <SmartImportModal isOpen={isImportOpen} onClose={() => setIsImportOpen(false)} />
        </main>
    );
}
