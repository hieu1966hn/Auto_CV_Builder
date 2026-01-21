'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
    data: ResumeData;
}

export const ExpertPreview = ({ data }: TemplateProps) => {
    const primaryColor = '#1A237E';

    return (
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl p-8 text-gray-900">
            {/* Header */}
            <div className="flex justify-between items-start mb-6 pb-4 border-b-2" style={{ borderColor: primaryColor }}>
                <div>
                    <h1
                        className="text-3xl font-bold mb-1"
                        style={{ color: primaryColor }}
                    >
                        {data.personalInfo.fullName || 'Họ và Tên'}
                    </h1>
                    <p className="text-gray-700">
                        {data.experience[0]?.role || 'Vị trí ứng tuyển'}
                    </p>
                </div>
                <div className="text-right text-sm text-gray-800 space-y-1">
                    {data.personalInfo.phone && <div className="flex items-center justify-end gap-2"><span>{data.personalInfo.phone}</span><span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded text-xs">☎</span></div>}
                    {data.personalInfo.email && <div className="flex items-center justify-end gap-2"><span>{data.personalInfo.email}</span><span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded text-xs">✉</span></div>}
                    {data.personalInfo.address && <div className="flex items-center justify-end gap-2"><span>{data.personalInfo.address}</span><span className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded text-xs">📍</span></div>}
                </div>
            </div>

            {/* Summary */}
            {data.personalInfo.summary && (
                <section className="mb-6">
                    <h2
                        className="text-sm font-bold uppercase mb-2 pb-1"
                        style={{ color: primaryColor }}
                    >
                        Mục tiêu nghề nghiệp
                    </h2>
                    <div className="border-l-4 pl-4 text-sm text-gray-800 leading-relaxed" style={{ borderColor: primaryColor }}>
                        {data.personalInfo.summary}
                    </div>
                </section>
            )}

            {/* Experience */}
            {data.experience.length > 0 && (
                <section className="mb-6">
                    <h2
                        className="text-sm font-bold uppercase mb-4 pb-1 border-b"
                        style={{ color: primaryColor, borderColor: primaryColor }}
                    >
                        Kinh nghiệm làm việc
                    </h2>
                    {data.experience.map((exp) => (
                        <div key={exp.id} className="mb-4 flex gap-4">
                            <div className="w-24 flex-shrink-0 text-right">
                                <div className="text-xs text-gray-700 font-semibold">
                                    {exp.startDate}
                                </div>
                                <div className="text-xs text-gray-500">-</div>
                                <div className="text-xs text-gray-700 font-semibold">
                                    {exp.endDate}
                                </div>
                            </div>
                            <div className="flex-1 border-l-2 pl-4" style={{ borderColor: primaryColor }}>
                                <div className="font-bold text-sm uppercase" style={{ color: primaryColor }}>{exp.company}</div>
                                <div className="font-bold text-sm text-gray-900 mb-1">{exp.role}</div>
                                <p className="text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </section>
            )}

            {/* Two Column Section */}
            <div className="grid grid-cols-2 gap-8">
                {/* Left: Education */}
                <div>
                    {data.education.length > 0 && (
                        <section className="mb-6">
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Học vấn
                            </h2>
                            {data.education.map((edu) => (
                                <div key={edu.id} className="mb-3">
                                    <div className="text-xs text-gray-600 font-medium">{edu.startDate} - {edu.endDate}</div>
                                    <div className="font-bold text-sm text-gray-900">{edu.degree}</div>
                                    <div className="text-sm text-gray-700">{edu.school}</div>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* References */}
                    {data.references.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Người giới thiệu
                            </h2>
                            {data.references.map((ref) => (
                                <div key={ref.id} className="mb-3 text-sm">
                                    <div className="font-bold text-gray-900">{ref.name}</div>
                                    <div className="text-gray-700">{ref.company} - {ref.role}</div>
                                    <div className="text-gray-600">{ref.contact}</div>
                                </div>
                            ))}
                        </section>
                    )}
                </div>

                {/* Right: Skills */}
                <div>
                    {data.skills.length > 0 && (
                        <section className="mb-6">
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Kỹ năng
                            </h2>
                            <div className="space-y-2">
                                {data.skills.map((skill) => (
                                    <div key={skill.id} className="text-sm text-gray-800">
                                        • {skill.name} {skill.level && <span className="text-gray-600">({skill.level})</span>}
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {data.languages.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Ngôn ngữ
                            </h2>
                            <div className="space-y-1">
                                {data.languages.map((lang) => (
                                    <div key={lang.id} className="text-sm flex justify-between">
                                        <span className="text-gray-900 font-medium">{lang.language}</span>
                                        <span className="text-gray-600">{lang.proficiency}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
