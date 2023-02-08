
import styled from 'styled-components';


export const LayoutWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

`;

export const HeaderWrapper = styled.div`

    position: absolute; 
    top: 0; 
    left: 0;
    background-color: #2d82d6; 
    text-transform: uppercase; 
    justify-content: center; 
    align-items: center; 
    min-height: 64px;
    height: 40px; 
    color: red;
    width: 99vw;
    padding-left: 15vw;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.19), 0px 6px 6px rgba(0, 0, 0, 0.23);
`;

export const SidebarWrapper = styled.div`
    position: sticky; 
    bottom: 0;
    left: 0;
    background-color: #072ac8; 
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: 100vh;
`;