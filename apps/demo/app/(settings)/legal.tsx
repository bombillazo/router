import { View, Text } from 'react-native';

export default function App() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Text style={{ fontSize: 36 }}>{__filename}</Text>
        </View>
    );
}