import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements';


const Circularpart = ({ iconname, number, type, bgcolor }) => {
    return (
        <View style={{ height: 130, width: 130, backgroundColor: bgcolor, borderRadius: 100, marginTop: 20, justifyContent: 'center' }}>
            <Icon size={25} type="ionicon" name={iconname} ></Icon>
            <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold', marginVertical: 4 }}>{number}</Text>
            <Text style={{ textAlign: 'center' }}>{type}</Text>
        </View>
    )
}

export default Circularpart

const styles = StyleSheet.create({})
