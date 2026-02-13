import React from 'react';
import { Document, StyleSheet, Font } from '@react-pdf/renderer';
import { ResumeData, CVTemplateId } from '@/types/resume';
import { ElegantPDF } from './templates/ElegantPDF';
import { ImpressivePDF } from './templates/ImpressivePDF';
import { ExpertPDF } from './templates/ExpertPDF';

// Register fonts for Vietnamese support
Font.register({
    family: 'Roboto',
    fonts: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
    ]
});

// Update global styles to use Roboto
const styles = StyleSheet.create({
    document: {
        fontFamily: 'Roboto',
    }
});

interface ResumePDFProps {
    data: ResumeData;
    templateId: CVTemplateId;
}

export const ResumePDF: React.FC<ResumePDFProps> = ({ data, templateId }) => {
    const renderTemplate = () => {
        switch (templateId) {
            case 'impressive':
                return <ImpressivePDF data={data} />;
            case 'expert':
                return <ExpertPDF data={data} />;
            case 'elegant':
            default:
                return <ElegantPDF data={data} />;
        }
    };

    return (
        <Document title={`${data.personalInfo.fullName || 'Resume'}`} style={styles.document}>
            {renderTemplate()}
        </Document>
    );
};
