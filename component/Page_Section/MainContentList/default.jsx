import { ListItem } from "../ListItem";


const MainContentList = ({ data }) => {
    let showContent = null;

    let newDataList = [];

    if (data) {
        data.map((item, key) => {
            newDataList.push(item)
            if (key === 2) {
                const ads1 = {
                    "_id": "ADSLIBERO01",
                    "type": "ads",
                    "typeAds": "Middle2"
                };
                newDataList.push(ads1);
            }
            if (key === 5) {
                const ads2 = {
                    "_id": "ADSLIBERO03",
                    "type": "ads",
                    "typeAds": "inline"
                };
                newDataList.push(ads2);
            }
            if (key === 8) {
                const ads3 = {
                    "_id": "ADSLIBERO04",
                    "type": "ads",
                    "typeAds": "inline2"
                };
                newDataList.push(ads3);
            }
            if (key === 11) {
                const ads4 = {
                    "_id": "ADSLIBERO05",
                    "type": "ads",
                    "typeAds": "inline3"
                };
                newDataList.push(ads4);
            }
        }) 
    }

    showContent = newDataList.map((item, key) => <ListItem data ={item} key={key} />)

    return showContent
}

export {MainContentList}