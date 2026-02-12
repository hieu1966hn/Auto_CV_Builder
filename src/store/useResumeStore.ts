import { create } from 'zustand';
import { ResumeData, initialResumeData, PersonalInfo, Education, Experience, Skill, Project, Language, Reference, CVTemplateId } from '@/types/resume';

interface ResumeState {
    resumeData: ResumeData;
    selectedTemplate: CVTemplateId;
    setTemplate: (templateId: CVTemplateId) => void;
    setPersonalInfo: (info: Partial<PersonalInfo>) => void;
    // Education
    addEducation: (edu: Education) => void;
    updateEducation: (id: string, edu: Partial<Education>) => void;
    removeEducation: (id: string) => void;
    // Experience
    addExperience: (exp: Experience) => void;
    updateExperience: (id: string, exp: Partial<Experience>) => void;
    removeExperience: (id: string) => void;
    // Skills
    addSkill: (skill: Skill) => void;
    updateSkill: (id: string, skill: Partial<Skill>) => void;
    removeSkill: (id: string) => void;
    // Languages
    addLanguage: (lang: Language) => void;
    updateLanguage: (id: string, lang: Partial<Language>) => void;
    removeLanguage: (id: string) => void;
    // References
    addReference: (ref: Reference) => void;
    updateReference: (id: string, ref: Partial<Reference>) => void;
    removeReference: (id: string) => void;
    // Projects
    addProject: (proj: Project) => void;
    updateProject: (id: string, proj: Partial<Project>) => void;
    removeProject: (id: string) => void;

    // Import
    importData: (data: Partial<ResumeData>) => void;

    // Full Reset
    resetResume: () => void;
    dataVersion: number;
}

export const useResumeStore = create<ResumeState>((set) => ({
    resumeData: initialResumeData,
    selectedTemplate: 'elegant',

    dataVersion: 0,

    setTemplate: (templateId) => set({ selectedTemplate: templateId }),

    setPersonalInfo: (info) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                personalInfo: { ...state.resumeData.personalInfo, ...info },
            },
        })),

    // Education
    addEducation: (edu) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                education: [...state.resumeData.education, edu],
            },
        })),
    updateEducation: (id, edu) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                education: state.resumeData.education.map((item) =>
                    item.id === id ? { ...item, ...edu } : item
                ),
            },
        })),
    removeEducation: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                education: state.resumeData.education.filter((item) => item.id !== id),
            },
        })),

    // Experience
    addExperience: (exp) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                experience: [...state.resumeData.experience, exp],
            },
        })),
    updateExperience: (id, exp) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                experience: state.resumeData.experience.map((item) =>
                    item.id === id ? { ...item, ...exp } : item
                ),
            },
        })),
    removeExperience: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                experience: state.resumeData.experience.filter((item) => item.id !== id),
            },
        })),

    // Skills
    addSkill: (skill) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                skills: [...state.resumeData.skills, skill],
            },
        })),
    updateSkill: (id, skill) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                skills: state.resumeData.skills.map((item) =>
                    item.id === id ? { ...item, ...skill } : item
                ),
            },
        })),
    removeSkill: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                skills: state.resumeData.skills.filter((item) => item.id !== id),
            },
        })),


    // Languages
    addLanguage: (lang) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                languages: [...state.resumeData.languages, lang],
            },
        })),
    updateLanguage: (id, lang) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                languages: state.resumeData.languages.map((item) =>
                    item.id === id ? { ...item, ...lang } : item
                ),
            },
        })),
    removeLanguage: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                languages: state.resumeData.languages.filter((item) => item.id !== id),
            },
        })),

    // References
    addReference: (ref) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                references: [...state.resumeData.references, ref],
            },
        })),
    updateReference: (id, ref) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                references: state.resumeData.references.map((item) =>
                    item.id === id ? { ...item, ...ref } : item
                ),
            },
        })),
    removeReference: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                references: state.resumeData.references.filter((item) => item.id !== id),
            },
        })),

    // Projects
    addProject: (proj) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                projects: [...state.resumeData.projects, proj],
            },
        })),
    updateProject: (id, proj) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                projects: state.resumeData.projects.map((item) =>
                    item.id === id ? { ...item, ...proj } : item
                ),
            },
        })),
    removeProject: (id) =>
        set((state) => ({
            resumeData: {
                ...state.resumeData,
                projects: state.resumeData.projects.filter((item) => item.id !== id),
            },
        })),

    // Import
    importData: (data) =>
        set((state) => ({
            dataVersion: state.dataVersion + 1,
            resumeData: {
                ...state.resumeData,
                personalInfo: { ...state.resumeData.personalInfo, ...data.personalInfo },
                skills: [...state.resumeData.skills, ...(data.skills || [])],
                languages: [...state.resumeData.languages, ...(data.languages || [])],
                experience: [...state.resumeData.experience, ...(data.experience || [])],
                education: [...state.resumeData.education, ...(data.education || [])],
            },
        })),

    resetResume: () => set((state) => ({
        resumeData: initialResumeData,
        dataVersion: state.dataVersion + 1
    })),
}));
