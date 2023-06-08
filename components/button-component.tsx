
import { TouchableHighlight, StyleSheet, Text } from "react-native";



export default function ButtonComponent(props) {
    return (
        <TouchableHighlight
            style={styles.Button} onPress={props.onPress} >
                                  //usar a props para passar o valor
            <Text style={styles.ButtonText}>Clique</Text>
        </TouchableHighlight>
    )
};
const styles = StyleSheet.create({

    Button: {
        backgroundColor: '#fff',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50

    },
    ButtonText: {
        color: '#000',
        textAlign: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }
});


