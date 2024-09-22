import React from 'react';
import { View, Text, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const AppointmentDetails = ({ route }) => {
  const { appointmentId } = route.params;

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      <Text style={tailwind('text-2xl font-bold mb-4')}>Appointment Details</Text>
      <Text style={tailwind('text-gray-700')}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </Text>
      {/* Start Consultation Button */}
      <Button title="Start Consultation" onPress={() => console.log('Consultation Started')} />
    </View>
  );
};

export default AppointmentDetails;
