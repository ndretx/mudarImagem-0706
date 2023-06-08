import { StyleSheet, View } from 'react-native';
import TitleComponent from './components/title-component';
import { useState } from 'react';
import ImageComponent from './components/image-component';
import ButtonComponent from './components/button-component';

export default function App() {
  const [index, setIndex] = useState(0);
  const imageList = [
    'https://i.pinimg.com/originals/f6/0e/1a/f60e1aaeb3f58058654d894cb7148e74.jpg',
    'https://cdn.wallpaperhub.app/cloudcache/b/d/7/6/4/b/bd764bb25d49a05105060185774ba14cd2c846f7.jpg',
    'https://thumbs.dreamstime.com/b/paisagens-de-yosemite-46208063.jpg'
  ]
  function changeImage() {
    if (index === imageList.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <View style={styles.container}>
      <TitleComponent />
      <ImageComponent uri={imageList[index]} />
      <ButtonComponent onPress={() =>  changeImage ()}/>
    </View>

  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f87706',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
