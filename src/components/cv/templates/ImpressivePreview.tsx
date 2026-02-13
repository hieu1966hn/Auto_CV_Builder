'use client';

import React from 'react';
import { ResumeData } from '@/types/resume';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

interface TemplateProps {
    data: ResumeData;
}

export const ImpressivePreview = ({ data }: TemplateProps) => {
    const primaryColor = '#2E7D32';

    return (
        <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl flex">
            {/* Left Sidebar */}
            <div className="w-1/3 text-white p-6" style={{ backgroundColor: primaryColor }}>
                {/* Photo */}
                <div className="flex justify-center mb-6">
                    {data.personalInfo.photo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={data.personalInfo.photo}
                            alt="Profile"
                            className="w-36 h-36 rounded-full object-cover border-4 border-white/30"
                        />
                    ) : (
                        <div className="w-36 h-36 rounded-full bg-white/20 flex items-center justify-center text-5xl font-bold">
                            {data.personalInfo.fullName?.charAt(0) || '?'}
                        </div>
                    )}
                </div>

                {/* Name */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-1">
                        {data.personalInfo.fullName || 'Họ và Tên'}
                    </h1>
                    <p className="text-white/80 text-sm">
                        {data.experience[0]?.role || 'Vị trí ứng tuyển'}
                    </p>
                </div>

                {/* Contact */}
                <section className="mb-6">
                    <h2 className="text-xs font-bold uppercase mb-3 pb-1 border-b border-white/30">
                        Liên hệ
                    </h2>
                    <div className="space-y-3 text-sm">
                        {data.personalInfo.email && (
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded">
                                    <Mail size={12} />
                                </span>
                                <span className="truncate">{data.personalInfo.email}</span>
                            </div>
                        )}
                        {data.personalInfo.phone && (
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded">
                                    <Phone size={12} />
                                </span>
                                <span>{data.personalInfo.phone}</span>
                            </div>
                        )}
                        {data.personalInfo.address && (
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded">
                                    <MapPin size={12} />
                                </span>
                                <span>{data.personalInfo.address}</span>
                            </div>
                        )}
                        {data.personalInfo.website && (
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded">
                                    <Globe size={12} />
                                </span>
                                <span className="truncate">{data.personalInfo.website}</span>
                            </div>
                        )}
                        {data.personalInfo.linkedin && (
                            <div className="flex items-center gap-3">
                                <span className="w-5 h-5 flex items-center justify-center bg-white/20 rounded">
                                    <Linkedin size={12} />
                                </span>
                                <span className="truncate">LinkedIn</span>
                            </div>
                        )}
                    </div>
                </section>

                {/* Skills */}
                {data.skills.length > 0 && (
                    <section className="mb-6">
                        <h2 className="text-xs font-bold uppercase mb-3 pb-1 border-b border-white/30">
                            Kỹ năng
                        </h2>
                        <div className="space-y-2">
                            {data.skills.map((skill) => (
                                <div key={skill.id} className="flex items-center gap-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <div
                                                key={i}
                                                className={`w-2 h-2 rounded-full ${i <= 4 ? 'bg-white' : 'bg-white/30'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Languages */}
                {data.languages.length > 0 && (
                    <section>
                        <h2 className="text-xs font-bold uppercase mb-3 pb-1 border-b border-white/30">
                            Ngôn ngữ
                        </h2>
                        <div className="space-y-1 text-sm">
                            {data.languages.map((lang) => (
                                <div key={lang.id} className="flex justify-between">
                                    <span>{lang.language}</span>
                                    <span className="text-white/70">{lang.proficiency}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>

            {/* Right Content */}
            <div className="flex-1 p-8">
                {/* Summary */}
                {data.personalInfo.summary && (
                    <section className="mb-6">
                        <h2
                            className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            Mục tiêu nghề nghiệp
                        </h2>
                        <p className="text-sm text-gray-800 leading-relaxed">
                            {data.personalInfo.summary}
                        </p>
                    </section>
                )}

                {/* Education */}
                {data.education.length > 0 && (
                    <section className="mb-6">
                        <h2
                            className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            Học vấn
                        </h2>
                        {data.education.map((edu) => (
                            <div key={edu.id} className="mb-3">
                                <div className="flex justify-between">
                                    <span className="font-bold text-sm text-gray-900">{edu.school}</span>
                                    <span className="text-xs text-gray-600">{edu.startDate} - {edu.endDate}</span>
                                </div>
                                <div className="text-sm text-gray-700">{edu.degree}</div>
                            </div>
                        ))}
                    </section>
                )}

                {/* Experience */}
                {data.experience.length > 0 && (
                    <section className="mb-6">
                        <h2
                            className="text-sm font-bold uppercase mb-3 pb-1 border-b-2"
                            style={{ color: primaryColor, borderColor: primaryColor }}
                        >
                            Kinh nghiệm làm việc
                        </h2>
                        {data.experience.map((exp) => (
                            <div key={exp.id} className="mb-4">
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <span className="font-bold text-sm uppercase" style={{ color: primaryColor }}>{exp.company}</span>
                                        <span className="text-gray-900 font-bold text-sm ml-2"> | {exp.role}</span>
                                    </div>
                                    <span className="text-xs text-gray-700 font-medium italic">{exp.startDate} - {exp.endDate}</span>
                                </div>
                                <p className="text-sm text-gray-800 whitespace-pre-wrap">{exp.description}</p>
                            </div>
                        ))}
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
                        <div className="grid grid-cols-2 gap-4 text-sm">
                            {data.references.map((ref) => (
                                <div key={ref.id}>
                                    <div className="font-bold text-gray-900">{ref.name}</div>
                                    <div className="text-gray-700">{ref.company}</div>
                                    <div className="text-gray-600">{ref.contact}</div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};
