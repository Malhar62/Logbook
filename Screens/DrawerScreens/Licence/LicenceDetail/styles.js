import { ShiftWidth,ShiftHeight } from "../../Functions1";
import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    },
    view: {
        flexDirection: 'row', marginHorizontal: 15, marginTop: 20
    },
    txt: {
        fontSize: 15, color: 'grey'
    },
    icon: {
        right: 0, justifyContent: 'center', position: 'absolute', marginTop: 18
    }
})