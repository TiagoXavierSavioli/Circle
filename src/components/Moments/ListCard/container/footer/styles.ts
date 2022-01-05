import { StyleSheet, Dimensions} from "react-native";
import Colors from '../../../../../constants/Colors';
import useColorScheme from '../../../../../hooks/useColorScheme';

const WindowWidth = Dimensions.get('window').width

const textShadowColor = '#000000'
const textShadowOffset = {width: 0, height: 0.2}
const textShadowRadius = 3

const styles = StyleSheet.create({
  container: {
    zIndex: 2,
    bottom: 30,
    width: WindowWidth - 20,
    position: "absolute",
    left: 0,
  },
  bottom: {
    paddingHorizontal: 20,
    flexDirection: "row"
  },
  top: {
    marginBottom: 15
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: 'flex-start',
    justifyContent: "center",
  },
  likeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    backgroundColor: '#FFF',
    height: 32,
    paddingHorizontal: 15,
    borderRadius: 30
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    paddingHorizontal: 15,
    borderRadius: 30
  },
  menuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 32,
    marginRight: -10,
    borderRadius: 30
  },
  rightContainer: {
    alignItems: "center",
    flex: 1,
  },
  left: {
    alignItems: "center",
  },
  right: {
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  icon2: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  iconLike: {
    width: 20,
    height: 20,
    tintColor: '#FF004D',
  },
  likesCount: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'RedHatDisplay-Bold'
  }
});

export default styles;
