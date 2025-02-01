import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useState } from 'react';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';

enum LoginType {
  Phone,
  Email,
  Google,
  Apple,
}

const Login = () => {
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const keyBoardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const router = useRouter();
  const { signIn } = useSignIn();

  const onLogin = async (type: LoginType) => {
    if (type === LoginType.Phone) {
      const fullPhoneNumber = `${countryCode}${phoneNumber}`;
      try {
        const { supportedFirstFactors } = await signIn!.create({
          identifier: fullPhoneNumber,
        });

        const firstPhoneFactors: any = supportedFirstFactors?.find(
          (factor: any) => {
            return factor.strategy === 'phone_code';
          }
        );

        const { phoneNumberId } = firstPhoneFactors;

        await signIn!.prepareFirstFactor({
          strategy: 'phone_code',
          phoneNumberId,
        });

        router.push({
          pathname: '/verify/[phone]',
          params: { phone: fullPhoneNumber, signin: 'true' },
        });
      } catch (error) {
        console.error('error', JSON.stringify(error, null, 2));
        if (isClerkAPIResponseError(error)) {
          if (error.errors[0].code === 'form_identifier_not_found') {
            Alert.alert('Error', error.errors[0].message);
          }
        }
      }
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
            placeholder={'Phone number'}
            placeholderTextColor={Colors.gray}
            inputMode={'numeric'}
            value={phoneNumber}
            textContentType='telephoneNumber'
            onChangeText={setPhoneNumber}
          />
        </View>

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={() => onLogin(LoginType.Phone)}>
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
          onPress={() => onLogin(LoginType.Email)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
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
          onPress={() => onLogin(LoginType.Google)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons
            name='logo-google'
            size={24}
            color={'#000'}
          />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onLogin(LoginType.Apple)}
          style={[
            defaultStyles.pillButton,
            {
              flexDirection: 'row',
              gap: 16,
              marginTop: 20,
              backgroundColor: '#fff',
            },
          ]}>
          <Ionicons
            name='logo-apple'
            size={24}
            color={'#000'}
          />
          <Text style={[defaultStyles.buttonText, { color: '#000' }]}>
            Continue with Apple
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
