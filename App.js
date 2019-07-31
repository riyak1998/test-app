import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextProvider, FormattedMessage } from 'text-provider-react-native';

const sampleText = require("./sample-text.json");
const randomId = "Random Id";
const values = {
  "valueToBeInjected": "Random Value"
};

export default function App() {
  return (
    <TextProvider globalText={sampleText} >
        <FormattedMessage id={randomId} values={values}/>
    </TextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
