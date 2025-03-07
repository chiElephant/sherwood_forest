import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useEffect, useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import * as Haptics from 'expo-haptics';

const Page = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState(user?.firstName);
  const [code, setCode] = useState<number[]>([]);
  const codeLength = Array(6).fill(0);

  useEffect(() => {
    if (code.length === 6) {
      console.log('code', code);
    }
  }, [code]);

  const onNumberPress = (number: number) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode((prevCode) => [...prevCode, number]);
  };

  const numberBackSpace = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setCode((prevCode) => prevCode.slice(0, -1));
  };

  const onBiometricAuthPress = async () => {};

  return (
    <SafeAreaView>
      <Text style={styles.greeting}>Welcome back, {firstName}!</Text>

      <View style={styles.codeView}>
        {codeLength.map((_, index) => (
          <View
            key={index}
            style={[
              styles.codeEmpty,
              {
                backgroundColor:
                  code[index] ? Colors.primary : Colors.lightGray,
              },
            ]}></View>
        ))}
      </View>

      <View style={styles.numbersView}>
        <View style={styles.numbersRow}>
          {[1, 2, 3].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numbersRow}>
          {[4, 5, 6].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numbersRow}>
          {[7, 8, 9].map((number) => (
            <TouchableOpacity
              key={number}
              onPress={() => onNumberPress(number)}>
              <Text style={styles.number}>{number}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.numbersRow}>
          <TouchableOpacity onPress={() => onBiometricAuthPress()}>
            <Text style={styles.number}></Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onNumberPress(0)}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => numberBackSpace()}>
            <Text style={styles.number}>🔙</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 80,
    alignSelf: 'center',
  },
  codeView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 100,
  },
  codeEmpty: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  numbersView: {
    marginHorizontal: 80,
    gap: 60,
  },
  numbersRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    fontSize: 32,
  },
});

export default Page;
