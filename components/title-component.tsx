
import {Text, StyleSheet} from "react-native";

export default function TextComponent () {
    return(
        <Text style={styles.titleText}> Titulo  </Text>
        
    )
    
};
const styles = StyleSheet.create({
    
    titleText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      justifyContent: 'space-around',

    }});
   