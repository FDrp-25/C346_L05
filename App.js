import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import {Picker} from '@react-native-picker/picker';
//Create custom component InputBox for TextInputs with Labels

const MyApp = () => {
  // Declare variables
  //  let pw = '';
    const [pw, setPw] = useState('');
    const [name, setName] =  useState('');
    const [type, setType] =  useState('');
  return (
      <View>
        <Text>User Type:</Text>

        {/* Ex1G: Create a TextInput labeled as "Username".*/}
        <Text>User Name:</Text>
          <TextInput style={{BorderWidth: 1}} onChangeText={(text) => setName(text) } />
            {/* Ex1B: Add a Picker that is labeled "User Type:" with 2 options Admin and Guest. */}
          <Picker onValueChange={(value) => setType(value)}
          style={{backgroundColor: 'grey'}}>
              <Picker.Item label='Admin' value='Admin'/>
              <Picker.Item label='Guest' value='Guest'/>
          </Picker>

          <InputBox label="user Name:" onChangeText={name => setName(name)} />
        {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}


        <TextInput style={{BorderWidth: 1}} onChangeText={(text)=> setPw(text)} />


        {/* Ex1C: Add a Button with the title "LOG IN".*/}
          <Button
              onPress={() => {Alert.alert("Welcome!")}}
              title="LOG IN"
          />
        {/* Ex1D: Display Alert message "Welcome!" when the LOGIN button pressed. */}
          <TouchableOpacity onPress={()=> {
              const correctPassword = '123';
              let mymessage = 'Error! Wrong Password!';
              if (pw == correctPassword) {
                  mymessage = 'Welcome ' + type + ' ' + name;
              }
              ToastAndroid.show(mymessage, ToastAndroid.SHORT);
          }
          }>
              <Text>Logged in!</Text>
          </TouchableOpacity>
        <Text></Text>

        {/* Ex1E: Add TouchableOpacity labeled as "Alternative LOG IN" with Alert message "Hi hi!" */}
        {/* Ex1F: change Alert message to Toast message */}

      </View>
  );
};
