import React, { useState } from 'react';
import { Text } from 'react-native';
import styles from './styles';
const Title = (props) => {
    const [stateText, setText] = useState('Default State');
    const onTextPress = () => {
        setText ('Updated state');
    };
    console.log('props :>> ', props)
  return (
      <Text style={styles.title}>{props.text}</Text>
  );
};

Title.defaultProps = {
    text: 'Default Text'
}

export default React.memo(Title);
