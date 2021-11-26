import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Button from '../components/Button';
import Inputbox from '../components/Inputbox';
import logo from '../assets/run-matter-logo.png';
import background_img from '../assets/backgroung-image.png';
import colors from '../assets/colors';
import Heading from '../components/Heading';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const LogIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const _onPressLogIn = () => {
    if (email === '' || password === '') {
      alert('Invalid Login');
    } else {
      navigation.navigate('Home');
      console.log(email);
    }
  };
  const _onPressSignUp = () => {
    navigation.navigate('SignUp');
  };
  const _onPresspassword = () => {
    navigation.navigate('ForgotPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.inputBoxes}>
          <Inputbox
            value={email}
            setTextValue={setEmail}
            placeholderTilte="Username"
          />
          <Inputbox
            value={password}
            setTextValue={setPassword}
            placeholderTilte="Password"
            isSecure={true}
          />
        </View>
        <Button
          title="Login"
          onBtnPress={() => _onPressLogIn()}
          isBgColor={false}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 10,
            justifyContent: 'center',
          }}>
          <Heading
            title="Forgot Password?"
            passedStyle={styles.forgetPass}
            fontType="medium"
          />
          <TouchableOpacity onPress={() => _onPresspassword()}>
            <Heading
              passedStyle={styles.clickHere}
              title="Click Here"
              fontType="semi-bold"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalLinePosition}>
          <View style={styles.horizontalLine} />
          <View>
            <Heading
              passedStyle={styles.orStyle}
              fontType="medium"
              title="Or"
            />
          </View>
          <View style={styles.horizontalLine} />
        </View>
        <View style={{position: 'relative'}}>
          <Button
            title="Sign Up Now"
            onBtnPress={() => _onPressSignUp()}
            isBgColor={false}
            btnStyle={styles.btnSignUpStyle}
            btnTextStyle={styles.btnSignUpTextStyle}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  orStyle: {
    fontSize: width * 0.03,
    paddingHorizontal: width * 0.02,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: colors.themeBlue,
    borderRadius: width * 0.8,
    width: width * 0.8,
  },
  btnTextStyle: {
    color: 'white',
    fontFamily: 'Montserrat-SemiBold',
  },
  forgetPass: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: width * 0.035,
  },

  btnSignUpStyle: {
    backgroundColor: 'transparent',
    borderRadius: width * 0.8,
    width: width * 0.8,
    borderWidth:1,
    borderColor:colors.themeBlue,
  },
  btnSignUpTextStyle: {
    color: colors.themeBlue,
    fontFamily: 'Montserrat-SemiBold',
  },

  clickHere: {
    color: colors.themeBlue,
    fontSize: width * 0.035,
    marginLeft: width * 0.01,
    textDecorationLine: 'underline',
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },

  logo: {
    margin: 15,
    width: width * 0.5,
    height: height * 0.16,
    marginTop: height * 0.1,
  },

  image: {
    // flex: 1,
    // resizeMode: 'stretch',
    justifyContent: 'center',
    width: width,
    height: height,
    // backgroundColor:'red',
    alignSelf: 'center',
    alignItems: 'center',
  },
  scrollview: {
    height: height,
  },
  inputBoxes: {
    marginTop: height * 0.02,
  },
});

export default LogIn;
