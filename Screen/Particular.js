import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements';
import InitialView from '../components/InitialView'
import { LineChart } from 'react-native-chart-kit';

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
        <ScrollView>

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


                    <LineChart

                        data={{
                            labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
                            datasets: [
                                {
                                    data: [5, 45, 20, 80, 50, 43],
                                    strokeWidth: 2.5,

                                },
                            ],
                        }}
                        width={Dimensions.get('screen').width - 70}
                        height={190}
                        chartConfig={{
                            backgroundColor: 'none',
                            backgroundGradientFromOpacity: 0.05,
                            backgroundGradientToOpacity: 0.05,
                            backgroundGradientFrom: '#D1D1D1',
                            backgroundGradientTo: '#D1D1D1',
                            propsForDots: {
                                stroke: 'white',
                                strokeWidth: 1,
                            },
                            linejoinType: 'round',
                            propsForLabels: {
                                stroke: 'white',
                                fontSize: 10,
                                fontWeight: 'normal'
                            },
                            decimalPlaces: 0,
                            color: (opacity = 0.5) => `rgba(0,0,0,${opacity})`,

                            style: {
                                borderRadius: 10,
                            },
                        }}
                        bezier={true}
                        fromZero={true}
                        segments={5}
                        withVerticalLines={false}
                        style={{
                            marginVertical: 4,
                            borderRadius: 5,
                        }}
                        onDataPointClick={(data) => {
                            alert(data.value);
                        }}
                        xLabelsOffset={-4}
                        yLabelsOffset={25}
                    />
                </View>
                <View style={{ borderRadius: 30, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#363636', marginHorizontal: 14 }} >
                    <Text style={{ color: 'white', fontSize: 20, marginVertical: 10, fontFamily: 'Lato-Light' }}>Sales Revennue</Text>
                    {
                        datas.map(el => <InfoCard key={el.id} iconName={el.iconName} numbers={el.numbers} type={el.type} bgColor={el.bgColor} />)
                    }
                </View>

            </InitialView>

        </ScrollView>

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
