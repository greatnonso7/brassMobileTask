import { TouchableOpacity, StyleSheet, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import HeaderBar from '../shared/header-bar';
import { hp, wp } from '../shared/responsive-dimension';
import colors from '../styles/color';

export default function ModalScreen({ navigation, route }: any) {

  const banks = useSelector((state: RootState) => state.FinTechServices.banks);

  const goBack = async (name: string, code: string) => {
    const { params } = route;

    if (params)
      params.handler({
        bankName: name,
        bankCode: code
      });
    navigation.goBack();
  };

  console.log(banks);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderBar headerTitle='Select Bank' isModal hasRightIcon onPressRightIcon={() => navigation.goBack()} />

      <View style={styles.bodyContainer}>
        <FlatList
          scrollEnabled
          data={banks.sort((a: any, b: any) => a.name.localeCompare(b.name))}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: hp(30) }}
          renderItem={({ item: { name, code } }) => {
            return (
              <TouchableOpacity
                key={name + code}
                onPress={() => goBack(name, code)}
                style={styles.itemContainer}>
                <Text style={styles.itemName}>{name}</Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyContainer: {
    marginHorizontal: wp(20),
    marginTop: hp(30),
  },
  itemContainer: {
    marginBottom: hp(10),
    paddingTop: hp(10),
    paddingBottom: hp(10),
    borderBottomWidth: hp(0.5),
  },
  itemName: {
    fontFamily: 'Recoleta-Regular',
    fontSize: hp(18)
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
