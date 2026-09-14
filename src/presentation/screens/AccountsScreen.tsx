import { useRouter } from 'expo-router';
import { FlatList, RefreshControl, View } from 'react-native';

import { Account } from '@/domain/entities/Account';
import { AccountCard } from '@/presentation/components/AccountCard';
import { ThemedView } from '@/presentation/components/themed-view';
import { useTheme } from '@/presentation/hooks/use-theme';
import { useAccounts } from '@/presentation/hooks/useAccounts';
import { layout } from '@/presentation/styles';

export default function AccountsScreen() {
    const router = useRouter();
    const theme = useTheme();
    const { accounts, refreshing, onRefresh } = useAccounts();

    const openAccount = (account: Account) => {
        router.push({
            pathname: '/account/[id]',
            params: {
                id: account.id + '',
                number: account.number,
                type: account.type,
                balance: account.balance.toString(),
            },
        });
    };

    return (
        <ThemedView style={layout.screen}>
            <FlatList
                data={accounts}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <AccountCard account={item} onPress={openAccount} />}
                contentContainerStyle={layout.list}
                ItemSeparatorComponent={() => <View style={layout.separator} />}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={theme.text} />}
            />
        </ThemedView>
    );
}
