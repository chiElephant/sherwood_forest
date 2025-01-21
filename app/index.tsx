import { useVideoPlayer, VideoView } from 'expo-video';
import { View, Text, StyleSheet } from 'react-native';

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
        <Text style={styles.header}>Welcome to Sherwood!</Text>
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
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white',
  },
});

export default Page;
