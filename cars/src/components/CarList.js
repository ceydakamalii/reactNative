import React, {Component} from 'react';
import {Text, View} from 'react-native';
import axios from 'axios';

import CarDetail from './CarDetail';

class CarList extends Component { //class based componentlerde render metodu olmalı

    constructor(){
        super();

        this.state = {carList: []} //başlangıç state
    }

    componentDidMount() { //render edildikten hemen sonra çalışır.uygulama boyunca 1 kere çağrılır, veri alma işlemi için kullanılır.
        axios.get('https://givecars.herokuapp.com').then((response) => {
            this.setState({ carList: response.data }) //state güncelleme
        })
    }

    renderList = () => {
        return this.state.carList.map((brand) => {
            return <CarDetail key={ brand.model[0].name } brand={brand}/>
        })
        
    }
    

    render(){
        console.log(this.state)
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
    
}

export default CarList;