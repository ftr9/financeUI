import { StyleSheet, Text, View } from 'react-native'
import { HomeO, Credit, Achievement, Profile } from './HomePage'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'
const bgColor = "#2A2A2A"
const Tab = createBottomTabNavigator()
const Home = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                options={{
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: bgColor
                    },
                    headerShown: false,
                    tabBarIcon: props => <Icon color={props.focused ? 'white' : 'gray'} type="ionicon" name="home"></Icon>,
                    tabBarShowLabel: false,
                }}
                name="home"
                component={HomeO}
            ></Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: bgColor,
                    },
                    headerShown: false,
                    tabBarIcon: props => {

                        return <Icon color={props.focused ? 'white' : 'gray'} type="ionicon" name="card"></Icon>
                    },
                    tabBarShowLabel: false,
                }}
                name="credit"
                component={Credit}
            ></Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: bgColor
                    },
                    headerShown: false,
                    tabBarIcon: props => <Icon color={props.focused ? 'white' : 'gray'} type="ionicon" name="bar-chart"></Icon>,
                    tabBarShowLabel: false,
                }}
                name="achievement"
                component={Achievement}
            ></Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarStyle: {
                        borderTopWidth: 0,
                        backgroundColor: bgColor
                    },
                    headerShown: false,
                    tabBarIcon: props => <Icon color={props.focused ? 'white' : 'gray'} type="ionicon" name="person"></Icon>,
                    tabBarShowLabel: false,
                }}
                name="profile"
                component={Profile}
            ></Tab.Screen>
        </Tab.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})
