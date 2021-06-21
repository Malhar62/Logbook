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
export const setMargin1 = () => {
    var answer = HEIGHT / 40;
    return answer;
}
export const iconMargin = () => {
    var res = WIDTH / 1.309;
    return res;
}
export const horizontal = () => {
    var res = WIDTH / 19.6;
    return res;
}
export const buttonSize = () => {
    var measure = HEIGHT / 18.9;
    return measure;
}
export const buttonmargin = () => {
    var answer = HEIGHT / 10;
    return answer;
}
export const buttonWidth=()=>{
var res= WIDTH/1.22;
return res;
}