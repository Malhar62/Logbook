import React, { useState } from 'react';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const BASE_HEIGHT = 759.27272
const BASE_WIDTH = 392.7272
export const HEIGHT = (data) => {
    var result = height * data / BASE_HEIGHT;
    return result;
}

export const WIDTH = data => {
    var res = width * data / BASE_WIDTH;
    return res;
}
/**export const LoginTopHeight = () => {
    var viewheight = HEIGHT / 2.3727;
    return viewheight
}
export const LoginBottomHeight = () => {
    var height = HEIGHT / 2.3727;
    var result = HEIGHT - height;
    return result;
}
export const setMargin = () => {
    var answer = HEIGHT / 25.31;
    return answer;
}
export const logoDimension = () => {
    var img = HEIGHT / 9.5;
    return img;
}
export const buttonSize = () => {
    var measure = HEIGHT / 18.9;
    return measure;
}
export const dashHeight = () => {
    var res = HEIGHT / 1.12;
    return res;
}
export const dashWidth = () => {
    var res = WIDTH / 1.12;
    return res;
}
export const horizontal = () => {
    var res = WIDTH / 17.5;
    return res;
} */