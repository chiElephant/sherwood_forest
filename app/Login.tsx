import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

enum SignInType {
  Phone,
  Email,
  Google,
  Apple,
}

const Login = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [mobileNumber, setMobileNumber] = useState('');

  const keyBoardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;
  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      console.log('Hello, world');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyBoardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Welcome Back!</Text>
        <Text style={defaultStyles.descriptionText}>
          Enter the phone number associated with your account.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            inputMode={'numeric'}
            value={countryCode}
            onChangeText={(text) => setCountryCode(text)}
          />
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder={'Mobile number'}
            placeholderTextColor={Colors.gray}
            inputMode={'numeric'}
            value={mobileNumber}
            textContentType='telephoneNumber'
            onChangeText={setMobileNumber}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            mobileNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onSignIn(SignInType.Phone)}>
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
          <Text style={{ color: Colors.gray, fontSize: 20 }}>or</Text>
          <View
            style={{
              flex: 1,
              height: StyleSheet.hairlineWidth,
              backgroundColor: Colors.gray,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Email)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 10,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons
            name='mail'
            size={24}
            color={'#000'}
          />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Google)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 10,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons
            name='logo-google'
            size={24}
            color={'#000'}
          />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onSignIn(SignInType.Apple)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 10,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons
            name='logo-apple'
            size={24}
            color={'#000'}
          />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with email
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: 'row',
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 20,
    borderRadius: 16,
    fontSize: 20,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default Login;
