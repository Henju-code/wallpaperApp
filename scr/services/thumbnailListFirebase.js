import database from '@react-native-firebase/database'
import { useState, useEffect } from 'react'

const document = [];

function getKeyList() {
  const [keyList, setKeyList] = useState([]);
  const list = [];

  useEffect(() => {
    const documentRef = database().ref('/categories')
    documentRef.on("value", (datasnapshot) => {
      const docSnapshot = datasnapshot.val();

      let counter = 0;

      for (let id in docSnapshot) {
        document.push({ id, ...docSnapshot[id] });

        list[counter] = id;
        counter++;
        list.sort();

      }
      setKeyList(list);
    })
  }, []);
  return keyList;
}

function getThumbnails() {

  const thumbnails = [];
  const keyList = getKeyList();

  let counter = 0;
  let length = keyList.length;

  document.map((item) => {
    while (counter < length) {
      if (item.key == keyList[counter]) {
        thumbnails[counter] = item;
        counter = length;
      }
      counter++;
    }
    counter = 0;
  });

  return thumbnails;
};

export default getThumbnails