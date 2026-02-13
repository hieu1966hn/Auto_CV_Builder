'use client';

import React from 'react';
import { PersonalInfoForm } from './forms/PersonalInfoForm';
import { EducationForm } from './forms/EducationForm';
import { ExperienceForm } from './forms/ExperienceForm';
import { SkillsForm } from './forms/SkillsForm';
import { LanguageForm } from './forms/LanguageForm';
import { ReferenceForm } from './forms/ReferenceForm';

export const ResumeForm = () => {
    return (
        <div className="space-y-6 p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Resume Details</h2>

            {/* Personal Info Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Personal Information</h3>
                </div>
                <PersonalInfoForm />
            </section>

            {/* Education Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                </div>
                <EducationForm />
            </section>

            {/* Experience Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Experience</h3>
                </div>
                <ExperienceForm />
            </section>

            {/* Skills Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
                </div>
                <SkillsForm />
            </section>

            {/* Languages Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
                </div>
                <LanguageForm />
            </section>

            {/* References Section */}
            <section className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">References</h3>
                </div>
                <ReferenceForm />
            </section>
        </div>
    );
};
