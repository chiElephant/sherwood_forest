import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { Link } from 'expo-router';
import { useVideoPlayer, VideoView } from 'expo-video';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Page = () => {
  const asset = require('@/assets/videos/intro.mp4');
  const player = useVideoPlayer(asset, (player) => {
    player.loop = true;
    player.muted = true;
    player.play();
  });

  return (
    <View style={styles.container}>
      {player && (
        <VideoView
          style={styles.video}
          player={player}
          nativeControls={false}
          contentFit='fill'
        />
      )}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Invest Where the Forest Grows.</Text>
      </View>

      <View style={styles.buttons}>
        <Link
          href={'/login'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: Colors.dark },
          ]}
          asChild>
          <TouchableOpacity>
            <Text style={{ ...styles.btnText, color: 'white' }}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={'/signup'}
          style={[
            defaultStyles.pillButton,
            { flex: 1, backgroundColor: '#fff' },
          ]}
          asChild>
          <TouchableOpacity>
            <Text style={styles.btnText}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  headerContainer: {
    marginTop: 80,
    padding: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: '900',
    textTransform: 'uppercase',
    color: 'white',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  btnText: {
    fontSize: 22,
    fontWeight: '500',
  },
});

export default Page;
