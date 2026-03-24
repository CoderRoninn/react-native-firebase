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
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: responsive.number(20),
    },
    itemContainer: {
        alignItems: 'center',
        gap: responsive.number(15),
    },
    image: {
        width: responsive.number(250),
        height: responsive.number(250),
        borderRadius: responsive.number(15),
        marginBottom: responsive.number(15),
    },
    title: {
        fontSize: responsive.fontSize(24),
        fontWeight: 'bold',
        textAlign: 'center',
        color: COLORS.primaryDark,
    },
    price: {
        fontSize: responsive.fontSize(18),
        color: COLORS.primaryGreen,
        fontWeight: '600',
    },
    rating: {
        fontSize: responsive.fontSize(16),
        color: COLORS.ratingYellow,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.backgroundLight,
    },
    buttonContainer: {
        marginTop: responsive.number(20),
    },
    deleteButtonContainer: {
        marginTop: responsive.number(10),
    },
});

export default styles;
