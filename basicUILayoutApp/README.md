# React Native Portfolio Profile App

A professional portfolio mobile application showcasing personal information, projects, skills, and contact details with interactive elements. Built with React Native and Expo.

![App Preview](https://via.placeholder.com/300x600?text=Portfolio+App+Preview)

## Key Features

- 📱 Interactive contact links (email, phone, maps)
- 🎓 Education and certification display
- 💻 Project portfolio with technology stack tags
- 🛠 Skills matrix with scrolling view
- 🎨 Dark theme UI with accent colors
- 📜 Scrollable content sections
- 📍 Interactive map location integration

## Installation & Setup

### Prerequisites
- Node.js (v14+)
- Expo CLI (`npm install -g expo-cli`)
- iOS/Android simulator or physical device

```bash
    git clone https://github.com/flickShot555/portfolio-app.git
    cd portfolio-app
    npm install
```
### Running the App
```bash
    npx expo start
```

## App Structure

### Core Components
**Interactive Contact System**

    -Direct email composition
    
    -One-Tap phone calling
    
    -GPS Loaction integration


**Content Sections**
    
    -Certifications

    -Project Portfolio (14+ projects)

    -Technical Skills (10+ technologies)

    -Contact Information

### Technology Stack

    -React Native

    -Expo Status Bar

    -React Native Linking API

    -SafeAreaView for device compatibility

    -ScrollView for content navigation


## Code Highlights
**Key Functions** 
``` bash
// Handle URL interactions
const handlePress = (url) => {
  Linking.openURL(url);
}

// Open map location with coordinates
const openLocation = () => {
  const lat = 33.628263;
  const long = 73.1004454;
  const url = `geo:${lat},${long}?q=${lat},${long}`;
  Linking.openURL(url);
}

```

**UI Components**

```bash
<SafeAreaView style={styles.container}>
  <ScrollView>
    <ProfileBanner />
    <CertificationsSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
  </ScrollView>
</SafeAreaView>
```

## Style Guide

### colour Scheme

**Primary**: #1a1a1a (Dark Background)

**Accent**: #ff4509 (Orange Highlights)

**Text**: #ffffff (White)

### Layout

Responsive flexbox design

Section padding: 20px

Consistent border radii (10px)

**Typography**

Headings: 28px Bold

Section Titles: 15px Bold Orange

Body Text: 14px Regular


## DataStructure

```bash

// Example Project Entry
{
  title: "Car Showroom Management System",
  stack: "Web | Full Stack",
  technologies: ["React", "Node.js", "MySQL"]
}

// Skills Matrix
["React Native", "React", "HTML/CSS/JS", "API Integration", 
 "PHP", "Laravel", "MySQL", "Java", "Python"]

```

## Roadmap

    -Add project details modal

    -Implement skill proficiency levels

    -Add social media integration

    -Include PDF resume download

    -Add dark/light theme toggle

## Contribution Guidelines

    -Fork the repository

    -Create feature branch (git checkout -b feature/improvement)

    -Commit changes with descriptive messages

    -Push to branch

    -Open pull request