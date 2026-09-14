import { AccountRepository } from '@/domain/repositories/AccountRepository';

export function getAccounts(repository: AccountRepository) {
    return repository.getAccounts();
}
