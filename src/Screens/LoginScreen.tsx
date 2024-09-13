import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ImageBackground,
} from 'react-native';
import CustomTextInput from './components/CustomTextInput';
import PasswordInput from './components/PasswordInput';
import axios from 'axios';

// API Base URL
const API_BASE_URL = 'https://chillyapple.com/SN-CH-Test/api/';

const LoginScreen = (props: any) => {
  // console.log(props);
  
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  // Function to handle login request using axios
  const handleLogin = async () => {
    // if (!mobileNumber || !password) {
    //   Alert.alert('Error', 'Please enter both mobile number and password');
    //   return;
    // }

    try {
      const response = await axios.post(`${API_BASE_URL}login`, {
        mobileNumber,
        password,
      });

      if (response.status === 200) {
        Alert.alert('Success', 'Login successful!');
        console.log('Login successful:', response.data);
        props.navigation.navigate('Drawer')
      } else {
        Alert.alert('Error', response.data.message || 'Login failed!');
      }
    } catch (error: any) {
      Alert.alert(
        'Error',
        error.response?.data?.message || 'An error occurred while logging in',
      );
      console.error('Login error:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/logo/login1.png')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        {/* Logo */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/logo/logo.png')}
            style={styles.logo}
          />
        </View>
        {/* Login Title */}
        <Text style={styles.loginTitle}>LOGIN</Text>
        <View style={{gap: 10}}>
          {/* Mobile Number Input */}
          <CustomTextInput
            placeholder="Mobile No."
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="phone-pad"
          />
          {/* Password Input */}
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
        </View>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>

        {/* Forgot Password Link */}
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Signup Link */}
        <TouchableOpacity onPress={() => props.navigation.navigate('Sendotp')}>
          <Text style={styles.signup}>
            New to Chilly Apple?{' '}
            <Text style={styles.signupNow}>Signup Now</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  loginTitle: {
    fontSize: 24,
    color: '#B61515',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7E8E8',
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: '#28850b',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  signup: {
    color: '#555',
    fontSize: 14,
    textAlign: 'center',
  },
  signupNow: {
    color: '#B61515',
  },
});

export default LoginScreen;
