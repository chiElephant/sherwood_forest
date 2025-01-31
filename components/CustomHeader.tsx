import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { BlurView } from 'expo-blur';
import Colors from '@/constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = () => {
  const { top } = useSafeAreaInsets();

  return (
    <BlurView
      intensity={80}
      tint={'extraLight'}
      style={{ paddingTop: top }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.roundBtn}>
          <Text style={styles.iconText}>AM</Text>
        </TouchableOpacity>

        <View style={styles.searchSection}>
          <Ionicons
            style={styles.searchIcon}
            name='search'
            size={20}
            color={Colors.dark}
          />
          <TextInput
            style={styles.searchInput}
            placeholder='Search'
            placeholderTextColor={Colors.dark}
          />
        </View>

        <View style={styles.circle}>
          <Ionicons
            name='stats-chart'
            size={20}
            color={Colors.dark}
          />
        </View>
        <View style={styles.circle}>
          <Ionicons
            name='card'
            size={20}
            color={Colors.dark}
          />
        </View>
      </View>
    </BlurView>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    height: 60,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,
  },
  roundBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.lightGray,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
    color: Colors.dark,
  },
  searchIcon: {
    padding: 10,
  },
  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
