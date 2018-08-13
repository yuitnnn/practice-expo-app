import React from 'react';
import { StyleSheet, View, Button, Image } from 'react-native';
import { ImagePicker, Permissions } from 'expo';

export default class App extends React.Component {

  state = {
    hasCameraPermission: null,
    hasCameraRollPermission: null,
    photo: null
  };

  async componentWillMount() {
    const cameraPermissions = await Permissions.askAsync(Permissions.CAMERA);
    const cameraRollPermissions = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    this.setState({
      hasCameraPermission: cameraPermissions.status === 'granted',
      hasCameraRollPermission: cameraRollPermissions.status === 'granted',
    });
  }

  _takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync();
    this.setState({ photo: result });
  }

  _pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    this.setState({ photo: result }); 
  }

  render() {
    let { hasCameraPermission, hasCameraRollPermission, photo } = this.state;

    return (
      <View style={styles.container}>
        {hasCameraRollPermission && photo && <Image style={styles.image} source={{ uri: photo.uri }} />}
        <View style={styles.buttonsContainer}>
          <Button style={styles.button} title={"take photo"} onPress={this._takePhoto} />
          <Button style={styles.button} title={"open camera roll"} onPress={this._pickImage} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    width: 300,
    height: 300,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 0,
  },
  button: {
    flex: 1,
  }
});