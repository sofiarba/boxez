import React from "react";
import { Text, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

/** 'Drag me' Box is draggable anywhere on the screen */

const DraggableBox = (props) => {
  const { styles } = props;
  const { width, height } = Dimensions.get("window");

  const dragX = useSharedValue((width - 100) * 0.5);
  const dragY = useSharedValue((height - 20) * 0.5);

  const dragGestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = dragX.value;
      ctx.startY = dragY.value;
    },
    onActive: (event, ctx) => {
      dragX.value = ctx.startX + event.translationX;
      dragY.value = ctx.startY + event.translationY;
    },
  });

  const animatedDragStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: dragX.value,
        },
        {
          translateY: dragY.value,
        },
      ],
    };
  });

  return (
    <PanGestureHandler
      maxPointers={1}
      onGestureEvent={dragGestureHandler}
      shouldCancelWhenOutside={true}
    >
      <Animated.View style={[styles.dragBox, animatedDragStyle]}>
        <Text style={styles.text}>Drag me</Text>
      </Animated.View>
    </PanGestureHandler>
  );
};

export default DraggableBox;
