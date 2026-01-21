'use client';

import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { PersonalInfo } from '@/types/resume';
import { PhotoUpload } from '../PhotoUpload';

const personalInfoSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    address: z.string().optional(),
    summary: z.string().optional(),
    linkedin: z.string().url('Invalid URL').optional().or(z.literal('')),
    website: z.string().url('Invalid URL').optional().or(z.literal('')),
});

type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;

export const PersonalInfoForm = () => {
    const { resumeData, setPersonalInfo } = useResumeStore();

    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: resumeData.personalInfo,
        mode: 'onChange' // Validate on change
    });

    // Watch all fields and update store with debounce (auto-save feel)
    useEffect(() => {
        const subscription = watch((value) => {
            // Use a timeout for debouncing store updates
            const timeoutId = setTimeout(() => {
                setPersonalInfo(value as Partial<PersonalInfo>);
            }, 500); // 500ms debounce
            return () => clearTimeout(timeoutId);
        });
        return () => subscription.unsubscribe();
    }, [watch, setPersonalInfo]);

    // Sync from store to form if store changes externally (e.g. load/import)
    // Only reset if specific visible fields are different to avoid loops with invisible fields like 'photo'
    useEffect(() => {
        const currentValues = watch();
        const hasChanged =
            currentValues.fullName !== resumeData.personalInfo.fullName ||
            currentValues.email !== resumeData.personalInfo.email ||
            currentValues.phone !== resumeData.personalInfo.phone ||
            currentValues.address !== resumeData.personalInfo.address ||
            currentValues.summary !== resumeData.personalInfo.summary ||
            currentValues.linkedin !== resumeData.personalInfo.linkedin ||
            currentValues.website !== resumeData.personalInfo.website;

        if (hasChanged) {
            reset(resumeData.personalInfo);
        }
    }, [resumeData.personalInfo, reset, watch]);

    return (
        <div className="space-y-4">
            {/* Photo Upload */}
            <PhotoUpload />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        {...register('fullName')}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="John Doe"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs">{errors.fullName.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register('email')}
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                        {...register('phone')}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="+1 234 567 890"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Address</label>
                    <input
                        {...register('address')}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="New York, NY"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">LinkedIn URL</label>
                    <input
                        {...register('linkedin')}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="https://linkedin.com/in/username"
                    />
                    {errors.linkedin && <p className="text-red-500 text-xs">{errors.linkedin.message}</p>}
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Website / Portfolio</label>
                    <input
                        {...register('website')}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                        placeholder="https://yourportfolio.com"
                    />
                    {errors.website && <p className="text-red-500 text-xs">{errors.website.message}</p>}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Professional Summary</label>
                <textarea
                    {...register('summary')}
                    rows={4}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-900 placeholder:text-gray-400"
                    placeholder="Brief overview of your professional background..."
                />
            </div>
        </div>
    );
};
