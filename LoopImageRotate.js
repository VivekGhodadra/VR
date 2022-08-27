import React from 'react';
import { Animated, Button, Easing, StyleSheet, Text, View } from 'react-native';

const LoopImageRotate = () => {
  const AnimatedValue = React.useRef(new Animated.Value(0)).current;
  const ImageUrl =
    'https://yt3.ggpht.com/ytc/AMLnZu-WCPytY25vnp0GFcCrTIQ0VAgIs5oqKK2zNgDl5A=s900-c-k-c0x00ffffff-no-rj';

  const StartAnimation = () => {
    Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ).start();
  };

  const rotate = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.Container}>
      <Animated.Image
        source={{ uri: ImageUrl }}
        resizeMode={'contain'}
        style={[styles.image, { transform: [{ rotate }] }]}
      />

      <Button title={'Start Animation'} onPress={StartAnimation} />
    </View>
  );
};

export default LoopImageRotate;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 100,
  },
});
