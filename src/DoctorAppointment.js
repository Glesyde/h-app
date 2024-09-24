import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import styles from '../styles/style_doctorappointment'
import {  Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import CompletedCard from '../components/CompletedCard'

const DoctorAppointment = () => {
  return (
    <SafeAreaView 
        style={styles.safeArea}
    >
      <View 
        style={styles.header}
      >

        <View
            style={styles.backButtonContainer}
        >
            <Ionicons 
                name="chevron-back-outline" 
                size={29} 
                color="black" 
            />
        </View>

        <Text 
            style = {styles.headerText}
        >
            Doctor Appointment
        </Text>

      </View>

      <View 
        style= {styles.btnGroup}
      >
        <TouchableOpacity
            style = {styles.toggleBtn}
        >
            <Text
                style = {styles.toggleBtnText}
            >
                Completed
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.toggleBtn}
        >
            <Text
                style = {styles.toggleBtnText}
            >
                Upcoming
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
            style = {styles.toggleBtn}
        >
            <Text
                style = {styles.toggleBtnText}
            >
                Cancelled
            </Text>
        </TouchableOpacity>

      </View>

      <View
        style={styles.allCard}
      >
        <CompletedCard />
      </View>
    </SafeAreaView>
  )
}

export default DoctorAppointment