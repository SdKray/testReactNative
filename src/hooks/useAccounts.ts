import { useCallback, useEffect, useState } from 'react';

import { Account } from '../models/Account';
import { getAccounts } from '../services/accountService';

export function useAccounts() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const load = useCallback(async (refresh = false) => {
        try {
            if (refresh) setRefreshing(true);
            else setLoading(true);

            setError(null);
            const data = await getAccounts();
            setAccounts(data);
        } catch (e) {
            console.log(e);
            setError('No se pudieron cargar las cuentas');
            if (!refresh) setAccounts([]);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        load();
    }, [load]);

    return {
        accounts,
        loading,
        refreshing,
        error,
        refetch: () => load(false),
        onRefresh: () => load(true),
    };
}
