import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
	query {
		fetchBoard(number:2) {
			number
			writer
			title
			contents
		}
	}
`;

export default function StaticRoutingMovedPage() {
	const { data } = useQuery(FETCH_BOARD);
	console.log(data);
	// console.log(data?.fetchBoard.title);
	return (
		<>
			<div>2번 게시글로 이동 성공</div>
			<div>작성자: {data && data.fetchBoard?.writer}</div>
			<div>제목: {data?.fetchBoard?.title}</div>
			<div>내용: {data ? data.fetchBoard?.contents : "로딩 중"}</div>      
		</>
	);
}