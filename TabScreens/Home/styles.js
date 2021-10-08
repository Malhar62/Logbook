import { StyleSheet, Dimensions } from "react-native";
import { HEIGHT, WIDTH } from "../../Screens/Functions";

export const styles = StyleSheet.create({
    VIEW: { width: '100%', height: HEIGHT(120), flexDirection: 'row', marginHorizontal: 5, marginTop: 10 },
    IMG: { height: HEIGHT(120), width: WIDTH(120), borderRadius: 10 },
    TOP: { justifyContent: 'space-between', width: Dimensions.get('screen').width - WIDTH(120), marginLeft: 5 },
    txt: {
        backgroundColor: '#a89fde',
        height: HEIGHT(25), borderRadius: 5, justifyContent: 'center', alignItems: 'center'
    },
    IMGBACK: {
        height: HEIGHT(125),
        width: '100%',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        alignItems: 'center'
    }
})