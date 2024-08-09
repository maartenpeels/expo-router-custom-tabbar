import {TopTabs} from "@/components/top-tab-bar/TopTabs";
import {MaterialIcons} from "@expo/vector-icons";
import {Dimensions, StyleSheet} from "react-native";

const WINDOW_WIDTH = Dimensions.get('window').width;
const TABS = 2;
const TAB_HEIGHT = 60;
const TAB_INDICATOR_SPACING = 10;

const ModalLayout = () => {
  const tab1Icon = () => <MaterialIcons name="home" color={"#313131"} size={26}/>
  const tab2Icon = () => <MaterialIcons name="settings" color={"#313131"} size={28}/>

  return (
    <TopTabs screenOptions={
      {
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarIndicatorStyle: styles.tabBarIndicator
      }}>
      <TopTabs.Screen name="tab1" options={{tabBarIcon: tab1Icon, tabBarShowLabel: false}}/>
      <TopTabs.Screen name="tab2" options={{tabBarIcon: tab2Icon, tabBarShowLabel: false}}/>
    </TopTabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: TAB_HEIGHT,
  },
  tabBarItem: {
    height: TAB_HEIGHT,
  },
  tabBarIndicator: {
    backgroundColor: '#818181',
    width: WINDOW_WIDTH / TABS - TAB_INDICATOR_SPACING * 2,
    height: TAB_HEIGHT - TAB_INDICATOR_SPACING * 2,
    top: TAB_INDICATOR_SPACING,
    left: TAB_INDICATOR_SPACING,
    borderRadius: 10,
  },
});

export default ModalLayout;
