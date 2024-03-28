import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header: {
      width: '100%',
      height: 90,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      flexDirection: 'row',
    },
    title: {
      color: 'white',
      fontSize: 18,
    },
    text: {
      color: '#ccc', 
    },
    Micblock: {
        width: '100%',
        height: 160,
        backgroundColor: '#E3E3EE',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
      },
      Micbg: {
        backgroundColor: '#E3E3EE',
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      innerContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      formSelect: {
        width: 150,
        height: 100,
        borderWidth: 0,
        borderColor: "black",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      },
      button: {
        backgroundColor: "black",
        padding: 10,
        borderRadius: 5,
        marginLeft: 20,
      },
      buttonText: {
        color: "white",
        fontWeight: "bold",
      },
  });

export default styles;
