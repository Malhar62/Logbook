import React, { useState } from 'react';
import { Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export const ShiftHeight = () => {
    var viewheight = HEIGHT / 1.177;
    return viewheight
}
export const ShiftWidth = () => {
    var height = WIDTH / 1.09;
    return height;
}
export const buttonWidth1 = () => {
    var res = WIDTH / 2.7;
    return res;
}
export const buttonWidth = () => {
    var res = WIDTH / 1.22;
    return res;
}
export const headerHeight = () => {
    var res = HEIGHT / 12.5;
    return res;
}
export const textheight = () => {
    var res = WIDTH / 1.4;
    return res;
}