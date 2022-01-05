import { StyleSheet} from "react-native";
import Colors from '../../../../../constants/Colors';

const textShadowColor = '#00000040'
const textShadowOffset = {width: 0, height: 0.3}
const textShadowRadius = 3

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    zIndex: 1,
    alignItems: 'flex-start',
    justifyContent: "center",
    position: "absolute",
    left:0,
    bottom: 80,
    borderRadius: 50,
  },
  left: {
    alignItems: "center",
    flexDirection: "row",
    marginRight: 10,
    flex: 1
  },
  right: {
    justifyContent: 'flex-end',
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 30
  },
  pictureContainer: {
    borderRadius: 50,
    marginRight: 10,
    overflow: 'hidden',
    //elevation: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#FFF',
  },
  username: {
    fontSize: 12,
    color: '#FFF',
    fontFamily: 'RedHatDisplay-Bold'
    //textShadowColor: textShadowColor,
    //textShadowOffset:  textShadowOffset,
    //textShadowRadius: textShadowRadius,
  },
  description: {
    fontSize: 12,
    marginRight: 2,
    color: '#FFF',
    fontFamily: 'RedHatDisplay-Medium'
    //textShadowColor: textShadowColor,
    //textShadowOffset: textShadowOffset,
    //textShadowRadius: textShadowRadius,
  },
  details: {
    marginLeft: 10,
    fontSize: 12,
    color: '#FFF',
    fontFamily: 'RedHatDisplay-Medium'
    //textShadowColor: textShadowColor,
    //textShadowOffset: textShadowOffset,
    //textShadowRadius: textShadowRadius,
  },
  time: {
    fontSize: 9,
    color: '#000',
    fontFamily: 'RedHatDisplay-Medium'
    //textShadowColor: textShadowColor,
    //textShadowOffset: textShadowOffset,
    //textShadowRadius: textShadowRadius,
  },
  photoNumberContainer: {
    marginLeft: 30,
    backgroundColor: '#00000030',
    height: 20,
    minWidth: 20,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30
  },
  photoNumber: {
    fontSize: 9,
    color: '#FFF',
  }
});

export default styles;
