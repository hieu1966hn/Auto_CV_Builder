import React from 'react';
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
    },
    sidebar: {
        width: '35%',
        backgroundColor: '#2E7D32',
        color: '#fff',
        padding: 30,
        height: '100%',
    },
    content: {
        width: '65%',
        padding: 30,
    },
    photoContainer: {
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.5)',
        marginBottom: 20,
        overflow: 'hidden',
        alignSelf: 'center',
    },
    photo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    sidebarSection: {
        marginBottom: 25,
    },
    sidebarTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(255,255,255,0.3)',
        paddingBottom: 4,
        marginBottom: 10,
    },
    sidebarText: {
        fontSize: 9,
        marginBottom: 8,
        color: '#fff',
    },
    name: {
        fontSize: 32,
        fontWeight: 'black',
        color: '#2E7D32',
        marginBottom: 5,
    },
    role: {
        fontSize: 14,
        color: '#666',
        marginBottom: 20,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    mainSection: {
        marginBottom: 20,
    },
    mainSectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#2E7D32',
        borderBottomWidth: 2,
        borderBottomColor: '#2E7D32',
        paddingBottom: 4,
        marginBottom: 12,
        textTransform: 'uppercase',
    },
    itemTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#000',
    },
    itemSubtitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#2E7D32',
        textTransform: 'uppercase',
        marginVertical: 2,
    },
    itemDate: {
        fontSize: 8,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 5,
    },
    description: {
        fontSize: 9,
        color: '#333',
        textAlign: 'justify',
        lineHeight: 1.4,
    }
});

export const ImpressivePDF = ({ data }: { data: ResumeData }) => (
    <Page size="A4" style={styles.page}>
        <View style={styles.sidebar}>
            {data.personalInfo.photo && (
                <View style={styles.photoContainer}>
                    <Image src={data.personalInfo.photo} style={styles.photo} />
                </View>
            )}
            <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>Contact</Text>
                {data.personalInfo.email && <Text style={styles.sidebarText}>✉ {data.personalInfo.email}</Text>}
                {data.personalInfo.phone && <Text style={styles.sidebarText}>☎ {data.personalInfo.phone}</Text>}
                {data.personalInfo.address && <Text style={styles.sidebarText}>📍 {data.personalInfo.address}</Text>}
            </View>

            <View style={styles.sidebarSection}>
                <Text style={styles.sidebarTitle}>Skills</Text>
                {data.skills.map(s => (
                    <Text key={s.id} style={styles.sidebarText}>• {s.name}</Text>
                ))}
            </View>
        </View>

        <View style={styles.content}>
            <Text style={styles.name}>{data.personalInfo.fullName || 'YOUR NAME'}</Text>
            <Text style={styles.role}>{data.experience[0]?.role || 'Candidate'}</Text>

            <View style={styles.mainSection}>
                <Text style={styles.mainSectionTitle}>About Me</Text>
                <Text style={styles.description}>{data.personalInfo.summary}</Text>
            </View>

            <View style={styles.mainSection}>
                <Text style={styles.mainSectionTitle}>Experience</Text>
                {data.experience.map(exp => (
                    <View key={exp.id} style={{ marginBottom: 15 }}>
                        <Text style={styles.itemTitle}>{exp.role}</Text>
                        <Text style={styles.itemSubtitle}>{exp.company}</Text>
                        <Text style={styles.itemDate}>{exp.startDate} - {exp.endDate}</Text>
                        <Text style={styles.description}>{exp.description}</Text>
                    </View>
                ))}
            </View>

            <View style={styles.mainSection}>
                <Text style={styles.mainSectionTitle}>Education</Text>
                {data.education.map(edu => (
                    <View key={edu.id} style={{ marginBottom: 10 }}>
                        <Text style={styles.itemTitle}>{edu.school}</Text>
                        <Text style={{ fontSize: 10, color: '#333' }}>{edu.degree}</Text>
                        <Text style={styles.itemDate}>{edu.startDate} - {edu.endDate}</Text>
                    </View>
                ))}
            </View>
        </View>
    </Page>
);
