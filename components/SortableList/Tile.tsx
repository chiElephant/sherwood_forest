import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { MARGIN, SIZE } from './Config';
import { useBalanceStore } from '@/store/balanceStore';
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

interface TileProps {
  id: string;
  onLongPress: () => void;
}

const Tile = ({ id }: TileProps) => {
  const { transactions } = useBalanceStore();

  if (id === 'spent') {
    return (
      <View
        style={styles.container}
        pointerEvents='none'>
        <Text style={styles.tileHeader}>Spent this month</Text>
        <Text style={styles.spentAmount}>$1024</Text>
      </View>
    );
  }

  if (id === 'cashback') {
    return (
      <View
        style={[styles.container, styles.cashbackContainer]}
        pointerEvents='none'>
        <View style={[styles.cashbackContainer, { gap: 10 }]}>
          <View style={styles.cashbackContent}>
            <Text style={[styles.tileText, { color: '#fff' }]}>5%</Text>
          </View>
          <Text style={[styles.tileText, { color: Colors.gray }]}>
            Cash back
          </Text>
        </View>
      </View>
    );
  }

  if (id === 'recent') {
    return (
      <View
        style={styles.container}
        pointerEvents='none'>
        <View>
          <Text style={styles.tileHeader}>Recent transaction</Text>

          {transactions.length === 0 && (
            <Text style={[styles.tileText, { color: Colors.gray }]}>
              No transactions
            </Text>
          )}

          {transactions.length > 0 && (
            <>
              <Text
                style={[
                  styles.tileText,
                  { color: Colors.dark, paddingVertical: 10 },
                ]}>
                ${transactions[transactions.length - 1].amount}
              </Text>
              <Text
                style={[styles.tileText, { color: Colors.gray, fontSize: 16 }]}>
                {transactions[transactions.length - 1].title}
              </Text>
            </>
          )}
        </View>
      </View>
    );
  }

  if (id === 'cards') {
    return (
      <View
        style={styles.container}
        pointerEvents='none'>
        <Text style={styles.tileHeader}>Cards</Text>
        <Ionicons
          name='card'
          size={50}
          color={Colors.primaryMuted}
          style={styles.cardsIcon}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: SIZE - 20,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
    padding: 14,
    alignSelf: 'center',
  },
  tileHeader: {
    color: Colors.gray,
    fontWeight: '500',
    fontSize: 16,
  },
  tileText: { fontWeight: 'bold', fontSize: 18 },
  spentAmount: {
    color: Colors.dark,
    fontWeight: 'bold',
    fontSize: 26,
    paddingTop: 10,
  },
  cashbackContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cashbackContent: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsIcon: { marginTop: 20, alignSelf: 'center' },
});

export default Tile;
