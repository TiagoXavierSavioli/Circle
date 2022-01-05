import { StyleSheet} from "react-native";
import Colors from '../../../constants/Colors';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  counterContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 1,
    backgroundColor: '#00000050',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  counter: {
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 12,
    color:'#FFF',
    marginRight: 5
  },
  image: {
    width: 20,
    height: 20,
    tintColor: '#FFF'
  }
});

export default styles;
