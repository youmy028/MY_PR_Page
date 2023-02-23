import React from "react";
import styled from "@emotion/styled";

export default function Content1(){
    const DIV = styled.div`
        width:1520px;
        height:720px;
        margin:0 auto;
    `
    const IMG = styled.img`
        width:350px;
        height:350px;
        border-radius:50%;
    `
    return(
        
            <DIV className="flex shadow-2xl overflow-hidden min-w-max bg-blue-300">
                <div className="flex flex-grow-1  items-center justify-center p-28 ">
                    <IMG src="/img/img_5.jpg"></IMG>
                </div>
                <div className=" flex flex-grow-2 justify-center items-center">
                    <div className="bg-blue-500 h-32 rounded-md ">
                        <h1 className="text-6xl pl-5 pt-5">안녕하세요</h1>
                        <h4 className="text-3xl p-2">"Frontend Developer" 정준호입니다.</h4>
                    </div>
                </div>
            </DIV>
        
    )
}