import Icon from 'react-native-vector-icons/FontAwesome6';
import {StyleSheet, Text, View} from 'react-native';

interface HeaderProps {
  currentScreenName: string;
}

export default function Header({currentScreenName}: HeaderProps) {
  if (currentScreenName === 'Welcome') return null;
  return (
    <View>
      <View style={styles.headerContainer}>
        <Icon name="lock" size={28} color={'#F2D3CE'} />
        <Text style={styles.title}>KeyStone</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#FFF',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 25,
    gap: 12,
    boxShadow: '0px 3px 10px -1px rgba(3,3,0,0.12)',
  },
  title: {
    fontSize: 30,
    fontWeight: '400',
    color: '#030303',
  },
});
