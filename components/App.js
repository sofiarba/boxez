import React from "react";
import { StyleSheet } from "react-native";
import DraggableBox from "./DraggableBox";
import EnlargeBox from "./EnlargeBox";

function App() {
  return (
    <>
      <DraggableBox styles={styles}></DraggableBox>

      <EnlargeBox scaleBy={2} styles={styles}></EnlargeBox>
    </>
  );
}

const BOX_SIZE = 100;

const styles = StyleSheet.create({
  dragBox: {
    backgroundColor: "#5603AD",
    width: BOX_SIZE,
    height: BOX_SIZE,
    borderRadius: 20,
    borderColor: "#000",
    alignItems: "center",
  },
  enlargeBox: {
    backgroundColor: "#CD4631",
    width: BOX_SIZE,
    height: BOX_SIZE,
    marginLeft: 160,
    marginTop: 100,
    borderRadius: 20,
    borderColor: "#000",
    alignItems: "center",
  },
  text: {
    marginTop: 35,
    fontSize: 14,
    margin: 8,
    color: "#B3E9C7",
    textAlign: "center",
  },
});

export default App;
