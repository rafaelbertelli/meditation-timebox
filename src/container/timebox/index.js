import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StopWatch from '../../components/stopwatch'

const initialState = {
  restTime: 5,
  currentTime: 3000,
}

export default class Timebox extends Component {
  state = { ...initialState }

  stopwatcher = () => {
    const stopwatch = setInterval(() => {
      this.setState(prevState => ({
        currentTime: prevState.currentTime - 1000
      }), () => { 
        if (this.state.currentTime === 0) {
          return clearInterval(stopwatch)
        }
      })
    }, 1000)
  }

  componentDidMount = () => {
    if (this.state.currentTime > 0) {
      this.stopwatcher()
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.currentTime}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    borderWidth: 1,
    padding: 20,
  }
})
