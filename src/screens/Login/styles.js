import { StyleSheet } from 'react-native';
import { responsive } from '../../utils/responsive';
import { COLORS } from '../../consts/design/theme';

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: COLORS.backgroundLight,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: responsive.number(20),
    },
    helloText: {
        fontSize: responsive.fontSize(24),
        color: COLORS.primaryDark,
        fontWeight: 'bold',
        marginBottom: responsive.number(20),
    },
    input: {
        width: '100%',
        height: responsive.number(50),
        backgroundColor: COLORS.white,
        borderRadius: responsive.number(8),
        paddingHorizontal: responsive.number(15),
        marginBottom: responsive.number(15),
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    button: {
        width: '100%',
        height: responsive.number(50),
        backgroundColor: COLORS.primaryDark,
        borderRadius: responsive.number(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsive.number(10),
    },
    buttonText: {
        color: COLORS.white,
        fontSize: responsive.fontSize(16),
        fontWeight: 'bold',
    },
    googleButton: {
        width: '100%',
        height: responsive.number(50),
        backgroundColor: COLORS.googleRed,
        borderRadius: responsive.number(8),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsive.number(15),
    },
});

export default styles;
