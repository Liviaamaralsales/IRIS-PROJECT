import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image, Platform } from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function MarcarVisita() {
  const [typeAddress, setTypeAddress] = useState('Home');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showTimePicker, setShowTimePicker] = useState(false);

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) setDate(selectedDate);
  };

  const onTimeChange = (event, selectedTime) => {
    setShowTimePicker(false);
    if (selectedTime) setTime(selectedTime);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
        
        <View style={styles.yellowHeader}>
          <TouchableOpacity style={styles.backButtonAbsolute}>
            <Ionicons name="arrow-back" size={32} color="black" />
          </TouchableOpacity>
          
          <View style={styles.headerContent}>
            <Image 
              source={require('../calendario.png')} 
              style={styles.calendarImage}
              resizeMode="contain"
            />
            <Text style={styles.headerText}>Schedule your{"\n"}visit here!</Text>
          </View>
        </View>

        <View style={styles.formContainer}>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please enter type address</Text>
            <View style={styles.pickerWrapper}>
              <Picker
                selectedValue={typeAddress}
                onValueChange={(itemValue) => setTypeAddress(itemValue)}
                style={styles.picker}
              >
                <Picker.Item label="Home" value="Home" />
                <Picker.Item label="Company" value="Company" />
                <Picker.Item label="School" value="School" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please enter your address</Text>
            <View style={styles.inputWrapper}>
              <TextInput style={styles.input} placeholder="Enter address..." />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please enter the date</Text>
            <TouchableOpacity style={styles.inputWrapper} onPress={() => setShowDatePicker(true)}>
              <Text style={styles.inputText}>
                {date.toLocaleDateString('pt-BR')}
              </Text>
              <MaterialCommunityIcons name="calendar-month-outline" size={24} color="#555" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please enter the time</Text>
            <TouchableOpacity style={styles.inputWrapper} onPress={() => setShowTimePicker(true)}>
              <Text style={styles.inputText}>
                {time.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
              </Text>
              <Feather name="clock" size={24} color="#555" />
            </TouchableOpacity>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Please state the reason for your visit</Text>
            <View style={[styles.inputWrapper, styles.textAreaWrapper]}>
              <TextInput 
                style={styles.textArea} 
                placeholder="Max. 1000 characters..." 
                multiline={true}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {showDatePicker && (
          <DateTimePicker value={date} mode="date" display="default" onChange={onDateChange} />
        )}
        {showTimePicker && (
          <DateTimePicker value={time} mode="time" display="default" is24Hour={true} onChange={onTimeChange} />
        )}

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  yellowHeader: {
    backgroundColor: '#FFDE59', 
    height: 280, 
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 40,
  },
  backButtonAbsolute: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  calendarImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FF751F', 
    textAlign: 'center',
    lineHeight: 30,
  },
  formContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    marginTop: -50, 
    paddingHorizontal: 25,
    paddingTop: 40, 
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    color: '#333',
    marginBottom: 8,
    fontWeight: '600',
  },
  pickerWrapper: {
    borderWidth: 1.2,
    borderColor: '#444',
    borderRadius: 12,
    height: 55,
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1.2,
    borderColor: '#444',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 55,
  },
  inputText: {
    fontSize: 16,
    color: '#000',
  },
  textAreaWrapper: {
    height: 110,
    alignItems: 'flex-start',
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  textArea: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#FFDE59',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
  },
  submitText: {
    color: '#FF751F', 
    fontWeight: 'bold',
    fontSize: 18,
  }
});