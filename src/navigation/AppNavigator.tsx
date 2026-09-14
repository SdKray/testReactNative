import { Stack } from 'expo-router';

export function AppNavigator() {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ title: 'Mis cuentas' }} />
            <Stack.Screen name='account/[id]' options={{ title: 'Detalle de cuenta' }} />
        </Stack>
    );
}
