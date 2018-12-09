import styled from "styled-components";

export const ContainerTitle = styled.div`
    position: relative;
    text-align: left;
    z-index: 6;
    margin: 110px 0 0 200px;
    & polyline {
        stroke: #000;
    }
    @media (max-height: 1060px) {
        margin: 50px 0 0 200px;
    }
`;
