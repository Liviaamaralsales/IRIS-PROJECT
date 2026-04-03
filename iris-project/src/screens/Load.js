import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
// Importando ícones para substituir os emojis
import { Feather, Ionicons } from "@expo/vector-icons";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFDE59" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER AMARELO */}
        <View style={styles.yellowHeader}>
          <View style={styles.topIcons}>
            <TouchableOpacity>
              <Feather name="arrow-left" size={28} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bellBadge}>
              <Image
                source={require("../bell 1.png")}
                style={styles.bellImage}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.welcomeSection}>
            <Text style={styles.welcomeText}>
              Welcome, <Text style={styles.username}>User123</Text>
            </Text>
            <Text style={styles.subtitle}>We're happy to see you again.</Text>
          </View>
        </View>

        {/* CORPO BRANCO ARREDONDADO */}
        <View style={styles.whiteBody}>
          <Text style={styles.sectionTitle}>Explore the functionalities</Text>

          <View style={styles.row}>
            <TouchableOpacity style={styles.outlineButton}>
              <Feather name="info" size={18} color="#666" style={{ marginRight: 8 }} />
              <Text style={styles.outlineText}>Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineButton}>
              <Feather name="alert-circle" size={18} color="#666" style={{ marginRight: 8 }} />
              <Text style={styles.outlineText}>Report</Text>
            </TouchableOpacity>
          </View>

          {/* Seção Visit */}
          <View style={styles.visitCard}>
            <View style={styles.visitLeft}>
              <Image
                source={require("../cal.png")}
                style={styles.calendarImage}
                resizeMode="contain"
              />
            </View>
            <View style={styles.visitRight}>
              <Text style={styles.cardTitle}>Visit</Text>
              <Text style={styles.description}>
                Schedule your visit with us! Pick a date and tell us the reason
                of your visit.
              </Text>
              <TouchableOpacity style={styles.orangeButton}>
                <Text style={styles.buttonText}>Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Seção Campaign */}
          <Text style={styles.sectionTitle}>Campaigns</Text>
          <View style={styles.campaignBanner}>
            <Image
              source={require("../Campanha.png")}
              style={styles.campaignImage}
              resizeMode="cover"
            />
          </View>

          {/* Seção IRIS com a Imagem da Menina */}
          <View style={styles.irisContainer}>
            <View style={styles.irisInfo}>
              <Text style={styles.cardTitle}>IRIS</Text>
              <Text style={styles.description}>
                Get to know better about IRIS and learn more about its goal.
              </Text>
              <TouchableOpacity style={styles.orangeButton}>
                <Text style={styles.buttonText}>Learn more</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.irisImageContainer}>
              <Image
                source={require("../../menina.png")} 
                style={styles.girlImage}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* NAVBAR INFERIOR ESTILIZADA */}
      <View style={styles.navWrapper}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <View style={styles.activeIndicator} />
            <Ionicons name="home" size={26} color="#FF7A21" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="search" size={26} color="#CCC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Ionicons name="person" size={26} color="#CCC" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollContent: { flexGrow: 1, paddingBottom: 120 },
  
  yellowHeader: {
    backgroundColor: '#FFDE59',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 60,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  bellBadge: {
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 20,
    elevation: 3,
  },
  bellImage: { width: 22, height: 22 },
  welcomeSection: { marginBottom: 10 },
  welcomeText: { fontSize: 26, fontWeight: '900', color: '#E67E22' },
  username: { color: '#E67E22' },
  subtitle: { fontSize: 15, color: '#A67C00', fontWeight: '500' },

  whiteBody: {
    backgroundColor: '#FFF',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#FF7A21',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  outlineButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    borderRadius: 15,
    paddingVertical: 12,
    width: '48%',
    justifyContent: 'center',
    backgroundColor: '#FAFAFA'
  },
  outlineText: { color: '#444', fontWeight: '600' },

  visitCard: { flexDirection: 'row', marginBottom: 35, alignItems: 'center' },
  visitLeft: { flex: 1, alignItems: 'center' },
  visitRight: { flex: 2, paddingLeft: 10 },
  calendarImage: { width: 80, height: 80 },

  campaignBanner: {
    width: '100%',
    height: 160,
    borderRadius: 25,
    marginBottom: 30,
    overflow: 'hidden',
    elevation: 2,
  },
  campaignImage: { width: '100%', height: '100%' },

  irisContainer: { 
    flexDirection: 'row', 
    backgroundColor: '#FFF9F0',
    borderRadius: 25,
    padding: 15,
    marginBottom: 30,
  },
  irisInfo: { flex: 1.2 },
  irisImageContainer: { flex: 0.8, justifyContent: 'flex-end', alignItems: 'flex-end' },
  girlImage: { width: 110, height: 140, marginBottom: -15 },

  cardTitle: { fontSize: 22, fontWeight: 'bold', color: '#FF7A21', marginBottom: 5 },
  description: { fontSize: 13, color: '#666', lineHeight: 18, marginBottom: 12 },
  orangeButton: {
    backgroundColor: '#FF7A21',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },

  navWrapper: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '85%',
    height: 70,
    borderRadius: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: { alignItems: 'center' },
  activeIndicator: {
    width: 20,
    height: 3,
    backgroundColor: '#FF7A21',
    position: 'absolute',
    top: -12,
    borderRadius: 2
  }
});

export default Home;