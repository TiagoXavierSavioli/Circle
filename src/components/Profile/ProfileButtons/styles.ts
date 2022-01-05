import { StyleSheet, Dimensions} from "react-native";
import Colors from "../../../constants/Colors";
import useColorScheme from '../../../hooks/useColorScheme';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'transparent'
    },
    Button1Container: {
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        paddingHorizontal: 30,
        width: 156,
        height: 44,
        backgroundColor: Colors.light.icons
    },
    message_button: {
        width: WindowWidth - 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:Colors.light.tint,
        borderRadius: 15
    },
    message_button_pressed: {
        width: WindowWidth - 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 15,
        borderWidth: 2.5,
        borderColor: Colors.light.tint
    },
    message_text: {
        fontSize: 16,
        color: '#FFF',
        fontFamily: 'RedHatDisplay-Bold',
    },
    message_text_pressed: {
        fontSize: 16,
        color: Colors.light.tint,
        fontFamily: 'RedHatDisplay-Bold',
        
    }
})

export default styles