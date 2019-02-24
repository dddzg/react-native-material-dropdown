import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import * as React from 'react'
interface IDropdownProps {
  label?:string,
  error?:string,
  fontSize?:number,
  labelFontSize?:number,
  baseColor?:string,
  itemColor?:string,
  textColor?:string,
  itemCount?:number,
  data:Object,
  value?:string,
  containerStyle?:Object,
  onChangeText?:Function,
  container:JSX.Element,
  textStyle?:StyleProp<TextStyle>,
  pickerStyle?:StyleProp<TextStyle>,
  dropdownPosition?:number
}
export class Dropdown extends React.Component<IDropdownProps>{}
