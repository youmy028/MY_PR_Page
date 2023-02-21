
import styled from "@emotion/styled";
export default function Skills(){
    const ICON = styled.i`
        height:280px;
        width:500px
    `
    const DIV = styled.div`
        width:1500px;
        height:720px;
        margin:0 auto;
    `
    return(
        
        <>
            <div className="pt-28">
                <h1 className="text-2xl text-center">SKILLS</h1>
                <h3 className="pt-3 text-center">WHAT I HAVE</h3> 
            </div>
            <div className="grid grid-cols-3 pt-10">
                <div className="text-center text-7xl"><ICON className="fa-brands fa-html5 text-red-500"></ICON></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-css3-alt text-blue-500"></ICON></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-js text-yellow-500"></ICON></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-react text-blue-400  "></ICON></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-github"></ICON></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-python text-yellow-400"></ICON></div>
            </div>
        </> 
    )
}