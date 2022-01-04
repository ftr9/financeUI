import { StyleSheet, Text, View, Image } from 'react-native'
import { Icon } from 'react-native-elements';
import InitialView from '../components/InitialView'

const datas = [
    {
        id: '123',
        iconName: 'aperture-outline',
        numbers: "2340K",
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
    },
    {
        id: '101',
        iconName: 'pie-chart-outline',
        numbers: "$9745",
        type: 'Revenue',
        bgColor: "#F1DFDE"
    }

]


const InfoCard = ({ iconName, type, numbers, bgColor }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
            <View style={{ height: 60, width: 60, backgroundColor: `${bgColor}`, borderRadius: 100, justifyContent: 'center' }}>
                <Icon name={iconName} type="ionicon" ></Icon>
            </View>
            <View style={{ width: '50%' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{type}</Text>
                <Text style={{ color: 'white', fontSize: 12 }} >Since last week</Text>
            </View>
            <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }} >{numbers}</Text>
        </View>
    );
}

const Particular = () => {
    return (
        <InitialView>
            <View style={{ paddingHorizontal: 40, paddingVertical: 10 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.styleDigits, styles.styleDigitsNumber}>$ 4,73.29</Text>
                    <Text style={styles.styleDigits, styles.styleDigitsNumber} >$ 80.3M</Text>
                    <Text style={styles.styleDigits, styles.styleDigitsNumber} >$ 1.63M</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                    <Text style={styles.styleDigits, styles.styleDigitsType}>Global Avg.</Text>
                    <Text style={styles.styleDigits, styles.styleDigitsType} >Market Cap</Text>
                    <Text style={styles.styleDigits, styles.styleDigitsType} >Volume</Text>
                </View>

                <Image source={{
                    uri: 'https://miro.medium.com/max/1838/1*l-wUmJX2fwhXhepVfKF7tQ.png'
                }}
                    style={{
                        height: 150
                    }}
                    resizeMode='contain'
                ></Image>
            </View>
            <View style={{ borderRadius: 30, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#363636', marginHorizontal: 14 }} >
                <Text style={{ color: 'white', fontSize: 20, marginVertical: 10 }}>Sales Revennue</Text>
                {
                    datas.map(el => <InfoCard key={el.id} iconName={el.iconName} numbers={el.numbers} type={el.type} bgColor={el.bgColor} />)
                }
            </View>
        </InitialView>
    )
}

export default Particular

const styles = StyleSheet.create({
    styleDigits: {
        textAlign: 'center',
        color: 'white'
    },
    styleDigitsNumber: {
        fontSize: 18,
        color: 'white'
    },
    styleDigitsType: {
        color: "#6f6f6f",
        fontSize: 12
    }
})
