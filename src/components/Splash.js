import React , { Component } from 'react';
import { StyleSheet, ActivityIndicator , View } from 'react-native';


class Splash extends Component {

  componentDidMount() {
      this.props.navigation.navigate('Login');
  }

  render() {
    return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color='#fff' />
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#476DC5'
    }
})

export default Splash;
