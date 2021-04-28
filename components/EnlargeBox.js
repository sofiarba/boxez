import React from "react";
import { Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { State, LongPressGestureHandler } from "react-native-gesture-handler";

/** 'Longpress me' Box will enlarge by scaleBy when pressed for at least 500ms */

function EnlargeBox(props) {
  const { scaleBy, styles } = props;

  const scale = useSharedValue(1);

  const animatedEnlargeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scaleX: scale.value,
        },
        {
          scaleY: scale.value,
        },
      ],
    };
  });

  const onLongPress = ({ nativeEvent }) => {
    if (nativeEvent.state === State.ACTIVE) {
      scale.value = scaleBy;
    } else if (nativeEvent.state == State.END) {
      scale.value = 1;
    }
  };

  return (
    <LongPressGestureHandler
      onHandlerStateChange={onLongPress}
      style={styles.container}
    >
      <Animated.View style={[styles.enlargeBox, animatedEnlargeStyle]}>
        <Text style={styles.text}>Longpress me</Text>
      </Animated.View>
    </LongPressGestureHandler>
  );
}

export default EnlargeBox;
