'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';

interface TemplateProps {
    data: ResumeData;
}

export const ElegantPreview = ({ data }: TemplateProps) => {
    const primaryColor = '#A41C1F';

    return (
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl text-gray-900">
            {/* Header with Photo */}
            <div className="flex gap-6 p-8 border-b-4" style={{ borderColor: primaryColor }}>
                {/* Photo */}
                <div className="flex-shrink-0">
                    {data.personalInfo.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={data.personalInfo.photo}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4"
                            style={{ borderColor: primaryColor }}
                        />
                    ) : (
                        <div
                            className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-white"
                            style={{ backgroundColor: primaryColor }}
                        >
                            {data.personalInfo.fullName?.charAt(0) || '?'}
                        </div>
                    )}
                </div>

                {/* Name & Title */}
                <div className="flex-1">
                    <h1
                        className="text-4xl font-bold mb-2"
                        style={{ color: primaryColor }}
                    >
                        {data.personalInfo.fullName || 'Họ và Tên'}
                    </h1>
                    <p className="text-lg text-gray-700 mb-4">
                        {data.experience[0]?.role || 'Vị trí ứng tuyển'}
                    </p>
                    <p className="text-sm text-gray-800 leading-relaxed">
                        {data.personalInfo.summary}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-8 grid grid-cols-3 gap-8">
                {/* Left Column - Contact Info */}
                <div className="space-y-6">
                    <section>
                        <h2
                            className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            Thông tin cá nhân
                        </h2>
                        <div className="space-y-3 text-sm">
                            {data.personalInfo.email && (
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 flex items-center justify-center text-white rounded text-xs" style={{ backgroundColor: primaryColor }}>@</span>
                                    <span className="text-gray-900">{data.personalInfo.email}</span>
                                </div>
                            )}
                            {data.personalInfo.phone && (
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 flex items-center justify-center text-white rounded text-xs" style={{ backgroundColor: primaryColor }}>☎</span>
                                    <span className="text-gray-900">{data.personalInfo.phone}</span>
                                </div>
                            )}
                            {data.personalInfo.address && (
                                <div className="flex items-center gap-3">
                                    <span className="w-5 h-5 flex items-center justify-center text-white rounded text-xs" style={{ backgroundColor: primaryColor }}>◈</span>
                                    <span className="text-gray-900">{data.personalInfo.address}</span>
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Education */}
                    {data.education.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Học vấn
                            </h2>
                            {data.education.map((edu) => (
                                <div key={edu.id} className="mb-3">
                                    <div className="font-bold text-sm text-gray-900">{edu.school}</div>
                                    <div className="text-sm text-gray-700">{edu.degree}</div>
                                    <div className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</div>
                                </div>
                            ))}
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Kỹ năng
                            </h2>
                            <div className="flex flex-wrap gap-1">
                                {data.skills.map((skill) => (
                                    <span
                                        key={skill.id}
                                        className="text-xs px-2 py-1 rounded text-white"
                                        style={{ backgroundColor: primaryColor }}
                                    >
                                        {skill.name}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column - Experience */}
                <div className="col-span-2 space-y-6">
                    {data.experience.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-4 pb-1 border-b-2"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Kinh nghiệm làm việc
                            </h2>
                            <div className="space-y-4">
                                {data.experience.map((exp) => (
                                    <div key={exp.id}>
                                        <div className="flex justify-between items-baseline mb-1">
                                            <div>
                                                <span className="font-bold text-sm text-gray-900">{exp.role}</span>
                                                <span className="text-gray-800 text-sm"> - {exp.company}</span>
                                            </div>
                                            <span className="text-xs text-gray-700 font-medium italic">{exp.startDate} - {exp.endDate}</span>
                                        </div>
                                        <p className="text-sm text-gray-800 whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Languages */}
                    {data.languages.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Ngôn ngữ
                            </h2>
                            <div className="flex gap-4">
                                {data.languages.map((lang) => (
                                    <div key={lang.id} className="text-sm">
                                        <span className="font-bold text-gray-900">{lang.language}</span>
                                        <span className="text-gray-600 ml-1">({lang.proficiency})</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* References */}
                    {data.references.length > 0 && (
                        <section>
                            <h2
                                className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                                style={{ color: primaryColor, borderColor: primaryColor }}
                            >
                                Người giới thiệu
                            </h2>
                            <div className="grid grid-cols-2 gap-4">
                                {data.references.map((ref) => (
                                    <div key={ref.id} className="text-sm">
                                        <div className="font-bold text-gray-900">{ref.name}</div>
                                        <div className="text-gray-700">{ref.company} - {ref.role}</div>
                                        <div className="text-gray-600">{ref.contact}</div>
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
