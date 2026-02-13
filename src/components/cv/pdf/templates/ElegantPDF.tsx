/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
import { ResumeData } from '@/types/resume';

const styles = StyleSheet.create({
    page: {
        padding: 0,
        backgroundColor: '#fff',
        fontFamily: 'Roboto',
    },
    header: {
        flexDirection: 'row',
        padding: 30,
        backgroundColor: '#fff',
        borderBottomWidth: 4,
        borderBottomColor: '#A41C1F',
    },
    photoContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginRight: 20,
    },
    photo: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    headerContent: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 24,
        fontWeight: 'extrabold',
        color: '#000',
        marginBottom: 4,
    },
    contactRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 8,
        gap: 10,
    },
    contactItem: {
        fontSize: 9,
        color: '#333',
    },
    main: {
        padding: 30,
        flexDirection: 'row',
        gap: 30,
    },
    leftCol: {
        width: '35%',
    },
    rightCol: {
        width: '65%',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#A41C1F',
        borderBottomWidth: 1,
        borderBottomColor: '#A41C1F',
        paddingBottom: 4,
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    contentItem: {
        marginBottom: 10,
    },
    itemTitle: {
        fontSize: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    itemSubtitle: {
        fontSize: 9,
        color: '#444',
        marginBottom: 2,
    },
    itemDate: {
        fontSize: 8,
        color: '#666',
        fontStyle: 'italic',
        marginBottom: 4,
    },
    description: {
        fontSize: 9,
        color: '#333',
        textAlign: 'justify',
    },
    skillTag: {
        backgroundColor: '#f3f4f6',
        paddingHorizontal: 8,
        paddingVertical: 3,
        borderRadius: 4,
        marginRight: 5,
        marginBottom: 5,
    },
    skillText: {
        fontSize: 8,
        color: '#1f2937',
    }
});

export const ElegantPDF = ({ data }: { data: ResumeData }) => (
    <Page size="A4" style={styles.page}>
        <View style={styles.header}>
            {data.personalInfo.photo && (
                <View style={styles.photoContainer}>
                    <Image src={data.personalInfo.photo} style={styles.photo} />
                </View>
            )}
            <View style={styles.headerContent}>
                <Text style={styles.name}>{data.personalInfo.fullName || 'YOUR NAME'}</Text>
                <View style={styles.contactRow}>
                    {data.personalInfo.email && <Text style={styles.contactItem}>Email: {data.personalInfo.email}</Text>}
                    {data.personalInfo.phone && <Text style={styles.contactItem}>Tel: {data.personalInfo.phone}</Text>}
                    {data.personalInfo.address && <Text style={styles.contactItem}>Addr: {data.personalInfo.address}</Text>}
                </View>
            </View>
        </View>

        <View style={styles.main}>
            <View style={styles.leftCol}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Skills</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {data.skills.map(s => (
                            <View key={s.id} style={styles.skillTag}>
                                <Text style={styles.skillText}>{s.name} {s.level ? `(${s.level})` : ''}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {data.languages.length > 0 && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Languages</Text>
                        {data.languages.map(l => (
                            <Text key={l.id} style={styles.description}>{l.language} - {l.proficiency}</Text>
                        ))}
                    </View>
                )}
            </View>

            <View style={styles.rightCol}>
                {data.personalInfo.summary && (
                    <View style={styles.section}>
                        <Text style={styles.sectionTitle}>Summary</Text>
                        <Text style={styles.description}>{data.personalInfo.summary}</Text>
                    </View>
                )}

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Experience</Text>
                    {data.experience.map(exp => (
                        <View key={exp.id} style={styles.contentItem}>
                            <Text style={styles.itemTitle}>{exp.role}</Text>
                            <Text style={styles.itemSubtitle}>{exp.company}</Text>
                            <Text style={styles.itemDate}>{exp.startDate} - {exp.endDate}</Text>
                            <Text style={styles.description}>{exp.description}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Education</Text>
                    {data.education.map(edu => (
                        <View key={edu.id} style={styles.contentItem}>
                            <Text style={styles.itemTitle}>{edu.school}</Text>
                            <Text style={styles.itemSubtitle}>{edu.degree}</Text>
                            <Text style={styles.itemDate}>{edu.startDate} - {edu.endDate}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    </Page>
);
