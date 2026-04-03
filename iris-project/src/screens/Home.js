import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
  Image,
} from "react-native";

const { width } = Dimensions.get("window");

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
              <Text style={styles.iconText}>←</Text>
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
              <Text style={styles.outlineIcon}>ⓘ</Text>
              <Text style={styles.outlineText}>Information</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.outlineButton}>
              <Text style={styles.outlineIcon}>❕</Text>
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
                of your visit. We're always here for you.
              </Text>
              <TouchableOpacity style={styles.orangeButton}>
                <Text style={styles.buttonText}>Schedule</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Seção Campaign - APENAS A IMAGEM */}
          <Text style={styles.sectionTitle}>Campaigns</Text>
          <View style={styles.campaignBanner}>
            <Image
              source={require("../Campanha.png")}
              style={styles.campaignImage}
              resizeMode="contain"
            />
          </View>

          {/* Seção IRIS com Imagem */}
          <View style={styles.irisContainer}>
            <View style={styles.irisInfo}>
              <Text style={styles.cardTitle}>IRIS</Text>
              <Text style={styles.description}>
                Get to know better about IRIS (Imaging-based Risk Identification
                System) and learn more about its goal.
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

      {/* NAVBAR */}
      <View style={styles.navWrapper}>
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.navItem}>
            <View style={styles.activeIndicator} />
            <Text style={{ fontSize: 24 }}>🏠</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={{ fontSize: 24 }}>🔍</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem}>
            <Text style={{ fontSize: 24 }}>👤</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // CONTAINER PRINCIPAL
  container: { 
    flex: 1, 
    backgroundColor: '#FFFFFF' 
  },
  scrollContent: { 
    flexGrow: 1, 
    paddingBottom: 120 
  },
  
  // HEADER (PARTE AMARELA)
  yellowHeader: {
    backgroundColor: '#FFDE59',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 50,
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  iconText: { 
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#333' 
  },
  bellBadge: {
    backgroundColor: '#FFBD59',
    padding: 8,
    borderRadius: 20,
  },
  bellImage: {
    width: 24,
    height: 24,
  },
  welcomeSection: { 
    marginBottom: 10 
  },
  welcomeText: { 
    fontSize: 26, 
    fontWeight: '900', 
    color: '#E67E22' 
  },
  username: { 
    color: '#E67E22' 
  },
  subtitle: { 
    fontSize: 16, 
    color: '#A67C00', 
    fontWeight: '500' 
  },

  // CORPO (PARTE BRANCA ARREDONDADA)
  whiteBody: {
    backgroundColor: '#FFF',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
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
    borderColor: '#CCC',
    borderRadius: 15,
    paddingVertical: 12,
    width: '48%',
    justifyContent: 'center',
  },
  outlineIcon: { 
    marginRight: 8, 
    fontSize: 18, 
    color: '#666' 
  },
  outlineText: { 
    color: '#444', 
    fontWeight: '500' 
  },

  // CARD VISIT (COM O CALENDÁRIO)
  visitCard: { 
    flexDirection: 'row', 
    marginBottom: 35, 
    alignItems: 'center' 
  },
  visitLeft: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  visitRight: { 
    flex: 2,
    paddingLeft: 10
  },
  calendarImage: { 
    width: 90, 
    height: 90 
  },

  // BANNER DE CAMPANHA (APENAS IMAGEM - SEM CORTES)
  campaignBanner: {
    width: '100%',
    backgroundColor: '#FFF5E6',
    borderRadius: 25,
    marginBottom: 30,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#FFE0B5',
  },
  campaignImage: {
    width: '100%',
    height: 200,
    borderRadius: 20,
  },

  // CARD IRIS (A MENINA LADO A LADO)
  irisContainer: { 
    flexDirection: 'row', 
    alignItems: 'flex-end',
    marginTop: 10,
    marginBottom: 30,
  },
  irisInfo: { 
    flex: 1.3,
    paddingBottom: 10,
  },
  irisImageContainer: { 
    flex: 0.7,
    alignItems: 'flex-end',
  },
  girlImage: { 
    width: 130, 
    height: 160,
    marginBottom: -10,
  },

  // ESTILOS DE TEXTO E BOTÕES COMUNS
  cardTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#FF7A21', 
    marginBottom: 8 
  },
  description: { 
    fontSize: 14, 
    color: '#666', 
    lineHeight: 20, 
    marginBottom: 15 
  },
  orangeButton: {
    backgroundColor: '#FF7A21',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    alignSelf: 'flex-start',
    elevation: 2,
  },
  buttonText: { 
    color: '#FFF', 
    fontWeight: 'bold', 
    fontSize: 14 
  },

  // NAVBAR INFERIOR
  navWrapper: {
    position: 'absolute',
    bottom: 25,
    width: '100%',
    alignItems: 'center',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    width: '85%',
    height: 75,
    borderRadius: 38,
    justifyContent: 'space-around',
    alignItems: 'center',
    elevation: 10,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    borderWidth: 1,
    borderColor: '#F0F0F0'
  },
  navItem: { 
    alignItems: 'center',
    justifyContent: 'center'
  },
  activeIndicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#FF7A21',
    position: 'absolute',
    top: -10
  }
});

export default Home;