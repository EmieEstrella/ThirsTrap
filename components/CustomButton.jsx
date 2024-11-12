import { Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
    return (
        <TouchableOpacity
            onPress={handlePress}
            activeOpacity={0.7}
            className={`bg-orange-400 border border-white p-4 rounded-xl mb-4
            justify-center items-center ${containerStyles} $
            {isLoading ? 'opacity-50': ''}`}
        >
            <Text className={`font-u_bold text-lg ${textStyles}`}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomButton

//<TouchableOpacity className="bg-orange-500 border border-white p-4 rounded-full mb-4">
 //         <Link href ="./home" className="text-white text-center font-bold">Get Started</Link>
 //       </TouchableOpacity> 