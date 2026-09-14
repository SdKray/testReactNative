import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { ThemedText } from '@/presentation/components/themed-text';
import { ThemedView } from '@/presentation/components/themed-view';
import { layout } from '@/presentation/styles';
import { formatCurrency } from '@/presentation/utils/currency';

export default function AccountDetail() {
    const { number, type, balance } = useLocalSearchParams();

    return (
        <ThemedView style={layout.padded}>
            <ThemedView type='backgroundElement' style={layout.card}>
                <View style={layout.row}>
                    <ThemedText type='small' themeColor='textSecondary'>
                        No. de cuenta
                    </ThemedText>
                    <ThemedText type='smallBold'>{number}</ThemedText>
                </View>

                <View style={layout.row}>
                    <ThemedText type='small' themeColor='textSecondary'>
                        Tipo
                    </ThemedText>
                    <ThemedText type='smallBold'>{type}</ThemedText>
                </View>

                <View style={layout.row}>
                    <ThemedText type='small' themeColor='textSecondary'>
                        Saldo disponible
                    </ThemedText>
                    <ThemedText type='subtitle'>{formatCurrency(Number(balance))}</ThemedText>
                </View>
            </ThemedView>
        </ThemedView>
    );
}
