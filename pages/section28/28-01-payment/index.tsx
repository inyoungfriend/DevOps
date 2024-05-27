declare const window: typeof globalThis & {
  IMP: any;
}
export default function PaymentPage(): JSX.Element {
    const onClickPayment = (): void => {
        const IMP = window.IMP
        IMP.init("imp55525343");
        IMP.request_pay(
            {
              pg: "{kakaopay}.{상점 ID}",
              pay_method: "card",
            //   merchant_uid: `payment-${crypto.randomUUID()}`, // 주문 고유 번호 주석처     name: "노르웨이 회전 의자",
              amount: 64900,
              buyer_email: "gildong@gmail.com",
              buyer_name: "홍길동",
              buyer_tel: "010-4242-4242",
              buyer_addr: "서울특별시 강남구 신사동",
              buyer_postcode: "01181",
              m_redirect_uri: "http://localhost:3000/section28/28-01-payment" // 모바일에서 결제 시 페이지 주소가 바뀌므로 결제 완료 후 돌아갈 주소
            },
            // function (response) {
            //   // 결제 종료 시 호출되는 콜백 함수
            //   // response.imp_uid 값으로 결제 단건조회 API를 호출하여 결제 결과를 확인하고,
            //   // 결제 결과를 처리하는 로직을 작성합니다.
            // },
            (rsp: any) => {
              // callback
              if (rsp.success === true) {
                console.log(rsp);
                // 백엔드에 결제관련 데이터 넘겨주기(mutation 실행)
                // createPointTransactionOfLoading
              } else {
                // 결제 실패 시 로직
              }
            }
          );
    }
  return (
    <>
    <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
    <button onClick={onClickPayment}>결제하기</button>
    </>
  )
}

