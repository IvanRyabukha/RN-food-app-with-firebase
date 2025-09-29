import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

type SocialMediaProps = {
  onGoogleLogin?: () => void;
};

const SocialMedia: React.FC<SocialMediaProps> = ({ onGoogleLogin }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/img/SocialMediaIcons/facebook.png')}
        style={styles.image}
      />
      <TouchableOpacity onPress={onGoogleLogin}>
        <Image
          source={require('../../assets/img/SocialMediaIcons/google.png')}
          style={styles.image}
        />
      </TouchableOpacity>
      <Image
        source={require('../../assets/img/SocialMediaIcons/twitter.png')}
        style={styles.twitterIcon}
      />
    </View>
  );
};

export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  twitterIcon: {
    height: 60,
    width: 60,
    marginTop: 15,
  },
  image: {
    height: 40,
    width: 40,
  },
});
