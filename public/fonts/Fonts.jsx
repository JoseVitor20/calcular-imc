import { useFonts, JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import AppLoading from 'expo-app-loading'; 

export default function MinhaFonte() {
      const [fontsLoaded] = useFonts({
            JosefinSans_400Regular,
      });

      if (!fontsLoaded) {
            return <AppLoading />;
      }
} 