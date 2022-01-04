import { StyleSheet, Text, View, TextInput } from 'react-native'
import InitialView from '../../components/InitialView'
import { Icon } from 'react-native-elements'
import Circularpart from '../../components/Circularpart'

const datas = [
    {
        id: '123',
        iconName: 'aperture-outline',
        numbers: "230K",
        type: 'Sales',
        bgColor: "#C0DEDD"
    },
    {
        id: '456',
        iconName: 'person-circle-outline',
        numbers: "8.549K",
        type: 'Customers',
        bgColor: "#E6DFF1"
    },
    {
        id: '789',
        iconName: 'browsers-outline',
        numbers: "1.423K",
        type: 'Products',
        bgColor: "#F2EEE9"
    }
    , {
        id: '101',
        iconName: 'pie-chart-outline',
        numbers: "$9745",
        type: 'Revenue',
        bgColor: "#F1DFDE"
    }
]

const HomeO = () => {
    return (
        <InitialView>
            <View style={{ paddingHorizontal: 20 }}>

                <View style={{ paddingTop: 45, paddingBottom: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ color: 'white' }}>
                        <Text style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }} >Hello Rahul</Text>
                        <Text style={{ fontSize: 20, color: 'white' }}>Welcome Back!</Text>
                    </View>
                    <View style={{ borderRadius: 8, borderColor: 'gray', borderWidth: 1, padding: 10 }}>
                        <Icon color={'white'} size={25} name="settings"></Icon>
                    </View>
                </View>
                <TextInput
                    placeholderTextColor={'white'}
                    textAlign='center'
                    placeholder='Search'
                    style={{
                        backgroundColor: '#3c3c3c',
                        borderColor: 'white',
                        paddingVertical: 8,
                        paddingHorizontal: 5,
                        borderRadius: 12,
                    }} ></TextInput>


                <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                    {
                        datas.map(el => <Circularpart key={el.id} iconname={el.iconName} number={el.numbers} type={el.type} bgcolor={el.bgColor} />)
                    }

                </View>


            </View>

        </InitialView>

    )
}

export default HomeO

const styles = StyleSheet.create({})
