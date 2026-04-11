import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('search');

  const renderNavItem = (tabName, IconComponent, iconName, isLibIonicons = false) => {
    const isActive = activeTab === tabName;

    return (
      <View style={styles.itemWrapper}>
        {isActive && <View style={styles.activeDot} />}
        
        <TouchableOpacity
          onPress={() => setActiveTab(tabName)}
          activeOpacity={0.8}
          style={[
            styles.navItem,
            isActive ? styles.activeButtonCircle : null,
            isActive ? { backgroundColor: '#FF6B00' } : null
          ]}
        >
          {isLibIonicons ? (
            <Ionicons name={iconName} size={isActive ? 30 : 24} color={isActive ? "white" : "#888"} />
          ) : (
            <Feather name={iconName} size={isActive ? 26 : 24} color={isActive ? "white" : "#888"} />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.navBarContainer}>
      <View style={styles.navBar}>
        {renderNavItem('home', Feather, 'home')}
        {renderNavItem('search', Ionicons, 'search', true)}
        {renderNavItem('profile', Feather, 'user')}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
    height: 90, 
    backgroundColor: 'white',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  navBar: {
    width: '92%',
    height: 58,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#FF6B00',
  },
  itemWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  activeButtonCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    marginTop: -40, 
    borderWidth: 5,
    borderColor: 'white', 
    elevation: 8,
  },
  activeDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#FF6B00',
    position: 'absolute',
    top: -48, 
  }
});