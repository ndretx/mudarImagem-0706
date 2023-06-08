import {Image, StyleSheet} from 'react-native'


export default function ImageComponent(props) {
    return(
        <Image style={[styles.imagem, { width: 300, height: 300,}]} source={{uri:props.uri}}/>
    )
};
const styles = StyleSheet.create({
    imagem:{
      borderRadius : 30,
      margin: 50
    },
});