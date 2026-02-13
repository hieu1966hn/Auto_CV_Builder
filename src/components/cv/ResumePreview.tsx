'use client';

import React from 'react';
import { useResumeStore } from '@/store/useResumeStore';
import { ElegantPreview } from './templates/ElegantPreview';
import { ImpressivePreview } from './templates/ImpressivePreview';
import { ExpertPreview } from './templates/ExpertPreview';

export const ResumePreview = () => {
    const { resumeData, selectedTemplate } = useResumeStore();

    const renderTemplate = () => {
        switch (selectedTemplate) {
            case 'elegant':
                return <ElegantPreview data={resumeData} />;
            case 'impressive':
                return <ImpressivePreview data={resumeData} />;
            case 'expert':
                return <ExpertPreview data={resumeData} />;
            default:
                return <ElegantPreview data={resumeData} />;
        }
    };

    return (
        <div className="h-full bg-gray-100 overflow-y-auto flex justify-center items-start py-8">
            {renderTemplate()}
        </div>
    );
};
