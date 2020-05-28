import { createGlobalStyle } from 'styled-components';

export const GlobalTableStyles = createGlobalStyle`
body {
    overflow: hidden;
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
table {
  border-collapse: collapse;
  width: 100%;
  font-size: 1.2em;
  padding: 10px;
  text-align: left;
}
tr:not(:last-child){
  padding: 8px;
  border-bottom: 1px solid ${props => props.theme.secondary};
}
td{
    padding:5px;
}
tr:hover {
  background-color:${props => props.theme.secondary};
}
a {
    color: ${props => props.theme.hrefColor};
}
.toggleDiv {
    display: table;
    padding: 5px;
  }
  .switch {
      position: relative;
      display: table-cell;
      width: 60px;
      height: 34px;
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
      background-color: ${props => props.theme.textColor};
      -webkit-transition: .4s;
      transition: .4s;
    }
    .slider:before {
      position: absolute;
      content: "";
      height: 26px;
      width: 26px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      -webkit-transition: .4s;
      transition: .4s;
    }
    input:checked + .slider {
      background-color: ${props => props.theme.secondary};
    }
    input:checked + .slider:before {
      -webkit-transform: translateX(26px);
      -ms-transform: translateX(26px);
      transform: translateX(26px);
    }
    .slider.round {
      border-radius: 34px;
    }
    .slider.round:before {
      background-color: ${props => props.theme.primary};
      border-radius: 50%;
    }

    ::-webkit-scrollbar {
        width: 10px;
      }
      
      /* Track */
      ::-webkit-scrollbar-track {
          background: ${props => props.theme.primary}
      }
       
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.secondary}; 
        border-radius: 5px;
      }
      
      /* Handle on hover */
      ::-webkit-scrollbar-thumb:hover {
        background: ${props => props.theme.textColor}; 
      }
`;
