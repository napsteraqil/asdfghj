import React, { Component } from 'react';
import { Container, Header, Text, Title, Content, Footer, FooterTab, DeckSwiper, Card, CardItem, Left, Thumbnail, Button, Right, Body } from 'native-base';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Octicons';

import {
  AppRegistry, Image, View
} from 'react-native';
const cards = [
    {
        text: 'EASY ACCESSIBLE',
        name: `Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Vivamus porta interdum
condimentum. Donec blandit vestibulum
sapien, sed tristique libero. Donec blandit
vestibulum sapien, sed tristique libero.`

    },
    {
        text: 'Card Ongge',
        name: 'Ongge'

    }

];
export default class mecon extends Component {
static navigationOptions = {
  header: ({state, setParams }) =>({
    visible: false,
    headerMode: 'none'
  })


};
    render() {
      const { navigate } = this.props.navigation;
        return (
            <Container>
              <Header style={{backgroundColor: '#DE1B1B'}}  >
                              <Left>
                                <View style={{alignSelf:'flex-start', flexDirection: 'row', flex:1}}>
                                  <Button transparent>
                                      <Text style={{fontSize:30}}><Icon name='three-bars'  /></Text>
                                  </Button>
                                  <Title style={{marginTop: 10}}>Newsfeed</Title>
                                </View>
                              </Left>




                          </Header>

              </Container>



        );
    }
}
