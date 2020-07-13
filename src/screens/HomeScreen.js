import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Foundation } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import image from "../assets/images/icons8-male-user-48.png";
import { Octicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.welcome__container}>
        <View style={styles.welcome__container__header}>
          <TouchableOpacity style={styles.welcome__container__header__left}>
            <View style={styles.welcome__container__header__left__inner}>
              <Foundation
                name="crown"
                size={25}
                color="gold"
                style={styles.icon}
              />
              <Text style={styles.welcome__container__header__left__text}>
                Upgrade Pro
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.welcome__container__header__right}>
            <Image source={image} style={styles.image} />
          </View>
        </View>
        <View style={styles.welcome__container__text}>
          <View style={styles.welcome__container__text__left}>
            <Text style={styles.welcome__container__text___left__text1}>
              Hello!
            </Text>
            <Text style={styles.welcome__container__text___left__text2}>
              McBryan Solomon
            </Text>
            <Text style={styles.welcome__container__text___left__text3}>
              Let's clean and manage your file's
            </Text>
          </View>
          <TouchableOpacity style={styles.welcome__container__text__right}>
            <Octicons
              name="settings"
              size={25}
              color="#fff"
              style={styles.icon2}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edfdff",
  },
  welcome__container: {
    backgroundColor: "#01061a",
    height: 300,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
  },
  welcome__container__header: {
    flexDirection: "row",
    flex: 10,
    marginHorizontal: 15,
    marginVertical: 25,
  },
  welcome__container__header__left: {
    backgroundColor: "#4b5169",
    height: 45,
    borderRadius: 50,
    elevation: 20,
  },
  welcome__container__header__left__inner: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
  welcome__container__header__left__text: {
    color: "gold",
    fontWeight: "bold",
  },
  welcome__container__header__right: {
    flex: 5,
  },
  welcome__container__header__right__text: {
    color: "white",
  },
  image: {
    height: 50,
    // borderRadius: 50,
    width: 50,
    marginLeft: 145,
  },
  welcome__container__text: {
    marginBottom: 90,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  welcome__container__text__left: {
    justifyContent: "center",
  },
  welcome__container__text___left__text1: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  welcome__container__text___left__text2: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25,
  },
  welcome__container__text___left__text3: {
    color: "grey",
    fontWeight: "bold",
  },
  icon2: {
    fontWeight: "bold",
    marginLeft: 70,
    marginVertical: 40,
  },
});
