import React from 'react'
import { View, StyleSheet } from 'react-native'
import Planet from './src/assets/images/planet'

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
              <Planet style={styles.planet} width={300} height={300} planetColor='#ff4d30' craterColor='#d33f2f' ringColor='#90c8ec' hasRing={true}/>
              <Planet style={styles.planet} width={250} height={250} planetColor='#4caf50' craterColor='#2e7d32' />
              <Planet style={styles.planet} width={100} height={100} planetColor='#ff9800' craterColor='#ef6c00' />
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  planet: {
    margin: 10
  }
})

export default App