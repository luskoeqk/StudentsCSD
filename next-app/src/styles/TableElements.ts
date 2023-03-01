import styled from 'styled-components';


export const StudentsTableStyles = styled.table`
  
  font-family: 'lato', sans-serif;
  box-shadow: 10px 10px 8px 10px #888888;

  border-collapse: collapse;
  width: 100%;

  th, td {
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: #F2F3F5;
  }

  th {
    color: white;
    font-weight: bold;
    background-color: #1976d2;
  }
    
  tr {
    background-color: #ffffff;
    box-shadow: 0px 0px 9px 0px rgba(0,0,0,0.1);
    padding: 25px;
  }

  tr:hover {
    background-color: #ddd;
  }

  thead{
    text-transform: uppercase;
    letter-spacing: 0.03em;
    padding: 10px;
  }
`

export const StudentsTableAddStyles = styled.div`

    padding: 40px 0px 40px 0px;
    
    button {
        width: 10vw;
        height: 10vh;

        box-shadow:inset 0px 1px 0px 0px #bbdaf7;
        background:linear-gradient(to bottom, #79bbff 5%, #378de5 100%);
        background-color:#79bbff;
        border-radius:6px;
        border:1px solid #84bbf3;
        display:inline-block;
        cursor:pointer;
        color:#ffffff;
        font-family:Arial;
        font-size:15px;
        font-weight:bold;
        padding:6px 24px;
        text-decoration:none;
        text-shadow:0px 1px 0px #528ecc;
    }
    
`