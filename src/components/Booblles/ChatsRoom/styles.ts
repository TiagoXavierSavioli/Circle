import { StyleSheet} from "react-native";
import Colors from '../../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 16,
    paddingVertical: 15,
  },
  leftContainer: {
    marginRight: 8
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  left: {
  },
  center: {
    flex: 1,
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Bold'
  },
  online: {
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Bold'
  },
  message: {
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Regular',
    flex: 1
  },
  time: {
    fontSize: 10,
    fontFamily: 'RedHatDisplay-Medium',
  }
});

export default styles;
