import styled from "@emotion/styled";
import { Button } from "@mui/material";
export default function Balance(){
    const DIV = styled.div`
        width:1520px;
        height:720px;
        background-color:skyblue;
    `
    return(
        <>
            <DIV className="flex flex-col justify-center items-center">
                <h1>PRESS</h1>
                <h4>START</h4>
                <Button variant="contained">START</Button>
            </DIV>
        </>
    )
};