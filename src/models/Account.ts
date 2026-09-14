export interface Account {
    id: number;
    number: string;
    type: string;
    balance: number;
}

export function formatCurrency(amount: number) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
    }).format(amount);
}
