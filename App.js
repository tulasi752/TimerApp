import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  TextInput,
  Dimensions,
  StyleSheet,
  Alert,
} from 'react-native';
import Timer from './Timer';
const {height, width} = Dimensions.get('screen');

const App = () => {
  const [timers, setTimers] = useState([
    {
      id: 1,
      name: 'One',
      time: 0,
      running: false,
      inputTime: '',
      isComplete: false,
    },
    {
      id: 2,
      name: 'Two',
      time: 0,
      running: false,
      inputTime: '',
      isComplete: false,
    },
    {
      id: 3,
      name: 'Three',
      time: 0,
      running: false,
      inputTime: '',
      isComplete: false,
    },
    {
      id: 4,
      name: 'Four',
      time: 0,
      running: false,
      inputTime: '',
      isComplete: false,
    },
    {
      id: 5,
      name: 'Five',
      time: 0,
      running: false,
      inputTime: '',
      isComplete: false,
    },
  ]);
  const [timeOne, setTimerOne] = useState(0);

  const handleStart = (id, inputTime) => {
    setTimers(prevTimers =>
      prevTimers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            time: inputTime || timer.time,
            running: true,
            isComplete: false,
          };
        }
        return timer;
      }),
    );
  };

  const handlePause = id => {
    setTimers(prevTimers =>
      prevTimers.map(timer => {
        if (timer.id === id) {
          return {...timer, running: false};
        }
        return timer;
      }),
    );
  };

  const handleReset = id => {
    setTimers(prevTimers =>
      prevTimers.map(timer => {
        if (timer.id === id) {
          return {
            ...timer,
            time: 0,
            running: false,
            inputTime: '',
            isComplete: false,
          };
        }
        return timer;
      }),
    );
  };

  const handleTimeInput = (id, time) => {
    setTimers(prevTimers =>
      prevTimers.map(timer => {
        if (timer.id === id) {
          return {...timer, inputTime: time};
        }
        return timer;
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTwo}>
        <Text style={styles.headerText}>Timers</Text>
      </View>
      <View style={styles.containerThree}>
        {timers.map(timer => (
          <Timer
            key={timer.id}
            id={timer.id}
            name={timer.name}
            time={timer.time}
            running={timer.running}
            inputTime={timer.inputTime}
            isComplete={timer.isComplete}
            onStart={handleStart}
            onPause={handlePause}
            onReset={handleReset}
            onInputTime={handleTimeInput}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: 'red',
    fontSize: 28,
    textAlign: 'center',
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  containerTwo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerThree: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
