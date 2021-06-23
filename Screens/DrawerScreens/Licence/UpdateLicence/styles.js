import { ShiftWidth,ShiftHeight,buttonWidth } from "../../Functions1";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    main: {
        backgroundColor: '#fff', width: ShiftWidth(), height: ShiftHeight(), borderRadius: 10, borderWidth: 0, alignSelf: 'center', marginTop: 15
    }, txt: {
        color: 'grey', fontSize: 15
    },
    txtip:
        { borderBottomWidth: 1, borderBottomColor: 'grey', height: 40, fontSize: 15 },
    view:
        { marginHorizontal: 20, marginTop: 20 },
    icon: {
        position: 'absolute', right: 0
    },
    button: {
        position: 'absolute', bottom: 20, width: buttonWidth(), height: 40, justifyContent: 'center', alignSelf: 'center', borderRadius: 10, backgroundColor: '#524ae8'
    },
    txt2: {
        color: '#fff', alignSelf: 'center', fontSize: 18
    }

})