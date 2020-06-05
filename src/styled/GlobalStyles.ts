import { createGlobalStyle } from 'styled-components';

export const GlobalTableStyles = createGlobalStyle`
body {
    overflow: hidden;
    font-family: "San Francisco";
    text-align: left;
}
.align-center {
    text-align: center;
}
.align-right {
    text-align: right;
}
.align-left {
    text-align: left;
}
hr {
  display: block;
  left: 0;
  height: 1px;
  border: 0;
  border-top: 1px solid ${props => props.theme.Gray2};
  margin: 1em auto;
  padding: 0;
}
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1em;
  padding: 10px;
  text-align: left;
}
tr:not(:last-child){
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.Gray4};
}
td{
    padding:5px;
}
tr:hover {
  background-color:${props => props.theme.Gray4};
}
a {
    color: ${props => props.theme.Link};
}
.toggleDiv {
    display: table;
    padding: 5px;
  }
.switch {
  position: relative;
  display: table-cell;
  width: 40px;
  height: 25px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.Text};
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 21px;
  width: 21px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider:before {
  -webkit-transform: translateX(15px);
  -ms-transform: translateX(15px);
  transform: translateX(15px);
}
.slider.round {
  border-radius: 34px;
}
.slider.round:before {
  background-color: ${props => props.theme.Gray3};
  border-radius: 50%;
}

::-webkit-scrollbar {
  width: 8px;
}
  
/* Track */
::-webkit-scrollbar-track {
  background: ${props => props.theme.Gray4}
  border-radius: 5px;
}
  
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${props => props.theme.Gray3}; 
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${props => props.theme.Gray2}; 
}

@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}
`;
