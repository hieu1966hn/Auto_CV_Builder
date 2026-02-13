import { ResumeData, Skill, Language, PersonalInfo } from '@/types/resume';

interface ParseResult {
    personalInfo: Partial<PersonalInfo>;
    skills: Skill[];
    languages: Language[];
}

export const parseCVFromText = (text: string): ParseResult => {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    const result: ParseResult = {
        personalInfo: {},
        skills: [],
        languages: [],
    };

    // 1. Extract Email
    const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/;
    const emailMatch = text.match(emailRegex);
    if (emailMatch) {
        result.personalInfo = { ...result.personalInfo, email: emailMatch[0] } as any;
    }

    // 2. Extract Phone (Simple regex for 10-11 digits, potentially with spaces/dots)
    const phoneRegex = /(\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})/;
    const phoneMatch = text.match(phoneRegex);
    // Basic filter to ensure it looks like a phone number (at least 7 digits)
    if (phoneMatch && phoneMatch[0].replace(/\D/g, '').length >= 7) {
        result.personalInfo = { ...result.personalInfo, phone: phoneMatch[0].trim() } as any;
    }

    // 3. Extract Links (LinkedIn / GitHub / Website)
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const urls = text.match(urlRegex);
    if (urls) {
        urls.forEach(url => {
            if (url.includes('linkedin.com')) {
                result.personalInfo = { ...result.personalInfo, linkedin: url } as any;
            } else if (!url.includes(result.personalInfo?.email || '')) {
                // Assume other URL is personal website if not email domain
                // This is a weak heuristic but works for simple cases
                if (!result.personalInfo?.website) {
                    result.personalInfo = { ...result.personalInfo, website: url } as any;
                }
            }
        });
    }

    // 4. Heuristic for Name - Multiple strategies
    // Strategy A: Look for "Tôi là [Name]" or "I am [Name]" pattern
    const namePatterns = [
        /(?:Tôi là|tôi là|My name is|I am|I'm)\s+([A-Za-zÀ-ỹ]+(?:\s+[A-Za-zÀ-ỹ]+)*)/i,
        /(?:^|\n)([A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ][a-zàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+(?:\s+[A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠ][a-zàáâãèéêìíòóôõùúăđĩũơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]+){1,3})(?:\s*[-–,]|$)/m
    ];

    for (const pattern of namePatterns) {
        const match = text.match(pattern);
        if (match && match[1]) {
            result.personalInfo.fullName = match[1].trim();
            break;
        }
    }

    // Strategy B: Fallback - first non-empty line that looks like a name
    if (!result.personalInfo.fullName) {
        for (let i = 0; i < Math.min(lines.length, 5); i++) {
            const line = lines[i];
            if (
                !line.includes('@') &&
                !line.match(/\d/) && // No numbers
                line.split(' ').length >= 2 &&
                line.split(' ').length <= 4 &&
                line.length < 50 // Names usually aren't very long
            ) {
                result.personalInfo.fullName = line;
                break;
            }
        }
    }

    // 4.5 Use whole text as Summary if narrative (good for "About Me" type text)
    if (text.length > 50 && text.length < 500) {
        result.personalInfo.summary = text.trim();
    }

    // 5. Keyword Extraction for Skills
    // Common tech keywords
    const commonSkills = [
        'Javascript', 'TypeScript', 'Python', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
        'React', 'Vue', 'Angular', 'Next.js', 'Node.js', 'Express', 'NestJS', 'Spring', 'Django', 'Flask',
        'HTML', 'CSS', 'Tailwind', 'Sass', 'Bootstrap',
        'SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'GCP', 'Azure',
        'Git', 'CI/CD', 'Agile', 'Scrum', 'Figma'
    ];

    const foundSkills: Skill[] = [];
    const lowerText = text.toLowerCase();

    commonSkills.forEach(skill => {
        // Escape special regex chars if any (not strictly needed for this list but good practice)
        const regex = new RegExp(`\\b${skill.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
        if (regex.test(text)) {
            foundSkills.push({ id: crypto.randomUUID(), name: skill });
        }
    });

    if (foundSkills.length > 0) {
        result.skills = foundSkills;
    }

    return result;
};
