import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors.ts';

const HomeWelcome = ({ colorr }: { colorr: string }) => {
  const username = "GlassDoor 4.5/5"; 
  const username1 = "Facebook 4.4/5";
  const username2 = "Google review 4.5/5";
  const username4 = "Well-being rating: 4.5/5";
  const username3 = "Indeed 4.5/5";
  const username5 = "Most relevant tags";
  const backgroundImageUrl = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/XdRdpp79_2XbKelWS-zhc3y-oK3cKTB5/gR_5zmjCUgQIrcJgAA0J-j-zP-qm4TlN/0EuukTlUNA2ZJKWc805IWYyfjjtfDHXR/4uO3pHMJpgE.jpg"; // background image link
  const imageUrl1 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/2tlSoSr0l-nBi5-_h6MsbNSzTmbAXbAo/xNDQm0l242UGsFBTcIUaYOioyCO0PPfN/pFppKf21sq8DrNbt0OZz-udUf_nxs8Ei/AeqhelukQvk.png";
  const imageUrl2 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/z4ra9avuCbZyB5qPvxuG_w7x-0Aus2Xp/2rq8eDBNB7094TWrUWm5E5abH1IIiEDy/yL0hLaSO9jXGU7imRHWfZOjLrUmyHd40/qNwIYUSQRsM.png";
  const imageUrl3 = "https://static.wfolio.com/file/AqiFFw_TXMM4LDwoI2TPSYAM1lHVLAGB/F3eUE25SDaC3OUQ9TuvC-m2zOPPnCGNt/gIPYDREcvws-J8ylN-gOQann0SHYmF7g/w2crzgCqEowIotVvU4N1fuI7BlltGILt/_gX513We6eGI3hfISN0dx0BqRda51zyX/pJKfKik97cM.png";
  

  return (
    <ImageBackground source={{ uri: backgroundImageUrl }} style={[styles.header, { backgroundColor: colorr }]}>
      <LinearGradient
        colors={[Colors.ss.gradient1, Colors.ss.gradient2, 'transparent']}
        start={[0, 1]}
        end={[1, 0]}
        style={styles.gradient}>
        <Text style={styles.welcomeText}>This company rating:</Text>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.username1}>{username1}</Text>
        <Text style={styles.username2}>{username2}</Text>
        <Text style={styles.username3}>{username3}</Text>
        <Text style={styles.username4}>{username4}</Text>
        <Text style={styles.username5}>{username5}</Text>
        <Image source={{ uri: imageUrl1 }} style={styles.image1} />
        <Image source={{ uri: imageUrl2 }} style={styles.image2} />
        <Image source={{ uri: imageUrl3 }} style={styles.image3} />
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    height: 270, // Increased height to accommodate all text elements
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    overflow: 'hidden',
    marginTop: -20,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
  },
  welcomeText: {
    fontSize: 18,
    color: Colors.ss.font,
    position: 'absolute',
    fontWeight: 'bold',
    top: -20,
    left: 10,
    marginTop: 50
  },
  username: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 75, // Adjusted position
    left: 10,
  },
  username1: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 105, // Adjusted position
    left: 10,
  },
  username2: {
    fontSize: 12,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 135, // Adjusted position
    left: 10,
  },
  username3: {
    fontSize: 13,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 165, // Adjusted position
    left: 10,
  },
  username4: {
    fontSize: 20,
    color: Colors.ss.font,
    fontWeight: 'bold',
    position: 'absolute',
    top: 100, // Adjusted position
    left: 190,
    width: 200,
    flexWrap: 'wrap',
    backgroundColor: 'rgba(0, 90, 0, 0.3)',
  },
  username5: {
    fontSize: 8,
    color: Colors.ss.font,
    position: 'absolute',
    top: 210, // Adjusted position
    left: 155,
    opacity: 0.6,
  },
  
  image1: {
    width: 98,
    height: 22,
    borderRadius: 20,
    position: 'absolute',
    top: 232,
    right: 255,
  },
  image2: {
    width: 92,
    height: 25,
    borderRadius: 25,
    position: 'absolute',
    top: 230,
    right: 155,
  },
  image3: {
    width: 110,
    height: 26,
    borderRadius: 25,
    position: 'absolute',
    top: 230,
    right: 34,
  },
});

export default HomeWelcome;