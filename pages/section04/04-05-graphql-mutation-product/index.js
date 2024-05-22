import { useMutation, gql } from "@apollo/client";

const CREATE_PRODUCT = gql`
	mutation createProduct($seller: String, $createProductInput: CreateProductInput!){ # 변수타입
		createProduct(seller: $seller, createProductInput: $createProductInput) { # 실제 내가 전달할 변수
			_id
			number
			message
		}
	}
`;

export default function GraphqlMutationPage() {
	const [createProduct] = useMutation(CREATE_PRODUCT);
	const onClickSubmit = async () => {
		const result = await createProduct({
            variables: { // variables = $
                seller: "훈이",
                createProductInput: {
					name: "마우스",
					detail: "really goood",
					price: 9900
				}
            }
        });
		console.log(result);
	};
	return <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>;
}
