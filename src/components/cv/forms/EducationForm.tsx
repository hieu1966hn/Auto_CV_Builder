'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { Education } from '@/types/resume';
import { Plus, Trash2, Pencil } from 'lucide-react';

const educationSchema = z.object({
    school: z.string().min(1, 'School is required'),
    degree: z.string().min(1, 'Degree is required'),
    startDate: z.string().min(1, 'Start date is required'),
    endDate: z.string().min(1, 'End date is required'),
    description: z.string().optional().or(z.literal('')),
});

type EducationFormData = z.infer<typeof educationSchema>;

export const EducationForm = () => {
    const { resumeData, addEducation, updateEducation, removeEducation } = useResumeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<EducationFormData>({
        resolver: zodResolver(educationSchema),
    });

    const onEdit = (edu: Education) => {
        setEditingId(edu.id);
        setIsAdding(true);
        reset({
            school: edu.school,
            degree: edu.degree,
            startDate: edu.startDate,
            endDate: edu.endDate,
            description: edu.description,
        });
    };

    const onSubmit = (data: EducationFormData) => {
        if (editingId) {
            updateEducation(editingId, data);
        } else {
            addEducation({
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
            {/* List Existing Education */}
            <div className="space-y-3">
                {resumeData.education.map((edu) => (
                    <div key={edu.id} className="p-3 border rounded-lg bg-gray-50 flex justify-between items-start group">
                        <div>
                            <h4 className="font-semibold text-gray-800">{edu.school}</h4>
                            <p className="text-sm text-gray-600">{edu.degree}</p>
                            <p className="text-xs text-gray-500">{edu.startDate} - {edu.endDate}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(edu)}
                                className="text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Pencil size={18} />
                            </button>
                            <button
                                onClick={() => removeEducation(edu.id)}
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
                                {...register('school')}
                                placeholder="School / University"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.school && <p className="text-red-500 text-xs">{errors.school.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('degree')}
                                placeholder="Degree / Major"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.degree && <p className="text-red-500 text-xs">{errors.degree.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                        <input
                            type="text"
                            {...register('startDate')}
                            placeholder="Start Date (e.g. 2019)"
                            className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        />
                        <input
                            type="text"
                            {...register('endDate')}
                            placeholder="End Date (e.g. 2023)"
                            className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        />
                    </div>

                    <textarea
                        {...register('description')}
                        placeholder="Description (Optional)"
                        className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                        rows={2}
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
                    <Plus size={18} /> Add Education
                </button>
            )}
        </div>
    );
};
