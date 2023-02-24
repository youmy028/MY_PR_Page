
import styled from "@emotion/styled";
export default function Skills(){
    const ICON = styled.i`
        width:500px;
    `
    const DIV = styled.div`
        
        height:600px;
        
    `
    return(
        
        <DIV>
            <div className="pt-28">
                <h1 className="text-2xl text-center">SKILLS</h1>
                <h3 className="pt-3 text-center">WHAT I HAVE</h3> 
            </div>
            <div className="grid grid-cols-3 pt-10">
                <div className="text-center text-7xl"><ICON className="fa-brands fa-html5 text-red-500"></ICON><span className="flex flex-1 justify-center text-xl pt-5">HTML</span><span className="flex flex-1 justify-center pt-2 pb-5 text-sm">마크업,페이지 콘텐트 구조화,폼요소,테이블 등 사용</span></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-css3-alt text-blue-500"></ICON><span className="flex flex-1 justify-center text-xl pt-5">CSS</span><span className="flex flex-1 justify-center pt-2 pb-5 text-sm">배경 스타일링, 텍스트 스타일링 등</span></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-js text-yellow-500"></ICON><span className="flex flex-1 justify-center text-xl pt-5">Javascript</span><span className="flex flex-1 justify-center pt-2 pb-5 text-sm">네비게이션 구성, 탭 메뉴 구현, 폼, 유효성검사 등</span></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-react text-blue-400  "></ICON><span className="flex flex-1 justify-center text-xl pt-5">REACT</span><span className="flex flex-1 justify-center pt-2 pb-5 text-sm">함수형 컴포넌트, React-hooks 등</span></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-github"></ICON><span className="flex flex-1 justify-center text-xl pt-5">Git</span><span className="flex flex-1 justify-center pt-2 pb-5 text-sm">프로젝트 코드 관리, add, commit, pull, push, branch 사용</span></div>
                <div className="text-center text-7xl"><ICON className="fa-brands fa-python text-yellow-400"></ICON><span className="flex flex-1 justify-center text-xl pt-5">Python</span><span className="flex flex-1 justify-center pt-2 pb-3 text-sm">ArrayList, Pandas등 사용</span></div>
            </div>
        </DIV> 
    )
}