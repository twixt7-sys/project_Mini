import React, { useState, useRef, useCallback } from "react";
import {
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Txt from "./Txt";

const FABButton = ({
  style,
  icon,
  shape = "circle",
  onPress,
}: {
  style: any;
  icon: string;
  shape?: "circle" | "square";
  onPress?: () => void;
}) => (
  <Animated.View style={[styles.fabOption, style]}>
    <TouchableOpacity
      style={[styles.fabButton, shape === "square" && styles.fabButtonSquare]}
      onPress={onPress}
    >
      <Ionicons name={icon} size={20} color="#fff" />
    </TouchableOpacity>
  </Animated.View>
);

const FormModal = ({
  onSubmit,
  onCancel,
  title,
  content,
  setTitle,
  setContent,
}: {
  onSubmit: () => void;
  onCancel: () => void;
  title: string;
  content: string;
  setTitle: (t: string) => void;
  setContent: (c: string) => void;
}) => (
  <View style={styles.modalContainer}>
    <Txt text="Create Post" style_={styles.modalTitle} />
    <TextInput
      style={styles.input}
      placeholder="Enter title"
      placeholderTextColor="#aaa"
      value={title}
      onChangeText={setTitle}
    />
    <TextInput
      style={[styles.input, styles.textArea]}
      placeholder="Write your content here..."
      placeholderTextColor="#aaa"
      value={content}
      onChangeText={setContent}
      multiline
      numberOfLines={6}
      textAlignVertical="top"
    />
    <View style={styles.buttonGroup}>
      <TouchableOpacity style={styles.button} onPress={onSubmit}>
        <Txt text="Submit" style_={styles.buttonText} />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={onCancel}>
        <Txt text="Cancel" style_={styles.buttonText} />
      </TouchableOpacity>
    </View>
  </View>
);

const FAB = () => {
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const animationVertical = useRef(new Animated.Value(0)).current;
  const animationHorizontal = useRef(new Animated.Value(0)).current;
  const modalAnim = useRef(new Animated.Value(0)).current;

  const toggleFabMenu = useCallback(() => {
    const toValue = isFabOpen ? 0 : 1;
    Animated.parallel([
      Animated.spring(animationVertical, { toValue, useNativeDriver: true }),
      Animated.spring(animationHorizontal, { toValue, useNativeDriver: true }),
    ]).start();
    setIsFabOpen(!isFabOpen);
  }, [isFabOpen]);

  const openModal = () => {
    setShowModal(true);
    Animated.timing(modalAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => setShowModal(false));
  };

  const getAnimatedStyle = (
    distance: number,
    axis: "x" | "y",
    animation: Animated.Value
  ) => ({
    transform: [
      {
        [axis === "x" ? "translateX" : "translateY"]: animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, distance],
        }),
      },
    ],
    opacity: animation,
  });

  const verticalFABs = [
    { distance: -80, icon: "pencil", action: openModal },
    { distance: -150, icon: "image" },
    { distance: -220, icon: "test" },
    { distance: -290, icon: "test" },
  ];

  const horizontalFABs = [
    { distance: -70, icon: "settings" },
    { distance: -140, icon: "earth" },
    { distance: -210, icon: "search" },
    { distance: -280, icon: "home" },
  ];

  return (
    <>
      {verticalFABs.map((fab, index) => (
        <FABButton
          key={`v-${index}`}
          style={getAnimatedStyle(fab.distance, "y", animationVertical)}
          icon={fab.icon}
          shape="circle"
          onPress={fab.action}
        />
      ))}

      {horizontalFABs.map((fab, index) => (
        <FABButton
          key={`h-${index}`}
          style={getAnimatedStyle(fab.distance, "x", animationHorizontal)}
          icon={fab.icon}
          shape="square"
        />
      ))}

      <TouchableOpacity
        style={[
          styles.fab,
          { backgroundColor: isFabOpen ? "#F77" : "#77F" },
        ]}
        onPress={toggleFabMenu}
      >
        <Ionicons name={isFabOpen ? "close" : "add"} size={28} color="#fff" />
      </TouchableOpacity>

      {showModal && (
        <Animated.View style={[styles.modalBackdrop, { opacity: modalAnim }]}>
          <Animated.View
            style={[
              styles.modalContent,
              { transform: [{ scale: modalAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.8, 1.0] })}],
              },
            ]}
          >
            <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
            </TouchableOpacity>
            <FormModal
              title={title}
              content={content}
              setTitle={setTitle}
              setContent={setContent}
              onSubmit={() => {
                console.log(title, content);
                closeModal();
              }}
              onCancel={closeModal}
            />
          </Animated.View>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    right: 20,
    bottom: 20,
    padding: 16,
    borderRadius: 40,
    elevation: 6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 10,
    transform: [{ translateX: -4 }, { translateY: -9 }, { scale: 1.1 }],
  },
  fabOption: {
    position: "absolute",
    right: 27,
    bottom: 20,
  },
  fabButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#5e66ff",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
    marginBottom: 10,
  },
  fabButtonSquare: {
    borderRadius: 12,
  },
  modalBackdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  modalContent: {
    width: "90%",
    height: "60%",
    padding: 5,
    borderRadius: 20,
    backgroundColor: "#aab8ff",
    alignItems: "center",
  },
  modalClose: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 6,
    zIndex: 100,
  },
  modalContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  modalTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1c2b59",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#cdd8f7",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: "#000",
    marginBottom: 15,
  },
  textArea: {
    height: 230,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 35,
  },
  button: {
    flex: 1,
    backgroundColor: "#5c6fb0",
    borderRadius: 15,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cancelButton: {
    backgroundColor: "#1c2b59",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default FAB;
