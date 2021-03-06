import { Text, View } from "./Themed";
import { FlatList, Image, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { bookmarks } from "../dummyData/data";

type Props = {};

type bookmark = {
  bookmark_name: string;
  img_url: string;
  category_id: string;
};

type BookmarkItemProps = {
  item: bookmark;
};

const _BookmarkItem = ({ item }: BookmarkItemProps) => {
  return (
    <View style={styles.card}>
      <Image style={styles.cardImage} source={{ uri: item.img_url }} />
      <Text style={styles.cardText}>{item.bookmark_name}</Text>
      <Text style={styles.cardText}>{item.category_id}</Text>
    </View>
  );
};

const BookmarkerScroll = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Bookmarks</Text>
        <Text style={{ color: "#BF3BEF" }}>View More</Text>
      </View>
      <FlatList
        style={styles.cards}
        data={bookmarks}
        numColumns={2}
        renderItem={({ item }) => <_BookmarkItem item={item} />}
      />
    </View>
  );
};

export default BookmarkerScroll;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  cards: {},
  card: {
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "200px",
    height: "300px",
    borderRadius: 5,
  },

  cardText: {
    position: "relative",
    top: -25,
    fontWeight: "500",
  },
});
