import axios from "axios"
import 나만의페이지 from "@/pages/section01/01-01-example";

export default function RestGetPage() {
    function onClickAsync() {
        const result = axios.get("https://koreanjson.com/posts/1")
        console.log(result);
    }

    async function onClickSync() {
        const result = await axios.get("https://koreanjson.com/posts/1")
        console.log(result);
        console.log(result.data.title);
    }
  return (
    <>
    <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
    <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    <나만의페이지 />
    </>
  )
}
