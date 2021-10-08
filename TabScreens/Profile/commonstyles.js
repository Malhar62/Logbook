import { StyleSheet, Dimensions } from 'react-native'
import { HEIGHT, WIDTH } from '../../Screens/Functions'


export const commonstyles = StyleSheet.create({
    TOP: { width: '100%', height: HEIGHT(120), flexDirection: 'row', marginHorizontal: 5, marginTop: 10 },
    MED: { justifyContent: 'space-between', width: Dimensions.get('screen').width - WIDTH(120), marginLeft: 5 },
    DT: { width: WIDTH(130), height: HEIGHT(25), justifyContent: 'center', alignItems: 'center' }
})