'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { Plus, X, Pencil } from 'lucide-react';
import { Skill } from '@/types/resume';

const skillSchema = z.object({
    name: z.string().min(1, 'Skill name is required'),
    level: z.string().optional(),
});

type SkillFormData = z.infer<typeof skillSchema>;

export const SkillsForm = () => {
    const { resumeData, addSkill, updateSkill, removeSkill } = useResumeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<SkillFormData>({
        resolver: zodResolver(skillSchema),
    });

    const onEdit = (skill: Skill) => {
        setEditingId(skill.id);
        setIsAdding(true);
        reset({
            name: skill.name,
            level: skill.level,
        });
    };

    const onSubmit = (data: SkillFormData) => {
        if (editingId) {
            updateSkill(editingId, data);
        } else {
            addSkill({
                id: crypto.randomUUID(),
                name: data.name,
                level: data.level,
            });
        }
        reset();
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                {resumeData.skills.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full border border-gray-200 group">
                        <span className="text-sm font-medium text-gray-800">{skill.name}</span>
                        {skill.level && <span className="text-xs text-gray-500">({skill.level})</span>}
                        <button
                            onClick={() => onEdit(skill)}
                            className="text-gray-400 hover:text-blue-500 transition-colors"
                        >
                            <Pencil size={14} />
                        </button>
                        <button
                            onClick={() => removeSkill(skill.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ))}
            </div>

            {isAdding ? (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border border-blue-100 bg-blue-50/50 rounded-lg space-y-3 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <input
                                {...register('name')}
                                placeholder="Skill Name (e.g. React.js)"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('level')}
                                placeholder="Level (Optional)"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                        </div>
                    </div>

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
                    <Plus size={18} /> Add Skill
                </button>
            )}
        </div>
    );
};
