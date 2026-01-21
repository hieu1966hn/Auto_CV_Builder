'use client';

import React, { useState } from 'react';
import { useResumeStore } from '@/store/useResumeStore';
import { CV_TEMPLATES } from '@/config/templates';
import { ChevronDown, Check, Palette } from 'lucide-react';

export const TemplateSelector = () => {
    const { selectedTemplate, setTemplate } = useResumeStore();
    const [isOpen, setIsOpen] = useState(false);

    const currentTemplate = CV_TEMPLATES.find(t => t.id === selectedTemplate);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
                <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: currentTemplate?.primaryColor }}
                />
                <span className="text-sm font-medium text-gray-700">
                    {currentTemplate?.name || 'Chọn mẫu'}
                </span>
                <ChevronDown size={16} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden">
                        <div className="p-2 border-b border-gray-100 bg-gray-50">
                            <div className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                                <Palette size={14} />
                                CHỌN MẪU CV
                            </div>
                        </div>
                        <div className="p-2">
                            {CV_TEMPLATES.map((template) => (
                                <button
                                    key={template.id}
                                    onClick={() => {
                                        setTemplate(template.id);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${selectedTemplate === template.id
                                            ? 'bg-blue-50 border border-blue-200'
                                            : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <div
                                        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                                        style={{ backgroundColor: template.primaryColor }}
                                    >
                                        {template.name.charAt(0)}
                                    </div>
                                    <div className="flex-1 text-left">
                                        <div className="text-sm font-semibold text-gray-800">
                                            {template.name}
                                        </div>
                                        <div className="text-xs text-gray-500">
                                            {template.description}
                                        </div>
                                    </div>
                                    {selectedTemplate === template.id && (
                                        <Check size={18} className="text-blue-600" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
