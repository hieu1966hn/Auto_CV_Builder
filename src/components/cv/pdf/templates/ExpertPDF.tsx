import React from 'react';
import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
    page: {
        padding: 40,
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#1A237E',
        marginBottom: 30,
    },
    name: {
        fontSize: 28,
        fontWeight: 'black',
        color: '#1A237E',
        textTransform: 'uppercase',
    },
    role: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    contact: {
        textAlign: 'right',
        fontSize: 9,
        color: '#333',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#1A237E',
        textTransform: 'uppercase',
        marginBottom: 12,
        letterSpacing: 1,
    },
    expItem: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    expDate: {
        width: '25%',
        fontSize: 9,
        color: '#666',
        paddingRight: 10,
    },
    expContent: {
        width: '75%',
        borderLeftWidth: 2,
        borderLeftColor: '#1A237E',
        paddingLeft: 15,
    },
    expCompany: {
        fontSize: 11,
        fontWeight: 'bold',
        color: '#1A237E',
        textTransform: 'uppercase',
    },
    expRole: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 4,
    },
    description: {
        fontSize: 9,
        color: '#333',
        textAlign: 'justify',
        lineHeight: 1.4,
    },
    twoCol: {
        flexDirection: 'row',
        gap: 30,
    },
    col: {
        flex: 1,
    }
});

export const ExpertPDF = ({ data }: { data: ResumeData }) => (
    <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            <View>
                <Text style={styles.name}>{data.personalInfo.fullName || 'YOUR NAME'}</Text>
                <Text style={styles.role}>{data.experience[0]?.role || 'Professional'}</Text>
            </View>
            <View style={styles.contact}>
                {data.personalInfo.phone && <Text>{data.personalInfo.phone}</Text>}
                {data.personalInfo.email && <Text>{data.personalInfo.email}</Text>}
                {data.personalInfo.address && <Text>{data.personalInfo.address}</Text>}
            </View>
        </View>

        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Work Experience</Text>
            {data.experience.map(exp => (
                <View key={exp.id} style={styles.expItem}>
                    <Text style={styles.expDate}>{exp.startDate} - {exp.endDate}</Text>
                    <View style={styles.expContent}>
                        <Text style={styles.expCompany}>{exp.company}</Text>
                        <Text style={styles.expRole}>{exp.role}</Text>
                        <Text style={styles.description}>{exp.description}</Text>
                    </View>
                </View>
            ))}
        </View>

        <View style={styles.twoCol}>
            <View style={styles.col}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map(edu => (
                        <View key={edu.id} style={{ marginBottom: 10 }}>
                            <Text style={styles.expRole}>{edu.school}</Text>
                            <Text style={styles.description}>{edu.degree}</Text>
                            <Text style={styles.expDate}>{edu.startDate} - {edu.endDate}</Text>
                        </View>
                    ))}
                </View>
            </View>
            <View style={styles.col}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Expertise</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 5 }}>
                        {data.skills.map(s => (
                            <Text key={s.id} style={[styles.description, { fontWeight: 'bold' }]}>• {s.name}</Text>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    </Page>
);
