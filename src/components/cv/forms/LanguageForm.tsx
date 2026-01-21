'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { Language } from '@/types/resume';

const languageSchema = z.object({
    language: z.string().min(1, 'Language is required'),
    proficiency: z.string().min(1, 'Proficiency is required'),
});

type LanguageFormData = z.infer<typeof languageSchema>;

export const LanguageForm = () => {
    const { resumeData, addLanguage, updateLanguage, removeLanguage } = useResumeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<LanguageFormData>({
        resolver: zodResolver(languageSchema),
    });

    const onEdit = (lang: Language) => {
        setEditingId(lang.id);
        setIsAdding(true);
        reset({
            language: lang.language,
            proficiency: lang.proficiency,
        });
    };

    const onSubmit = (data: LanguageFormData) => {
        if (editingId) {
            updateLanguage(editingId, data);
        } else {
            addLanguage({
                id: crypto.randomUUID(),
                ...data,
            });
        }
        reset();
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-2">
                {resumeData.languages.map((lang) => (
                    <div key={lang.id} className="p-3 border rounded-lg bg-gray-50 flex justify-between items-center group">
                        <div>
                            <span className="font-semibold text-gray-800">{lang.language}</span>
                            <span className="text-sm text-gray-500 ml-2">({lang.proficiency})</span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(lang)}
                                className="text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Pencil size={18} />
                            </button>
                            <button
                                onClick={() => removeLanguage(lang.id)}
                                className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {isAdding ? (
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 border border-blue-100 bg-blue-50/50 rounded-lg space-y-3 animate-in fade-in slide-in-from-top-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <input
                                {...register('language')}
                                placeholder="Language (e.g. English)"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.language && <p className="text-red-500 text-xs">{errors.language.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <select
                                {...register('proficiency')}
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 bg-white"
                            >
                                <option value="">Select Proficiency</option>
                                <option value="Native">Native</option>
                                <option value="Fluent">Fluent</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Basic">Basic</option>
                            </select>
                            {errors.proficiency && <p className="text-red-500 text-xs">{errors.proficiency.message}</p>}
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
                    <Plus size={18} /> Add Language
                </button>
            )}
        </div>
    );
};
