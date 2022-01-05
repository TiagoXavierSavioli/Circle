import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent'
  },
  image: {
    width: windowWidth - 10,
    height: 600,
    borderRadius: 30,
  },
  userHeaderContainer: {
    zIndex: 2,
    top: 30,
    left: 40,
    position: "absolute",
    flexDirection: "row",
    borderRadius: 30,
    alignItems: "center",
  },
  username: {
    fontSize: 14,
    fontWeight: "bold",
    color: '#FFFFFF',
    marginRight: 10
  },
});

export default styles;
