import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1f2937',
    padding: 20,
  },
  box: {
    backgroundColor: '#ffffff',
    padding: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },
  title: {
    fontSize: 24,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 22,
    color: '#333',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    marginBottom: 16,
  },
  inputOutline: {
    borderRadius: 12,
  },
  button: {
    marginTop: 10,
    borderRadius: 12,
    backgroundColor: '#1f2937',
  },
  buttonContent: {
    paddingVertical: 8,
  },
  buttonLabel: {
    fontSize: 16,
    color: '#fff',
  },
  link: {
    marginTop: 15,
    fontSize: 14,
    color: '#1f2937',
    textAlign: 'center',
  },
});
