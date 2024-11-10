import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import Sound from 'react-native-sound';

const Timer = ({
  id,
  name,
  time,
  running,
  inputTime,
  isComplete,
  onStart,
  onPause,
  onReset,
  onInputTime,
}) => {
  const [currentTime, setCurrentTime] = useState(time);
  const [input, setInput] = useState(inputTime);

  useEffect(() => {
    let timer;
    if (running && currentTime > 0) {
      timer = setInterval(() => {
        setCurrentTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (currentTime <= 0) {
      clearInterval(timer);
      onComplete();
    }
    return () => clearInterval(timer);
  }, [running, currentTime]);

  const handleStart = id => {
    const timeInput = input ? parseInt(input) : 0;
    onStart(id, timeInput);
    setCurrentTime(timeInput);
  };

  const handlePause = () => {
    onPause(id);
  };

  const handleReset = () => {
    onReset(id);
    setCurrentTime(0);
  };

  const handleInputChange = text => {
    setInput(text);
    onInputTime(id, text);
  };

  const onComplete = () => {
    alert(`Timer ${id} is complete!`);
  };

  return (
    <View>
      <View style={styles.timerContainer}>
        <Text style={styles.text}> {name}</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Set time"
          value={input}
          onChangeText={handleInputChange}
        />
        <Text style={styles.timeDisplay}>{currentTime} sec</Text>
        <View style={styles.timerContainerTwo}>
          <Button
            style={styles.buttonStyle}
            onPress={() => handleStart(id)}
            title="Start"
          />
          <Button
            style={styles.buttonStyle}
            onPress={handlePause}
            title="Pause"
          />
          <Button
            style={styles.buttonStyle}
            onPress={handleReset}
            title="Reset"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    margin: 10,
    paddingBottom: 15,
    paddingTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor: '#3236a8',
  },
  timerContainerTwo: {
    flexDirection: 'row',
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
  timeDisplay: {
    fontSize: 30,
    marginBottom: 10,
    color: 'white',
    fontSize: 24,
  },
  input: {
    width: 100,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
    borderWidth: 1,
    padding: 5,
    color: 'black',
    // width:80,
    borderRadius: 10,
    backgroundColor: 'white',
    fontSize: 18,
  },
  buttonStyle: {
    margin: 30,
    fontSize: 6,
    borderRadius: 8,
  },
});

export default Timer;
