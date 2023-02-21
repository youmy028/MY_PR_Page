import styled from "@emotion/styled";

export default function Header(){
    const Li = styled.li`
        listStyle:"none";
    `
    const DIV = styled.div`
        width:1500px;
        height:720px;
        margin:0 auto;
    `
    const Nav = styled.div`
        position:sticky;
        top:0;
        left:0;
        right:0;
        height:50px;
        z-index:9999;
        background-color:white;
    `
    return(
        <>
            <Nav className="border-b-2 flex justify-space items-center">
                <h1 className="text-blue-400 hover:cursor-default p-5">J<span className="text-sm">UNHO</span></h1>
                <ul className="flex flex-1 h-full justify-end ">
                    <Li className="flex hover:underline cursor-pointer text-blue-400 items-center mr-5">ABOUT</Li>
                    <Li className="flex hover:underline cursor-pointer text-blue-400 items-center mr-5">SKILLS</Li>
                    <Li className="flex hover:underline cursor-pointer text-blue-400 items-center mr-5">WORKS</Li>
                    <Li className="flex hover:underline cursor-pointer text-blue-400 items-center mr-5">CONTANT</Li>
                </ul>     
            </Nav>      
                    
        </>
    );  
}