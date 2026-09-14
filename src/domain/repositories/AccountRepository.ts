import { Account } from '../entities/Account';

export type AccountRepository = {
    getAccounts(): Promise<Account[]>;
};
