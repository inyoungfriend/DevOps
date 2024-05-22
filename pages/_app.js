// import "@/styles/globals.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function App({ Component, pageProps }) {
  // GraphqQL setting
	const client = new ApolloClient({
		uri: "http://backend-example.codebootcamp.co.kr/graphql",
		cache: new InMemoryCache(), // 컴퓨터의 메모리에다가 벡엔드에서 받아온 데이터 임시로 저장해놓기
	});
	return (
    <>
    <div>_app.js 컴포넌트 시작</div>
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
    <div>_app.js 컴포넌트 끝</div>
    </>
	);
}
