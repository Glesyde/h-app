import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const CancelAppointment = () => {
  const [reason, setReason] = useState('');

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      <Text style={tailwind('text-2xl font-bold mb-4')}>Cancel Appointment</Text>
      <Text style={tailwind('text-lg mb-2')}>Reason for Cancellation:</Text>

      <TextInput
        style={tailwind('border rounded p-2 mb-4')}
        placeholder="Enter your reason here..."
        value={reason}
        onChangeText={setReason}
      />

      <Button title="Cancel Appointment" onPress={() => console.log('Appointment Canceled')} />
    </View>
  );
};

export default CancelAppointment;
