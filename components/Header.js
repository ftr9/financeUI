import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';

const Header = () => {

    const navigation = useNavigation();
    const onProfileClick = () => {
        const parentNav = navigation.getParent()
        if (!parentNav) {
            navigation.goBack();
            return;
        }
        parentNav.navigate("Particular");
    }

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100, paddingHorizontal: 20 }}>
            <TouchableOpacity>
                <Icon color={'white'} size={40} style={{ height: 40, width: 40 }} type="ionicon" name="play"></Icon>
            </TouchableOpacity>
            <TouchableOpacity onPress={onProfileClick}>
                <View style={{
                    height: 50,
                    width: 50,
                    borderWidth: 0.5,
                    borderColor: 'white',
                    borderRadius: 8,
                    padding: 5,
                    overflow: 'hidden'
                }}>
                    <Image style={{ height: '100%', width: '100%' }} resizeMode='contain' source={{
                        uri: 'https://images.unsplash.com/photo-1586083702768-190ae093d34d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                    }} ></Image>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({})
