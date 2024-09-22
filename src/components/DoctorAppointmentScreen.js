import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import tailwind from 'tailwind-rn'; // Assuming tailwind-rn is set up

const DoctorAppointmentScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');
  
  const appointments = [
    {
      id: 1,
      doctorName: 'Dr. Olivia Turner, M.D.',
      specialty: 'Dermato-Endocrinology',
      date: 'Sunday, 12 June',
      time: '9:30 AM - 10:00 AM',
      rating: 5,
    },
    {
      id: 2,
      doctorName: 'Dr. Alexander Bennett, Ph.D.',
      specialty: 'Dermato-Genetics',
      date: 'Sunday, 19 June',
      time: '9:30 AM - 10:00 AM',
      rating: 4,
    },
  ];

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      <Text style={tailwind('text-2xl font-bold mb-4')}>Doctor Appointment</Text>

      {/* Tabs: Completed | Upcoming | Canceled */}
      <View style={tailwind('flex-row mb-4')}>
        {['Completed', 'Upcoming', 'Canceled'].map(tab => (
          <TouchableOpacity key={tab} onPress={() => setSelectedTab(tab)}>
            <Text
              style={tailwind(
                `text-lg mx-2 ${selectedTab === tab ? 'font-bold text-blue-500' : 'text-gray-500'}`
              )}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Appointment List */}
      <ScrollView>
        {appointments.map(appointment => (
          <View key={appointment.id} style={tailwind('bg-gray-100 p-4 mb-4 rounded')}>
            <View style={tailwind('flex-row items-center mb-2')}>
              <Image
                source={{ uri: 'https://placekitten.com/50/50' }} // Placeholder for doctor image
                style={tailwind('w-12 h-12 rounded-full mr-4')}
              />
              <View>
                <Text style={tailwind('text-lg font-bold')}>{appointment.doctorName}</Text>
                <Text style={tailwind('text-sm text-gray-500')}>{appointment.specialty}</Text>
              </View>
            </View>
            <Text style={tailwind('text-gray-700')}>{appointment.date}, {appointment.time}</Text>

            {/* Actions: Re-Book | Add Review | Details */}
            <View style={tailwind('flex-row justify-between mt-2')}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Details', { appointmentId: appointment.id })}
              >
                <Text style={tailwind('text-blue-500')}>Details</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('AddReview', { appointmentId: appointment.id })}
              >
                <Text style={tailwind('text-blue-500')}>Add Review</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={tailwind('text-blue-500')}>Re-Book</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DoctorAppointmentScreen;
