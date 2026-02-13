'use client';

import React, { useEffect, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { ResumePDF } from './pdf/ResumePDF';
import { useResumeStore } from '@/store/useResumeStore';
import { Download, Loader2 } from 'lucide-react';

export const DownloadButton = () => {
    const { resumeData, selectedTemplate } = useResumeStore();
    const [debouncedData, setDebouncedData] = useState(resumeData);

    // Debounce data updates to prevent PDF generator from lagging/crashing during typing
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedData(resumeData);
        }, 1000); // 1 second debounce for PDF generation
        return () => clearTimeout(timer);
    }, [resumeData]);

    const isClient = typeof window !== 'undefined';
    if (!isClient) return null;

    return (
        <PDFDownloadLink
            document={<ResumePDF data={debouncedData} templateId={selectedTemplate} />}
            fileName={`${debouncedData.personalInfo.fullName || 'resume'}.pdf`}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >

            {({ loading }) => (
                loading ? (
                    <>
                        <Loader2 className="animate-spin" size={20} />
                        <span>Preparing PDF...</span>
                    </>
                ) : (
                    <>
                        <Download size={20} />
                        <span>Download PDF</span>
                    </>
                )
            )}
        </PDFDownloadLink>
    );
};
