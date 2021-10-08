import { newsStore } from '../../MST/newsStore'
import { DataList } from '../Category/DataList'
import { colorList } from './Colors'
import { store } from '../../MST/store'
function Finder(text) {
    var count = 0;
    newsStore.visited.forEach(item => {
        if (item.type.toLowerCase() == text.toLowerCase()) {
            count++;
        }
    })
    return count;
}
const FONT_COLOR = store.theme ? '#fff' : '#3d3d3d'

export const pieData = [
    {
        name: DataList[0].name,
        read: Finder(DataList[0].name),
        color: 'red',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    },
    {
        name: DataList[1].name,
        read: Finder(DataList[1].name),
        color: 'pink',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    },
    {
        name: DataList[2].name,
        read: Finder(DataList[2].name),
        color: 'yellow',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    },
    {
        name: DataList[3].name,
        read: Finder(DataList[3].name),
        color: 'blue',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    },
    {
        name: DataList[4].name,
        read: Finder(DataList[4].name),
        color: 'maroon',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    },
    {
        name: DataList[5].name,
        read: Finder(DataList[5].name),
        color: 'green',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    }, {
        name: DataList[6].name,
        read: Finder(DataList[6].name),
        color: 'cyan',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    }, {
        name: DataList[7].name,
        read: Finder(DataList[7].name),
        color: '#f1f1f1',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    }, {
        name: DataList[8].name,
        read: Finder(DataList[8].name),
        color: '#fff',
        legendFontColor: FONT_COLOR,
        legendFontSize: 15
    }
];