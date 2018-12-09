import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Title = styled.div`
    font: 48px "Cera Basic", sans-serif;
    margin-bottom: 4px;
`;

export const Description = styled.p`
    font: 20px 'Demos Next Pro';
    line-height: 1.6;
    margin-top: 15px;
`;

export const ChartTitle =  styled.p`
    font: 28px 'Cera Basic';
    font-weight: bold;
    line-height: 1.2;
`;

export const ChartUnderline = styled(SVG)`
    display: block;
    margin-right: auto;
    width: 110px;
    height: 7px;
    margin-top: 5px;
    & svg {
        display: inline-block;
        vertical-align: top;
    }
`;

export const Tips = styled.li`
    position: relative;
    font-weight: normal;
    font-family: "Demos Next Pro", serif;
    font-size: 20px;
    &:before {
        display: inline-block;
        content: '—';
        margin-right: 15px;
    }
    & a{
        text-decoration: underline;
    }
`;
