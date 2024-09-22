import React from 'react';
import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';


const colors = ['Stay Fit and Live Long', 'Healthy Application', 'Contact Our Doctor', 'Check your Pateint Health'];

const PatientBlog = () => (
  <View style={styles.container}>
    <SwiperFlatList
      autoplay
      autoplayDelay={2}
      autoplayLoop
      index={2}
      showPagination
      data={colors}
      renderItem={({ item }) => (
        <View style={[styles.child, { backgroundColor: item }]}>
          <Text style={styles.text}>{item}</Text>
        </View>
      )}
    />
  </View>
);

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', height: 200 },
  text: { fontSize: width * 0.1, textAlign: 'center', margin: "auto", marginTop:0  },
});



export default PatientBlog;