import { CVTemplate, CVTemplateId } from '@/types/resume';

export const CV_TEMPLATES: CVTemplate[] = [
    {
        id: 'elegant',
        name: 'Thanh lịch',
        description: 'Thiết kế cổ điển, sang trọng với màu đỏ',
        primaryColor: '#A41C1F',
    },
    {
        id: 'impressive',
        name: 'Ấn tượng',
        description: 'Layout 2 cột hiện đại với sidebar xanh lá',
        primaryColor: '#2E7D32',
    },
    {
        id: 'expert',
        name: 'Chuyên gia',
        description: 'Tập trung nội dung, chuyên nghiệp với tông navy',
        primaryColor: '#1A237E',
    },
];

export const getTemplateById = (id: CVTemplateId): CVTemplate | undefined => {
    return CV_TEMPLATES.find(t => t.id === id);
};
