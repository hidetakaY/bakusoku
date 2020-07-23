import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Alert, Dimensions } from 'react-native';


//スマホの画面サイズの取得
const SCREEN_WIDTH = Dimensions.get('window').width;
const SLIDE_DATA = [
  { title: 'Step: 1', text: 'Add your trip memory', uri: require('../assets/welcome_screen1.jpg') },
  { title: 'Step: 2', text: 'All tips on the list', uri: require('../assets/welcome_screen2.jpg') },
  { title: 'Step: 3', text: 'See the trip detail!', uri: require('../assets/welcome_screen3.jpg') },
];

class WelcomeScreen extends React.Component {
  onStartButtonPress = () => {
    Alert.alert(
      'Alert',//アラートタイトル
      'The button was pressed',//アラート本文
      [
        { text: 'OK' },//アラートボタン文
      ],
      { cancelable: false }//iOSには無いAndroid特有の操作方法を不許可
    );
  }

  renderLastButton(index) {
    if (index === SLIDE_DATA.length - 1) {
      return (
        <Button
          style={{ padding: 10 }}
          buttonStyle={{ backgroundColor: 'deepskyblue' }}
          title="Let's get it started!"
          onPress={this.onStartButtonPress}
        />
      );
    }
  }

  renderSlides() {
        return SLIDE_DATA.map((slide, index) => {
            return (
                <View
                  key={index}
                  //flex:1⇒描画エリアをスマホ画面上一杯を占有するようにする
                  style={styles.slideStyle}
                >
                    <View style={styles.containerStyle}
                    >
                      <Text style={styles.textStyle}></Text>
                      <Text style={{ color: 'white', fontSize: 20, padding: 5 }}>{slide.text}</Text>
                    </View>

                    <Image
                      style={{ flex: 2 }}
                      //画像を引き延ばすのか縮めるのか
                      resizeMode="contain"
                      source={slide.uri}
                    />
                    
                    <View style={styles.containerStyle}>
                    {this.renderLastButton(index)}
                    <Text style={styles.textStyle}>{index + 1} / 3</Text>   
                    </View> 
                </View>
            );
        });
    }
 
 
    render() {
      return (
        <ScrollView
            horizontal
            pagingEnabled
            style={{ flex: 1 }}
        >
            {this.renderSlides()}
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({ 
  slideStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
    width: SCREEN_WIDTH
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    color: 'white',
    fontSize: 20,
    padding: 5
  }
});
export default WelcomeScreen;