import React, { useState } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const Container = styled.View``;

const CheckCover = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  opacity: 0.6;
  background-color: black;
  padding: 5px;
`;

export default ({ onSelected, onDeselected, size, url }) => {
  // 터치되었을때 실행되는 핸들러
  const [isSelected, setIsSelected] = useState(false);

  // setIsSelected 함수로 상태를 변화시키전(랜더링 호출전),
  // 변화될 상태에 대응하는 함수를 먼저 실행시키기 때문에 isSelected가 true일 때 onDeselected 함수를 실행시킵니다.
  const _onPress = () => {
    if (isSelected && onDeselected !== undefined) {
      onDeselected();
    }

    if (!isSelected && onSelected !== undefined) {
      onSelected();
    }

    setIsSelected(i => !i);
  };

  return (
    <TouchableOpacity onPress={_onPress}>
      <Container style={{ width: size, height: size }}>
        <Image
          style={{
            width: size,
            height: size,
            position: 'absolute',
            top: 0,
            left: 0,
          }}
          source={{ uri: url }}
        />
        {isSelected ? (
          <CheckCover style={{ height: '100%', width: '100%' }}>
            <Ionicons size={size} name={'md-checkmark'} color={'white'} />
          </CheckCover>
        ) : null}
      </Container>
    </TouchableOpacity>
  );
};
/*
    
  const [isSelected, setIsSelected] = useState(false);


*/
