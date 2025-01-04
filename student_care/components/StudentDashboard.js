import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import Header from './Header.js';
import Footer from './Footer.js';
import { Divider } from 'react-native-paper';
import Tabs from './Tabs.js';

export default function StudentDashboard({ route }) {
  const { student } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.userProfile}>
            <Image style={styles.profileImage} source={student.profile_pic} />
            <Text style={styles.title}>{student.name}</Text>
            <Text style={styles.studata}>
              Age: {student.age} | Gender: {student.gender}
            </Text>
            <Divider style={styles.divider} />
            <Text style={styles.subtopic}>Contact Information</Text>
            <Text style={styles.studata}>Email: {student.email}</Text>
            <Text style={styles.studata}>Phone: {student.phone}</Text>
            <Text style={styles.studata}>Address: {student.address}</Text>
            <Divider style={styles.divider} />
            <Text style={styles.subtopic}>Biological Information</Text>
            <Text style={styles.studata}>Blood Group: {student.blood_group}</Text>
          </View>
        </View>
      </ScrollView>
      <Footer/>
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
});
