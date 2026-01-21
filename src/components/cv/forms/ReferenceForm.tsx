'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useResumeStore } from '@/store/useResumeStore';
import { Plus, Trash2, Pencil } from 'lucide-react';
import { Reference } from '@/types/resume';

const referenceSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    company: z.string().min(1, 'Company/Org is required'),
    role: z.string().optional(),
    contact: z.string().optional(),
});

type ReferenceFormData = z.infer<typeof referenceSchema>;

export const ReferenceForm = () => {
    const { resumeData, addReference, updateReference, removeReference } = useResumeStore();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState<string | null>(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ReferenceFormData>({
        resolver: zodResolver(referenceSchema),
    });

    const onEdit = (ref: Reference) => {
        setEditingId(ref.id);
        setIsAdding(true);
        reset({
            name: ref.name,
            company: ref.company,
            role: ref.role,
            contact: ref.contact,
        });
    };

    const onSubmit = (data: ReferenceFormData) => {
        if (editingId) {
            updateReference(editingId, data);
        } else {
            addReference({
                id: crypto.randomUUID(),
                ...data,
                role: data.role || '',
                contact: data.contact || '',
            });
        }
        reset();
        setIsAdding(false);
        setEditingId(null);
    };

    return (
        <div className="space-y-4">
            <div className="space-y-3">
                {resumeData.references.map((ref) => (
                    <div key={ref.id} className="p-3 border rounded-lg bg-gray-50 flex justify-between items-start group">
                        <div>
                            <h4 className="font-semibold text-gray-800">{ref.name}</h4>
                            <p className="text-sm font-medium text-gray-700">{ref.company} {ref.role && `- ${ref.role}`}</p>
                            {ref.contact && <p className="text-xs text-gray-500">{ref.contact}</p>}
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => onEdit(ref)}
                                className="text-gray-400 hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                <Pencil size={18} />
                            </button>
                            <button
                                onClick={() => removeReference(ref.id)}
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
                                {...register('name')}
                                placeholder="Referee Name"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('company')}
                                placeholder="Company / Organization"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                            {errors.company && <p className="text-red-500 text-xs">{errors.company.message}</p>}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="space-y-1">
                            <input
                                {...register('role')}
                                placeholder="Role / Title"
                                className="w-full p-2 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none text-gray-900 placeholder:text-gray-400"
                            />
                        </div>
                        <div className="space-y-1">
                            <input
                                {...register('contact')}
                                placeholder="Contact (Email/Phone)"
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
                    <Plus size={18} /> Add Reference
                </button>
            )}
        </div>
    );
};
