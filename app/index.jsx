import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image , TouchableOpacity } from 'react-native';
import { icons, images } from './../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <ImageBackground
        source={images.bg}
        className="flex-1 justify-end p-6"
      >
        <View className="bg-black bg-opacity-50 p-2 rounded-xl mb-4">
          <Text className="text-white text-4xl font-bold mb-2">Thirstrap</Text>
          <Text className="text-gray-500">Home delivery and online reservation system for shops and cafes</Text>
        
        <CustomButton
        title="Get Started"
        handlePress={()=> router.push('/home')}
        containerStyles="w-full mt-7">
        </CustomButton>

        <StatusBar style='light'></StatusBar>
        </View>

        
      </ImageBackground>
  );
}

