const tintColorLight = '#4CAF50'; // Forest green accent
const tintColorDark = '#A5D6A7'; // Light green for dark mode contrast

export default {
  light: {
    text: '#2E7D32', // Dark green for text
    background: '#F1F8E9', // Soft, pale green background
    tint: tintColorLight, // Forest green for interactive elements
    tabIconDefault: '#BDBDBD', // Neutral light gray for unselected icons
    tabIconSelected: tintColorLight, // Forest green for selected icons
  },
  dark: {
    text: '#E8F5E9', // Pale green for text on dark backgrounds
    background: '#1B5E20', // Deep forest green background
    tint: tintColorDark, // Light green for interactive elements
    tabIconDefault: '#757575', // Neutral gray for unselected icons
    tabIconSelected: tintColorDark, // Light green for selected icons
    gray: '#141518', // Dark gray
  },
};
