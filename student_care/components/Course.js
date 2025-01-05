import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Divider } from 'react-native-paper';
import Header from './Header';
import { courses } from '../assets/StudentsDb';

export default function Course({ route }) {
  const { student } = route.params;
  const id = student.course_id;
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
      <View style={styles.container}>
        <Header />
        <Text style={styles.title}>Course not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.userProfile}>
            <Text style={styles.title}>{course.name}</Text>
            <Text style={styles.studata}>Code: {course.course_code}</Text>
            <Text style={styles.studata}>Department: {course.department}</Text>
            <Text style={styles.studata}>Duration: {course.duration}</Text>
            <Text style={styles.studata}>Description: {course.description}</Text>
            <Divider style={styles.divider} />
          </View>
        </View>
      </ScrollView>
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
    paddingTop: 300,
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