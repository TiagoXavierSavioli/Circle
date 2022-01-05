import { StyleSheet, Dimensions} from "react-native";
import Colors from '../../../../../constants/Colors';

const WindowWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
  flex: 1,
  alignItems: "center",
  },
  imageContainer: {
    flex:1,
  },
  slide: {
    zIndex: 2,
    position: "absolute",
    marginTop: 275,
    height: 25,
    width: WindowWidth - 10,
    flexDirection: "row",
  },
  imageButtonContainer: {
    position: 'absolute',
    right: 15,
    zIndex: 1,
    top: 15,
    padding: 8,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  username: {
    fontWeight: "bold",
    fontSize: 12,
    marginLeft: 5,
    color: '#FFF',
    //textShadowColor: textShadowColor,
    //textShadowOffset:  textShadowOffset,
    //textShadowRadius: textShadowRadius,
  },
});

export default styles;
