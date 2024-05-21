import { useState } from "react"

export default function SignupStatePage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    function onChangeEmail(event) {
        console.log(event); // 나의 행동
        console.log(event.target); // 작동된 태그
        console.log(event.target.value); // 작동된 태그에 입력된 값
        setEmail(event.target.value);
    }

    function onChanePassword(event){
        setPassword(event.target.value);
    }

    function onClickSiginup(){
        console.log(email);
        console.log(password);
        if (email.includes("@") === false) {
            alert("이메일 형식이 올바르지 않습니다.")
            // document.getElementById("myerror").innerText = "이메일 형식이 올바르지 않습니다."
            setEmailError("이메일 형식이 올바르지 않습니다.")
        } else {
            alert("회원가입을 축하합니다.")
        }
    }
  return (
    <>
        이메일: <input type="text" onChange={onChangeEmail}/>
        {/* <div id="myerror"></div> */}
        <div>{emailError}</div>
        비밀번호: <input type="password" />
        <button onClick={onClickSiginup}>회원가입</button>
    </>
  )
}
