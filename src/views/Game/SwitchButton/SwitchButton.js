import React from "react";
import { Svg, Path, G } from "react-native-svg";
import { View, TouchableOpacity } from "react-native";

const SwitchButton = ({ onPress, color, style }) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <View
      style={{
        borderColor: color,
        borderWidth: 4,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 60,
        width: 120,
        height: 120
      }}
    >
      <Svg
        width="20"
        height="20"
        style={{
          transform: [
            {
              scale: 1.5
            }
          ]
        }}
      >
        <G xmlns="http://www.w3.org/2000/svg" fill={color}>
          <Path
            d="M15.6384317,5.8496588 C14.3415936,4.08874297 12.2688117,3 10,3 C6.50598355,3 3.55977802,5.57605706 3.07073095,9.00020403 C2.99264436,9.54694065 2.48612508,9.92685657 1.93938846,9.84876998 C1.39265184,9.7706834 1.01273592,9.26416412 1.09082251,8.7174275 C1.7201169,4.31131485 5.50722793,1 10,1 C12.9478143,1 15.6390156,2.43038039 17.3021281,4.73676631 L18.2673005,4.09113589 C18.6616227,3.82736282 18.9816769,4.00755725 18.9821519,4.48419091 L18.9861301,8.47547317 C18.9866094,8.95632453 18.6282601,9.19181376 18.1943114,9.00514258 L14.5604687,7.44197691 C14.12268,7.25365389 14.09391,6.88283196 14.4817658,6.62338453 L15.6384317,5.8496588 Z"
            id="Combined-Shape"
          />
          <Path
            d="M15.6384317,14.9995611 C14.3415936,13.2386453 12.2688117,12.1499023 10,12.1499023 C6.50598355,12.1499023 3.55977802,14.7259594 3.07073095,18.1501064 C2.99264436,18.696843 2.48612508,19.0767589 1.93938846,18.9986723 C1.39265184,18.9205857 1.01273592,18.4140665 1.09082251,17.8673298 C1.7201169,13.4612172 5.50722793,10.1499023 10,10.1499023 C12.9478143,10.1499023 15.6390156,11.5802827 17.3021281,13.8866687 L18.2673005,13.2410382 C18.6616227,12.9772652 18.9816769,13.1574596 18.9821519,13.6340933 L18.9861301,17.6253755 C18.9866094,18.1062269 18.6282601,18.3417161 18.1943114,18.1550449 L14.5604687,16.5918793 C14.12268,16.4035562 14.09391,16.0327343 14.4817658,15.7732869 L15.6384317,14.9995611 Z"
            id="Combined-Shape"
            transform="translate(10.033390, 14.579374) scale(-1, -1) translate(-10.033390, -14.579374) "
          />
        </G>
      </Svg>
    </View>
  </TouchableOpacity>
);

export default SwitchButton;
