import { StyleSheet } from 'react-native';

import { Spacing } from '@/presentation/theme';

export const layout = StyleSheet.create({
    screen: {
        flex: 1,
    },
    padded: {
        flex: 1,
        padding: Spacing.three,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: Spacing.three,
        paddingHorizontal: Spacing.four,
    },
    list: {
        padding: Spacing.three,
        flexGrow: 1,
    },
    separator: {
        height: Spacing.two,
    },
    card: {
        padding: Spacing.three,
        borderRadius: Spacing.two,
        gap: Spacing.two,
    },
    row: {
        gap: Spacing.one,
    },
    rowBetween: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pressed: {
        opacity: 0.7,
    },
});
