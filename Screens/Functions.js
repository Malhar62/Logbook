import React, { useState } from 'react';
import {Dimensions} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
export const LoginTopHeight = () => {
    var viewheight = HEIGHT / 2.3727;
    return viewheight
}
export const LoginBottomHeight = () => {
    var height = HEIGHT / 2.3727;
    var result = HEIGHT - height;
    return result;
}
export const setMargin=()=>{
    var answer= HEIGHT/25.31;
    return answer;
}
export const logoDimension = () => {
    var img = HEIGHT / 9.5;
    return img;
}
export const buttonSize=()=>{
    var measure=HEIGHT/18.9;
    return measure;
}