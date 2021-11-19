import React from "react";
import {Text} from "react-native";

import Item from "./Item";
import ItemSection from "./ItemSection";

const CarDetail = (props) => {
    return  <Item>
                <ItemSection>
                    <Text>{props.brand.model[0].name}</Text>
                </ItemSection>
            </Item>
}

export default CarDetail;