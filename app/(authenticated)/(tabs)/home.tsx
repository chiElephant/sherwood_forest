import Dropdown from '@/components/Dropdown';
import RoundButton from '@/components/RoundButton';
import Colors from '@/constants/Colors';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const Page = () => {
  const balance = 149831;

  const onAddFunds = () => {};

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>
      </View>

      <View style={styles.actionRow}>
        <RoundButton
          text='Add Funds'
          icon={'add'}
          onPress={onAddFunds}
        />
        <RoundButton
          text='Exchange'
          icon={'refresh'}
        />
        <RoundButton
          text='Details'
          icon={'list'}
        />
        <Dropdown />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  account: {
    margin: 80,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  balance: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  currency: {
    fontSize: 20,
    fontWeight: '500',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default Page;
