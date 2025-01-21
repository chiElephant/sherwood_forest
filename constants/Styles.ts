import { StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark.background, // Background dynamically changes based on the theme
    padding: 16,
  },
  header: {
    fontSize: 40,
    fontWeight: '700',
    color: Colors.dark.text, // Text dynamically changes based on the theme
  },
  pillButton: {
    padding: 10,
    height: 60,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark.tint, // Tint matches the primary accent color
  },
  textLink: {
    color: Colors.dark.tint, // Text links use the accent color for visibility
    fontSize: 18,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 18,
    marginTop: 20,
    color: Colors.dark.text, // Description text dynamically changes with the theme
  },
  buttonText: {
    color: Colors.dark.text || '#fff', // Ensures text is readable on the button's background
    fontSize: 18,
    fontWeight: '500',
  },
  pillButtonSmall: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.dark.tint, // Matches the main accent color
  },
  buttonTextSmall: {
    color: Colors.dark.text || '#fff', // Ensures text is readable on smaller buttons
    fontSize: 16,
    fontWeight: '500',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    marginBottom: 10,
    color: Colors.dark.text, // Section headers use the text color
  },
  block: {
    marginHorizontal: 20,
    padding: 14,
    backgroundColor: Colors.dark.background || '#fff', // A lighter background for blocks
    borderRadius: 16,
    gap: 20,
    shadowColor: Colors.dark.tabIconSelected || '#000', // Subtle shadow for elevation
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    elevation: 3,
  },
});
