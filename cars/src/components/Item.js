import React from "react";
import { View, Text } from "react-native";

const Item = (props) => {
    //console.log(props.children)
    return   <View style={styles.viewStyle}>
        
                {props.children}
             </View>
}

const styles = {
    viewStyle: {
        borderWidth: 1,
        boderColor: "gainsbro",
        borderBottomWidth: 0,
        shadowColor: "black",
        shadowOffSet: {width: 1, height: 1},
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10,
        padding: 5
    }
}


export default Item;