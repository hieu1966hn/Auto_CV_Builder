export interface PersonalInfo {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    linkedin?: string;
    website?: string;
    photo?: string; // Base64 or URL
}

// CV Template Types
export type CVTemplateId = 'elegant' | 'impressive' | 'expert';

export interface CVTemplate {
    id: CVTemplateId;
    name: string;
    description: string;
    primaryColor: string;
    thumbnail?: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Experience {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    level?: string; // Optional: Expert, Intermediate, etc.
}

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface ResumeData {
    personalInfo: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    languages: Language[];
    references: Reference[];
    projects: Project[];
}

export interface Language {
    id: string;
    language: string;
    proficiency: string; // Native, Fluent, Intermediate, Basic
}

export interface Reference {
    id: string;
    name: string;
    company: string;
    role: string;
    contact: string;
}

export const initialResumeData: ResumeData = {
    personalInfo: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
        summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    languages: [],
    references: [],
    projects: [],
};
