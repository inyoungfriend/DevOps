import { useMutation,gql } from "@apollo/client";
import { useState } from "react";

export default function GraphqlMutationPage() {
    const [writer, setWriter] = useState();
    const [title, setTitle] = useState();
    const [contents, setContents] = useState();

    const onClickSubmit = async () => {}

    const onChangeWriter = (event) =>{
        setWriter(event.target)
    }
    const onChangeTitle = (event) =>{
        setTitle(event.target)
    }
    const onChangeContents = (event) =>{
        setContents(event.target)
    }

    console.log("rerendering 되나요?")
        
    return (
        <>
            작성자: <input type="text" onChange={onChangeWriter} />
            제목: <input type="text" onChange={onChangeTitle} />
            내용:<input type="text" onChange={onChangeContents} />
            <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
        </>
    )
}