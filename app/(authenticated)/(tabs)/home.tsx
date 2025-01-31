// import 'react-native-get-random-values';
// import { v4 as uuidv4 } from 'uuid';
import * as Crypto from 'expo-crypto';
import Dropdown from '@/components/Dropdown';
import RoundButton from '@/components/RoundButton';
import Colors from '@/constants/Colors';
import { useBalanceStore } from '@/store/balanceStore';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { defaultStyles } from '@/constants/Styles';
import { Ionicons } from '@expo/vector-icons';
import WidgetList from '@/components/SortableList/WidgetList';

const Page = () => {
  const { balance, runTransaction, transactions, clearTransactions } =
    useBalanceStore();

  const onAddFunds = () => {
    const id = Crypto.randomUUID();

    const amount =
      Math.floor(Math.random() * 1000) * (Math.random() > 0.5 ? 1 : -1);

    runTransaction({
      id,
      amount,
      date: new Date(),
      title: `New Transaction`,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: Colors.background }}>
      <View style={styles.account}>
        <View style={styles.row}>
          <Text style={styles.currency}>$</Text>
          <Text style={styles.balance}>{balance()}</Text>
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
          onPress={clearTransactions}
        />
        <RoundButton
          text='Details'
          icon={'list'}
        />
        <Dropdown />
      </View>

      <Text style={defaultStyles.sectionHeader}>Transactions</Text>
      <View style={styles.transactions}>
        {transactions.length === 0 ?
          <Text style={{ padding: 14, color: Colors.gray }}>
            No transactions
          </Text>
        : transactions.reverse().map((transaction) => (
            <View
              key={transaction.id}
              style={styles.transactionContainer}>
              <View style={styles.circle}>
                <Ionicons
                  name={transaction.amount > 0 ? 'add' : 'remove'}
                  size={24}
                  color={Colors.dark}
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.transactionTitle}>{transaction.title}</Text>
                <Text style={styles.transactionDate}>
                  {new Date(transaction.date).toLocaleDateString()}
                </Text>
              </View>
              <Text>${transaction.amount}</Text>
            </View>
          ))
        }
      </View>
      <Text style={defaultStyles.sectionHeader}>Widgets</Text>
      <WidgetList />
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
  transactionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  transactions: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: '#fff',
    borderRadius: 16,
    gap: 20,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionTitle: {
    fontWeight: '400',
  },
  transactionDate: {
    color: Colors.gray,
    fontSize: 12,
  },
});

export default Page;
