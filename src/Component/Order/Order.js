import { Image, Pressable, StyleSheet, SafeAreaView, View } from "react-native";
import { colors } from "../../Theme/Colors";
import { spacing } from "../../Theme/Spacing";
import { typography } from "../../Theme/typography";
import Text from "../Text/Text";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  headerContainer: {
    backgroundColor: colors.purple,
    height: 312,
  },
  iconContainer: {
    flexDirection: "row",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 64,
  },
  headerIcon: {
    width: 23,
    height: 25,
  },
  bodyContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  bodyIcon: {
    height: 40,
    width: 35,
  },
  textHeader: {
    textAlign: "center",
    fontWeight: 700,
    marginBottom: 25,
    marginHorizontal: 44,
    color: colors.darkPurple,
  },
  textBody: {
    textAlign: "center",
    marginHorizontal: 21,
    color: colors.purpleGrey,
    marginBottom: 48,
  },
  orderBtn: {
    backgroundColor: colors.green,
    textAlign: "center",
    marginHorizontal: 21,
    padding: 16,
    marginBottom: 32,
    borderRadius: 8,
  },
});
const Order = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <View
          style={[
            styles.iconContainer,
            {
              width: 63,
              height: 63,
              marginHorizontal: spacing[5],
              backgroundColor: colors.lightGreen,
            },
          ]}
        >
          <Image
            style={styles.headerIcon}
            source={require("../../../assets/D.png")}
          />
        </View>
      </View>

      <View style={styles.bodyContainer}>
        <View style={[styles.iconContainer, { height: 104, width: 104 }]}>
          <Image
            style={styles.bodyIcon}
            source={require("../../../assets/Vector.png")}
          />
        </View>
      </View>

      <View>
        <Text preset="h1" style={styles.textHeader}>
          Non-Contact Deliveries
        </Text>
        <Text preset="h6" style={styles.textBody}>
          When placing an order, select the option “Contactless delivery” and
          the courier will leave your order at the door.
        </Text>
        <Pressable style={styles.orderBtn}>
          <Text preset="h5" style={{ fontWeight: 600 }}>
            ORDER NOW
          </Text>
        </Pressable>
        <Pressable>
          <Text
            preset="h5"
            style={{
              textAlign: "center",
              color: colors.purpleGrey,
              fontWeight: 600,
            }}
          >
            DISMISS
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Order;
