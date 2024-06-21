// src/styles/HomeScreenStyles.ts
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

export const FONTS = {
    GloockRegular: 'Gloock-Regular',
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 0.5,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 4,
  },
  ImageLayoutStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 4,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.4,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      },
      android: {
        elevation: 4,
      },
    }),
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    color: '#3d4461',
    fontSize: width < 360 ? 14 : 16,
    fontWeight: 'bold',
    marginBottom: 5,
    fontFamily: FONTS.GloockRegular,
    letterSpacing: 1,
  },
  subtitle: {
    color: '#666',
    fontSize: width < 360 ? 12 : 14,
    marginBottom: 5,
  },
  price: {
    color: '#34bbe9',
    fontWeight: 'bold',
    fontSize: width < 360 ? 14 : 16,
    marginBottom: 5,
  },
});

export default styles;
