import React,{useState, useEffect} from "react";
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";


export default function Content1(){
    const DIV = styled.div`
        width:1520px;
        height:720px;
        margin:0 auto;
        white-space: pre-wrap;
    `
    const IMG = styled.img`
        width:350px;
        height:350px;
        border-radius:50%;
    `
    return(
        <>
            <DIV className="flex shadow-2xl overflow-hidden min-w-max bg-blue-300">
                <div className="flex flex-grow-1  items-center justify-center p-28 ">
                    <IMG src="/img/img_5.jpg"></IMG>
                </div>
                <div className=" flex flex-grow-2 justify-center items-center">
                    <Fade cascade damping={0.1} className="text-5xl p-5">
                        {"안녕하세요\nFront-end Developer\n정준호입니다."}
                    </Fade> 
                </div>
            </DIV>
            
        </>
    )
}