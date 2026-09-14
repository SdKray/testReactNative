import { getMockAccounts } from '@/Infrastructure/datasources/AccountMockDataSource';

export const accountRepository = {
    getAccounts: getMockAccounts,
};
