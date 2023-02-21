
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import{useLocation,
  NavLink,
} from "react-router-dom";

export default function PreviewPage() {
  const location = useLocation();

  const name = "안녕하세요 저는 정준호라고해요 ^^ 반가워요!";
  const [nameText, setNameText] = useState("");
  const [nameCount, setNameCount] = useState(0);
  useEffect(() => {
      const interval = setInterval(() => {
      setNameText(nameText + name[nameCount]);
      setNameCount(nameCount + 1);
      //반복 동작
      if (nameCount >= name.length) {
        setNameText("");
        setNameCount(0);
        // if (nameCount === name.length) {
          //   clearInterval(interval);
          // }
          clearInterval(interval);
        }}, 200);
    //한 번만 동작
    // }
    return () => {
      clearInterval(interval);
    }; // 언마운트시 setInterval을 해제합니다
  });
  return (
    <div className="text-center mt-5 h-5">
      <p >{nameText}</p>
      <Button variant="contained">{location.pathname == "/preview" && (
              <NavLink to="/main" className="select-none">
                PRESS
              </NavLink>
            )}</Button>
    </div>
  );
}