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
import { Link, useRouter } from 'expo-router';
import { useSignUp } from '@clerk/clerk-expo';

const Signup = () => {
  const keyBoardVerticalOffset = Platform.OS === 'ios' ? 80 : 0;

  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');

  const router = useRouter();
  const { signUp } = useSignUp();

  const onSignup = async () => {
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;

    try {
      await signUp!.create({
        phoneNumber: fullPhoneNumber,
      });

      signUp!.preparePhoneNumberVerification();

      router.push({
        pathname: '/verify/[phone]',
        params: { phone: fullPhoneNumber },
      });
    } catch (error) {
      console.error('Error signing up: ', error);
      router.push('/Login');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior='padding'
      keyboardVerticalOffset={keyBoardVerticalOffset}>
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Let's get started!</Text>
        <Text style={defaultStyles.descriptionText}>
          Your digits, please. We promise: no calls, just a confirmation code.
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
            value={phoneNumber}
            textContentType='telephoneNumber'
            onChangeText={setPhoneNumber}
          />
        </View>

        <Link
          href={'/Login'}
          replace
          asChild>
          <TouchableOpacity>
            <Text style={defaultStyles.textLink}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </Link>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            phoneNumber !== '' ? styles.enabled : styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Sign up</Text>
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

export default Signup;
