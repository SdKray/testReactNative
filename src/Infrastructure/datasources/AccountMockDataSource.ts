import { Account } from '@/domain/entities/Account';

const ACCOUNTS: Account[] = [
    { id: 1, number: '1234567890', type: 'Cuenta Débito', balance: 24580.3 },
    { id: 2, number: '9988776655', type: 'Cuenta Ahorro', balance: 1200.5 },
];

//GET /api/accounts
export async function getMockAccounts() {
    await new Promise(resolve => setTimeout(resolve, 700));
    return ACCOUNTS;
}
