import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/presentation/components/animated-icon';
import { AppNavigator } from '@/presentation/navigation/AppNavigator';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AnimatedSplashOverlay />
            <AppNavigator />
        </ThemeProvider>
    );
}
