import { TouchableOpacity, Image, StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import {  } from "react-native";
import { icons } from './../constants'


export default function registration() {
    return (
        <View className="flex-1 bg-white justify-center items-center px-6">
        {/* Title */}
        <Text className="text-2xl font-semibold text-center mb-8">Sign up</Text>

        {/* Username Input */}
        <TextInput
          placeholder="Username"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-4"
        />

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
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-4"
          />
        </View>

        {/* C-Password Input */}
        <View className="w-full relative">
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm mb-8"
          />
        </View>

        <TouchableOpacity className="bg-amber-700 rounded-lg  w-full p-6 mb-6">
          <Text className="text-white text-lg text-center font-semibold">Sign up</Text>
        </TouchableOpacity>

        <Text className="text-sm text-center  text-gray-500 mt-6">
          Already have an account?{' '}
          <Text className="text-amber-900">Sign in</Text>
        </Text>

      </View>
    )
}

const styles = StyleSheet.create({})