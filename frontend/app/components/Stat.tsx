import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Txt from './Txt';

const Stat = (
    { iconName, count, colors}:
    { iconName: keyof typeof Ionicons.glyphMap; count: number; colors: {c1: string, c2: string}}) => (
    <View style={[styles.stat, { backgroundColor: colors.c1 }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
            <Ionicons name={iconName} size={14} color={colors.c2} />
            <Txt text={count.toString()} style_={{fontSize: 12, color: colors.c2}} />
        </View>
    </View>
)

const styles = StyleSheet.create({ 
    stat: {
		borderRadius: 25,
        padding: 5,
        paddingHorizontal: 10,
		alignItems: 'center',
		justifyContent: 'center',
	},
})

export default Stat;