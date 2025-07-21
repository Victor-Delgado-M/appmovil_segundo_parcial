import React, { useContext, useState, useEffect } from 'react';
import { View, Platform } from 'react-native';
import { Text, Button, Title, Drawer } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { BottomNavigation } from 'react-native-paper';
import { dashboardStyles as styles } from '../styles/DashboardStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { cerrarSesion } from '../axiosClient';
import { UserContext } from '../contexts/UserContext';
import Perfil from './Perfil';

const Dashboard = ({ navigation }) => {
  const isWeb = Platform.OS === 'web';
  const { logout } = useContext(UserContext);

  const [index, setIndex] = useState(null);
  const routes = [
    { key: 'dashboard', title: 'Inicio', icon: 'home' },
    { key: 'perfil', title: 'Perfil', icon: 'account' },
    { key: 'config', title: 'Configuración', icon: 'cog' },
  ];

  useEffect(() => {
    const cargarIndice = async () => {
      const guardado = await AsyncStorage.getItem('tabIndex');
      if (guardado !== null) {
        setIndex(parseInt(guardado));
      } else {
        setIndex(0);
      }
    };
    cargarIndice();
  }, []);

  useEffect(() => {
    if (index !== null) {
      AsyncStorage.setItem('tabIndex', index.toString());
    }
  }, [index]);

  const cerrarSesionApp = async () => {
    try {
      await cerrarSesion();
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
    await logout();
    await AsyncStorage.removeItem('tabIndex');
  };

  const renderScene = (route) => {
    switch (route.key) {
      case 'dashboard':
        return (
          <View style={styles.scene}>
            <Title style={styles.welcomeTitle}>Bienvenidos a mi app</Title>
          </View>
        );
      case 'perfil':
        return <Perfil />;
      case 'config':
        return (
          <View style={styles.scene}>
            <Title style={styles.title}>Configuración</Title>
            <Button
              mode="contained"
              onPress={cerrarSesionApp}
              style={styles.button}
            >
              Cerrar Sesión
            </Button>
          </View>
        );
      default:
        return null;
    }
  };

  if (index === null) return null;

  if (isWeb) {
    return (
      <View style={{ flexDirection: 'row', height: '100%' }}>
        <View
          style={{
            width: 220,
            backgroundColor: '#1f2937',
            paddingTop: 30,
            paddingHorizontal: 10,
            borderRightWidth: 2,
            borderColor: '#111827',
          }}
        >
          <Drawer.Section title="" style={{ backgroundColor: 'transparent' }}>
            {routes.map((r, i) => (
              <Drawer.Item
                key={r.key}
                label={r.title}
                icon={({ color, size }) => (
                  <MaterialCommunityIcons
                    name={r.icon}
                    size={22}
                    color={index === i ? '#3b82f6' : '#ffffff'}
                  />
                )}
                labelStyle={{
                  color: '#ffffff',
                  fontWeight: index === i ? 'bold' : 'normal',
                  fontSize: 16,
                }}
                style={{
                  backgroundColor: index === i ? '#111827' : 'transparent',
                  borderRadius: 8,
                  marginVertical: 4,
                }}
                onPress={() => setIndex(i)}
              />
            ))}
          </Drawer.Section>
        </View>
        <View style={{ flex: 1, padding: 20 }}>{renderScene(routes[index])}</View>
      </View>
    );
  }

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={BottomNavigation.SceneMap({
        dashboard: () => renderScene(routes[0]),
        perfil: () => renderScene(routes[1]),
        config: () => renderScene(routes[2]),
      })}
      renderIcon={({ route, focused, color }) => (
        <MaterialCommunityIcons name={route.icon} size={24} color={color} />
      )}
    />
  );
};

export default Dashboard;
