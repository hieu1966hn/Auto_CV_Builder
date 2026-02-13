'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { Experience } from '@/types/resume';
import { Plus, Trash2, Briefcase, Pencil } from 'lucide-react';

const experienceSchema = z.object({
    company: z.string().min(1, 'Company is required'),
    role: z.string().min(1, 'Role is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string().optional().or(z.literal('')),
});

type ExperienceFormData = z.infer<typeof experienceSchema>;

export const ExperienceForm = () => {
    const { resumeData, addExperience, updateExperience, removeExperience } = useResumeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ExperienceFormData>({
        resolver: zodResolver(experienceSchema),
    });

    const onEdit = (exp: Experience) => {
        setEditingId(exp.id);
        setIsAdding(true);
        reset({
            company: exp.company,
            role: exp.role,
            startDate: exp.startDate,
            endDate: exp.endDate,
            description: exp.description,
        });
    };

    const onSubmit = (data: ExperienceFormData) => {
        if (editingId) {
            updateExperience(editingId, data);
        } else {
            addExperience({
                id: crypto.randomUUID(),
                ...data,
                description: data.description || '',
            });
        }
        reset();
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="space-y-4">
            {/* List Existing Experience */}
            <div className="space-y-3">
                {resumeData.experience.map((exp) => (
                    <div key={exp.id} className="p-3 border rounded-lg bg-gray-50 flex justify-between items-start group">
                        <div>
                            <h4 className="font-semibold text-gray-800">{exp.role}</h4>
                            <p className="text-sm font-medium text-gray-700">{exp.company}</p>
                            <p className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(exp)}
                                className="text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Pencil size={18} />
                            </button>
                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Add New Form */}
            {isAdding ? (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border border-blue-100 bg-blue-50/50 rounded-lg space-y-3 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <input
                                {...register('role')}
                                placeholder="Job Role / Title"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.role && <p className="text-red-500 text-xs">{errors.role.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('company')}
                                placeholder="Company Name"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            {...register('startDate')}
                            placeholder="Start Date"
                            className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        />
                        <input
                            type="text"
                            {...register('endDate')}
                            placeholder="End Date"
                            className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        />
                    </div>

                    <textarea
                        {...register('description')}
                        placeholder="Description of responsibilities..."
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        rows={3}
                    />

                    <div className="flex gap-2 justify-end mt-2">
                        <button
                            type="button"
                            onClick={() => {
                                setIsAdding(false);
                                setEditingId(null);
                                reset();
                            }}
                            className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-200 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 font-medium"
                        >
                            {editingId ? 'Update' : 'Add'}
                        </button>
                    </div>
                </form>
            ) : (
                <button
                    onClick={() => setIsAdding(true)}
                    className="w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-blue-500 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
                >
                    <Plus size={18} /> Add Experience
                </button>
            )}
        </div>
    );
};
