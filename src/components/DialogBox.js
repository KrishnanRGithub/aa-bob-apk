import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';

const DialogBox = (prop) => {
  console.log(prop)
  const [isVisible, setIsVisible] = useState(prop.state);
  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <Text>Open Dialog Box</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}
      >
        <View style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <View style={{
              width: '80%',
              height: '30%',
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35
            }}
          >
            <Text>Are you sure you want to proceed?</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => {
                  setIsVisible(!isVisible);
                }}
              >
                <Text>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setIsVisible(!isVisible);
                }}
              >
                <Text>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default DialogBox;
