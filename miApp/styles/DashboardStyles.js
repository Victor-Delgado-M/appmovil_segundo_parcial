import { StyleSheet } from 'react-native';

export const dashboardStyles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },
  perfilContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  perfilCard: {
    width: '100%',
    maxWidth: 500,
    borderRadius: 12,
    elevation: 4,
    backgroundColor: '#f9fafb',
    paddingBottom: 20,
  },
  cardContent: {
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#3b82f6',
    marginBottom: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: 20,
    textAlign: 'center',
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
    color: '#374151',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 6,
    alignSelf: 'center',
    backgroundColor: '#3b82f6',
  },
});
