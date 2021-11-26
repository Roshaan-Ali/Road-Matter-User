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
import background_img from '../assets/backgroung-image.png';
import Heading from '../components/Heading';
import colors from '../assets/colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const BankCardDetails = ({navigation, route}) => {
  const [bankName, setBankName] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [accTitle, setAccTitle] = useState('');
  const [accNum, setAccNum] = useState('');

  const _onPressSignUp = () => {
    if (
      bankName === '' ||
      branchCode === '' ||
      accNum === '' ||
      accTitle === ''
    ) {
      alert('All fields required');
    } else {
      navigation.navigate('Otp');
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground source={background_img} style={styles.image}>
        {/* <Text style={styles.text}>BANK ACCOUNT DETAILS</Text> */}

        <Heading
          title="BANK ACCOUNT DETAILS"
          fontType="extra-bold"
          passedStyle={styles.heading}
        />

        <View style={styles.inputBoxes}>
          <Inputbox
            value={bankName}
            setTextValue={setBankName}
            placeholderTilte="Bank Name"
            isSecure={true}
          />
          <Inputbox
            value={branchCode}
            setTextValue={setBranchCode}
            placeholderTilte="Branch Code"
            isSecure={true}
          />
          <Inputbox
            value={accTitle}
            setTextValue={setAccTitle}
            placeholderTilte="Account Title"
            isSecure={true}
          />
          <Inputbox
            value={accNum}
            setTextValue={setAccNum}
            placeholderTilte="Account Number"
            isSecure={true}
          />
        </View>
        <Button
          title="Sign Up"
          onBtnPress={() => _onPressSignUp()}
          isBgColor={false}
          btnStyle={styles.btnStyle}
          btnTextStyle={styles.btnTextStyle}
        />
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: colors.themeBlue,
    textAlign: 'center',
    fontSize: width * 0.09,
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

  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horizontalLinePosition: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: width * 0.5,
  },
  image: {
    justifyContent: 'center',
    width: width,
    height: height,
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

export default BankCardDetails;
