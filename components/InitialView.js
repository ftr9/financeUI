import { StyleSheet, Text, View } from 'react-native'

const bgColor = "#2A2A2A"
import Header from './Header'
const InitialView = ({ children }) => {
    return (
        <View style={{ flex: 1, paddingTop: 25, backgroundColor: bgColor }} >
            <Header></Header>
            {
                children
            }
        </View>
    )
}

export default InitialView

const styles = StyleSheet.create({})
