import styled from "@emotion/styled";
import Content1 from "../components/Content1";
import Header from "../components/Header"
import Skills from "../components/SkIlls";
import Contact from "../components/Contact";
import Balance from "./Balance";
import TicTacToc from "./TicTacToc";

export default function MainPage(){
    const WRAP = styled.div`
     width:100%;
     height:100%;
    `
    const CONTAINER = styled.div`
        width:1520px;
        margin:0 auto;
    `
    return(
        <WRAP>
            <CONTAINER>
                <Header/>
                <Content1/>
                <Skills/>
                <Contact/>
                <Balance/>
                <TicTacToc className="bg-red-500"/>
            </CONTAINER>
        </WRAP> 
    );
}