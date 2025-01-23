import { defaultStyles } from '@/constants/Styles';
import { useSignIn, useSignUp } from '@clerk/clerk-expo';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

const Page = () => {
  const { phone, signin } = useLocalSearchParams<{
    phone: string;
    signin?: string;
  }>();

  const [code, setCode] = useState('');

  const { signIn } = useSignIn();
  const { signUp, setActive } = useSignUp();

  useEffect(() => {
    if (code.length === 6 && signin === 'true') {
      verifySignIn();
    } else {
      verifyCode();
    }
  }, [code]);

  const verifyCode = async () => {
    // logic
  };

  const verifySignIn = async () => {
    // logic
  };

  return (
    <View style={defaultStyles.container}>
      <Text>Phone</Text>
    </View>
  );
};

export default Page;
