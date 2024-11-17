import { TouchableOpacity, Image, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {  } from "react-native";
import { icons } from './../constants'

export default function login() {
    return (
        <View className="flex-1 bg-white justify-center items-center px-6">
        {/* Title */}
        <Text className="text-2xl font-semibold text-center mb-8">Sign In</Text>

        {/* Email Input */}
        <TextInput
          placeholder="Email or Phone Number"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-4"
        />

        {/* Password Input */}
        <View className="w-full relative">
          <TextInput
            placeholder="Password"
            secureTextEntry
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm"
          />
        </View>

        {/* Forgot Password */}
        <TouchableOpacity className="self-end mt-2 mb-6">
          <Text className="text-amber-800 text-sm">Forgot password?</Text>
        </TouchableOpacity>

        {/* Start Button */}
        <TouchableOpacity className="bg-amber-700 rounded-lg w-full py-3 mb-6">
          <Text className="text-white text-center font-semibold">Start</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View className="flex-row items-center mb-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="px-4 text-gray-500 text-sm">or</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        {/* Social Buttons */}
        <TouchableOpacity className="flex-row items-center justify-center border border-gray-300  py-4 mb-3 px-3">
        <Image
            source={icons.google}
            className="w-5 h-5 mr-2"
          />
          <Text className="text-gray-700">Sign in with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-row items-center justify-center border border-gray-300  py-4 px-4">
        <Image
            source={icons.email}
            className="w-5 h-5 mr-2"
          />
          <Text className="text-gray-700">Sign in with Email</Text>
        </TouchableOpacity>

        {/* Sign Up */}
        <Text className="text-sm text-center text-gray-500 mt-6">
          Don’t have an account?{' '}
          <Text className="text-amber-900">Sign up</Text>
        </Text>
      </View>

       /* <View className ="flex-1 items-center justify-center text-center p-6 ">
            <Text className="text-2xl font-plight font-bold">Sign In</Text>
            <TextInput className="text-1xl font-plight border rounded-lg w-full pl-4 py-3 m-4" placeholder= "Email or Phone Number"></TextInput>
            <TextInput className="text-1xl font-plight border rounded-lg w-full pl-4 py-3"placeholder= "Password"></TextInput> 
        </View> */
       
    )
}

