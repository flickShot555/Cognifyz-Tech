# 🚀 React Native Navigation Demo

A clean and minimal demonstration of React Navigation implementation in React Native, featuring stack navigation between two screens. Perfect for learning basic navigation patterns in mobile apps.

![App Preview](https://via.placeholder.com/300x600.png?text=Home+Screen+%7C+Welcome+to+Navigation+App) ![App Preview](https://via.placeholder.com/300x600.png?text=Details+Screen+%7C+Navigation+Success)

## ✨ Features

- **Stack Navigation** - Smooth transitions between screens
- **Clean UI Design** - Modern and minimal interface
- **Reusable Components** - Easy-to-understand structure
- **Cross-Platform** - Works on both iOS and Android
- **Touch Optimization** - Responsive button interactions

## 📦 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/react-native-navigation-demo.git
cd react-native-navigation-demo
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run the App**
```bash
# For iOS
npx react-native run-ios

# For Android
npx react-native run-android
```

## 🎮 Usage

-Launch the app to see the Home Screen

-Tap the "Go to Details" button

-Experience smooth navigation to Details Screen

-Use device back button/gesture to return


## 🧩 Component Structure

### App.js (Navigation Setup)
```bash
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
```

### HomeScreen.js (Home Screen Component)

-Welcome message display

-Navigation button with press handler

-Styled with React Native StyleSheet

### DetailsScreen.js (Details Screen Component)

-Success message display

-Clean layout with centered content

-Consistent styling with Home Screen

## 🎨 Design System

### Component	Style Properties

Container   	#f8f8f8 background

Buttons     	#4CAF50 with white text

Titles	        20px bold

Text	        Simple, readable typography

## 📚 Dependencies

-React Navigation (@react-navigation/native)

-Stack Navigator (@react-navigation/stack)

-React Native Gesture Handler

-React Native Safe Area Context

## 🛠 Future Enhancements

-Add navigation headers

-Implement tab navigation

-Create back navigation button

-Add screen transition animations

-Include URL-based deep linking

-Support theme customization

## 🤝 Contributing

-Fork the project

-Create your feature branch (git checkout -b feature/AmazingFeature)

-Commit your changes (git commit -m 'Add some AmazingFeature')

-Push to the branch (git push origin feature/AmazingFeature)

-Open a Pull Request

## Contact

**Author**      Abbas Khan
**Email**       [abbas1795khan@gmail.com](mailto:abbas1795khan@gmail.com)
**Github**      [flickShot555](https://github.com/flickShot555/)
**LinkedIn**    [The_Abbas_Khan](https://linkedin.com/in/the-abbas-khan)
**Portfolio**   [Aepostrophee](https://www.aepostrophee.kesug.com)