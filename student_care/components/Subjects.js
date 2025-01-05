import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';
import { Divider } from 'react-native-paper';
import { subjects, marks, courses } from '../assets/StudentsDb.js';

export default function Subjects({ route }) {
  const { student } = route.params;
  const cid = student.course_id;
  const course = courses.find(c => c.id === cid);
  const courseSubjects = subjects.filter(subject => subject.course_id === cid);
  const studentMarks = marks.filter(mark => mark.student_id === student.id);

  const averageMarks = studentMarks.reduce((acc, mark) => acc + mark.marks, 0) / studentMarks.length;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.userProfile}>
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.studata}>Number of Subjects: {courseSubjects.length}</Text>
            <Text style={styles.studata}>Average Marks: {averageMarks.toFixed(2)}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.subtopic}>Subjects and Marks</Text>
            {courseSubjects.map(subject => (
              <View key={subject.id} style={styles.subjectContainer}>
                <Text style={styles.subjectText}>{subject.name}</Text>
                <Text style={styles.marksText}>
                  Marks: {studentMarks.find(mark => mark.subject_id === subject.id)?.marks || 'N/A'}
                </Text>
                <Divider style={styles.divider} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    backgroundColor: 'white',
    zIndex: 1,
    paddingTop: 130,
  },
  scrollContainer: {
    padding: 16,
    alignItems: 'center',
  },
  profileContainer: {
    paddingTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  userProfile: {
    width: '95%',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 16,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 16,
    backgroundColor: 'lightgray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  studata: {
    fontSize: 18,
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  subtopic: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    alignSelf: 'flex-start',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 16,
  },
  subjectContainer: {
    marginBottom: 10,
  },
  subjectText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  marksText: {
    fontSize: 16,
  },
});