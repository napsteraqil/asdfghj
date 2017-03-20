import React, { Component } from 'react';
import { Container, Header, Text, Title, Content, Footer, FooterTab, DeckSwiper, Card, CardItem, Left, Thumbnail, Button, Right, Body, Icon } from 'native-base';
import { StackNavigator } from 'react-navigation';
import SigninScreen from './SigninScreen.js';
import Newsfeed from './Newsfeed.js';

import {
  AppRegistry, Image, View
} from 'react-native';
const cards = [
    {
        text: 'Project Planning',
        name: `Milestones, task lists and tasks help you break down complex projects into easily
manageableunits. Get more refined control with subtasks , recurring tasks, and dependencies.`

    },
    {
        text: 'Gantt Charts',
        name: `Gantt charts provide a detailed visual on
the progress of your tasks in comparison
to what was planned.`

    },
    {
        text: 'Reporting Tools',
        name: `Reports is our advanced analytics and business intelligence app. The integration with Projects provides in-depth insights
into your team's progress.`

    },
    {
        text: 'Timesheet',
        name: `All members working on a project can easily log their billable and non-billable hours. The built-in integration with Invoice automatically generates invoices using
this information.`

    },
    {
        text: 'Project Coordinator',
        name: `Feeds make staying updated with the
latest in your projects as easy as browsing your favorite social network. The timeline gives you an easy way to get back to important posts.`

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

              <Image
                  style={{width: '100%', height: '40%'}}
                  source={require('./m.jpg')}
                >
                    <Text style={{fontFamily: 'Lovelo_Line Bold', fontWeight: 'bold', textAlign: 'center', color: '#DE1B1B', fontSize: 49, marginTop: 140, marginBottom: -10}}> MECON</Text>
                    <Text style={{fontFamily: 'Roboto', textAlign: 'center', color: '#DE1B1B', fontSize: 25, marginTop: 0}}> P R O J E C T M A N A G E R </Text>

                </Image>

                <Container>
                  <View>
                  <DeckSwiper
                    dataSource={cards}
                    renderItem={item =>
                        <Card style={{ elevation: 3 }}>
<Body>
                            <CardItem>

                                <Text >{item.text}</Text>

                            </CardItem>
                        </Body>
                            <CardItem>

                            </CardItem>
                            <CardItem>
                                <Icon name="globe" style={{ color: '#ED4A6A' }} />
                                <Text>{item.name}</Text>
                            </CardItem>
                        </Card>
                    }>
                  </DeckSwiper>
                </View>
              </Container>


                <Footer>
                    <FooterTab>
                        <Button onPress={() => navigate('Signin')} full style={{backgroundColor: '#DE1B1B'}}>
                            <Text style={{color: '#FFFFFF',fontFamily: 'Lovelo',fontSize: 20}}>SIGN IN</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
const Nav = StackNavigator({
  Home: {screen: mecon},
  Signin: {screen: SigninScreen},
  Newsfeed: {screen: Newsfeed},

})




AppRegistry.registerComponent('mecon', () => Nav);
