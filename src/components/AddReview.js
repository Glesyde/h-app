import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import tailwind from 'tailwind-rn';

const AddReview = ({ route }) => {
  const [comment, setComment] = useState('');
  const { appointmentId } = route.params;

  return (
    <View style={tailwind('flex-1 bg-white p-4')}>
      <Text style={tailwind('text-2xl font-bold mb-4')}>Add Review</Text>
      
      <TextInput
        style={tailwind('border rounded p-2 mb-4')}
        placeholder="Enter your comment here..."
        value={comment}
        onChangeText={setComment}
      />

      <Button title="Submit Review" onPress={() => console.log('Review Submitted')} />
    </View>
  );
};

export default AddReview;
