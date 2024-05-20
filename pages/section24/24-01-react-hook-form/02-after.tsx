import { useForm } from "react-hook-form";

interface IFormData {
    writer: string;
    title: string;
    contents: string;
    boardAddress: {
        addressDetail: string;
    }
}
export default function GraphqlMutationPage(): JSX.Element {
    const { register, handleSubmit } = useForm<IFormData>();

    const onClickSubmit = (data): void => {
        console.log(data);
    };

    console.log("rerendering 되나요?")

    return (
        <form onSubmit={handleSubmit(onClickSubmit)}>
            작성자: <input type="text" {...register("writer")} />
            제목: <input type="text" {...register("title")} />
            내용: <input type="text" {...register("contents")} />
            주소: <input type="text" {...register("boardAddress.addressDetail")} />
            <button type="submit">GRAPHQL-API 요청하기</button>
        </form>
    )
}