import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  FlatList, 
  SafeAreaView 
} from 'react-native';
import { Feather } from '@expo/vector-icons';

const NOTIFICATIONS = [
  { id: '1', title: 'Fictional Email', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: '2', title: 'Fictional Email', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: '3', title: 'Fictional Email', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
  { id: '4', title: 'Fictional Email', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
];

export default function Notificacoes() {
  
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        {/* BOLINHA MENOR E ALINHADA */}
        <View style={styles.orangeCircle} />
        
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDescription} numberOfLines={3}>
            {item.description}
          </Text>
        </View>

        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="trash-2" size={14} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Feather name="star" size={14} color="#999" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity>
          <Feather name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <View style={styles.yellowSection}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterBox}>
            <Feather name="star" size={20} color="#999" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterTab}>
            <Text style={styles.filterText}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
            <Text style={[styles.filterText, styles.activeFilterText]}>Unread</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.whiteSheet}>
          <FlatList
            data={NOTIFICATIONS}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            contentContainerStyle={styles.listPadding}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => <Text style={styles.sectionTitle}>Today</Text>}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F2994A',
    marginLeft: 20,
  },
  yellowSection: {
    flex: 1,
    backgroundColor: '#FDD835',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    height: 80,
    paddingBottom: 15,
  },
  filterBox: {
    width: 45,
    height: 45,
    backgroundColor: '#EEE',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  filterTab: {
    backgroundColor: '#EEE',
    paddingHorizontal: 20,
    height: 45,
    justifyContent: 'center',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  activeFilterTab: {
    backgroundColor: '#FFF',
  },
  filterText: {
    color: '#999',
    fontWeight: '600',
  },
  activeFilterText: {
    color: '#F2994A',
  },
  whiteSheet: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 20,
  },
  listPadding: {
    paddingHorizontal: 25,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#F2994A',
    fontWeight: '600',
    marginBottom: 15,
    marginTop: 10,
  },
  card: {
    marginBottom: 25,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  // ESTILO DA BOLINHA DE NOTIFICAÇÃO
  orangeCircle: {
    width: 12,           // Reduzido de 40 para 12
    height: 12,          // Reduzido de 40 para 12
    borderRadius: 6,
    backgroundColor: '#F2994A',
    marginRight: 12,
    marginTop: 6,        // Alinha com a primeira linha do título
  },
  textContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F2994A',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 13,
    color: '#666',
    lineHeight: 18,
  },
  actionButtons: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 8,
    marginLeft: 10,
    overflow: 'hidden',
  },
  actionButton: {
    padding: 8,
    borderWidth: 0.5,
    borderColor: '#E0E0E0',
  },
});