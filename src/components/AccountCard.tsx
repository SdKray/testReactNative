import { Pressable, View } from 'react-native';

import { Account, formatCurrency } from '../models/Account';
import { layout } from '../styles';
import { ThemedText } from './themed-text';
import { ThemedView } from './themed-view';

export function AccountCard({ account, onPress }: { account: Account; onPress: (account: Account) => void }) {
    return (
        <Pressable onPress={() => onPress(account)} style={({ pressed }) => pressed && layout.pressed}>
            <ThemedView type='backgroundElement' style={layout.card}>
                <View style={layout.rowBetween}>
                    <View>
                        <ThemedText type='smallBold'>{account.type}</ThemedText>
                        <ThemedText type='small' themeColor='textSecondary'>
                            {account.number}
                        </ThemedText>
                    </View>
                    <ThemedText themeColor='textSecondary'>›</ThemedText>
                </View>

                <ThemedText type='small' themeColor='textSecondary'>
                    Saldo disponible
                </ThemedText>
                <ThemedText type='default'>{formatCurrency(account.balance)}</ThemedText>
            </ThemedView>
        </Pressable>
    );
}
