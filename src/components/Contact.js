import styled from "@emotion/styled";
export default function Contact(){
    const DIV1 = styled.div`
        height:610px;
    `
    const DIV2 = styled.div`
       width:1520px;
       height:500px;
       margin: 0 auto;
    `
    const H3 = styled.h3`
        line-height:150px;
    `
    return(
        <DIV1>
            <DIV2 className="shadow-2xl bg-blue-300 ">
                <H3 className="text-center text-3xl">CONTACT</H3>
                <h3 className="text-xl text-center p-5"><i className="fa-brands fa-github pr-3"></i>MY<a href="#" className="text-white pl-2">Github</a></h3>
                <h3 className="text-xl text-center p-5"><i className="fa-regular fa-square-phone-flip pr-2"></i>HP:010-XXXX-XXXX</h3>
                <h3 className="text-xl text-center p-5">
                    <i className="fa-solid fa-envelope pr-3"></i>
                    youmy1409@gamil.com
                </h3>
            </DIV2>
        </DIV1>
    )
};