import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import Txt from "../components/Txt";

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
    <View style={{ height: 3, backgroundColor: '#77C', width: '100%', borderRadius: 1.5, opacity: 0.8}} />
    <TextInput
      style={[styles.input, { marginTop: 15}]}
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

const CreatePost = ({ navigation }: any) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View style={styles.screen}>
      <FormModal
        title={title}
        content={content}
        setTitle={setTitle}
        setContent={setContent}
        onSubmit={() => {
          // handle submit logic here
          console.log(title, content);
          navigation.goBack();
        }}
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#aab8ff",
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 25,
    marginBottom: 25,
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
    marginTop: 25,
    marginBottom: 25
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

export default CreatePost;