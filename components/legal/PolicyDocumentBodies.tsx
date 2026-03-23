export function TermsDocumentBody() {
  return (
    <>
      <h2 className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2 pr-10">
        <span className="text-heart-500">01</span> 이용약관
      </h2>
      <div className="prose prose-gray mt-6 space-y-8 text-gray-700">
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            약관 동의
          </h3>
          <p className="leading-relaxed">
            Heart링크를 다운로드·설치·이용함으로써 본 이용약관 및 개인정보처리방침에
            동의한 것으로 봅니다. 동의하지 않으시면 서비스를 이용하실 수 없습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            이용 자격
          </h3>
          <p className="leading-relaxed">
            Heart링크를 이용하려면 만 18세 이상이어야 하며, 법적 구속력 있는 계약을
            체결할 수 있어야 합니다. 서비스를 이용함으로써 위 요건을 충족함을
            인정하는 것입니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            허용 이용
          </h3>
          <p className="leading-relaxed mb-3">
            Heart링크는 합법적인 목적으로만 이용해야 하며, 타인의 권리를 침해하거나
            서비스 이용을 제한하는 방식으로 사용해서는 안 됩니다. 다음 행위는
            금지됩니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>다른 이용자를 괴롭히거나, 학대하거나, 피해를 주는 행위</li>
            <li>타인을 사칭하거나 허위 정보를 유포하는 행위</li>
            <li>스팸, 스크래핑, 자동화 등을 통한 서비스 접근</li>
            <li>당사 동의 없이 영리 목적으로 앱을 이용하는 행위</li>
            <li>안전·관리 기능을 우회하는 행위</li>
          </ul>
          <p className="leading-relaxed mt-4">
            본 약관 또는 커뮤니티 가이드라인을 위반할 경우 계정이 정지되거나
            이용이 종료될 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            안전 및 신고
          </h3>
          <p className="leading-relaxed">
            다른 이용자를 차단하거나 신고할 수 있습니다. 당사는 신고 내용을 검토하여
            경고, 일시 정지, 영구 이용 정지 등의 조치를 취할 수 있으며, 불법 행위에
            대해서는 관련 기관에 신고할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            약관 변경
          </h3>
          <p className="leading-relaxed">
            당사는 필요한 경우 본 약관을 수정할 수 있습니다. 중요한 변경 사항은
            앱 또는 이메일로 안내하며, 변경 후에도 서비스를 계속 이용하시면
            변경된 약관에 동의한 것으로 봅니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            문의
          </h3>
          <p className="leading-relaxed">
            본 이용약관에 대한 문의는{" "}
            <a href="mailto:hello@heartlink.app" className="text-heart-600 hover:underline">
              hello@heartlink.app
            </a>
            로 연락해 주세요.
          </p>
        </div>
      </div>
    </>
  );
}

export function PrivacyDocumentBody() {
  return (
    <>
      <h2 className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2 pr-10">
        <span className="text-heart-500">02</span> 개인정보처리방침
      </h2>
      <div className="prose prose-gray mt-6 space-y-8 text-gray-700">
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            소개
          </h3>
          <p className="leading-relaxed">
            Heart링크(이하 &quot;당사&quot;)는 이용자의 개인정보 보호를 중요하게 생각합니다.
            본 개인정보처리방침은 데이팅·소셜 앱 이용 시 당사가 수집·이용·공개·보호하는
            정보에 대해 설명합니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            수집하는 정보
          </h3>
          <p className="leading-relaxed mb-3">
            당사는 이용자가 직접 제공하는 정보를 수집할 수 있으며, 예를 들어:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>계정 정보(이메일, 이름, 프로필 정보)</li>
            <li>프로필에 추가한 사진 및 선호도</li>
            <li>앱 내 메시지 및 통화 관련 데이터</li>
            <li>연령대, 지역, MBTI 등 선호 설정</li>
          </ul>
          <p className="leading-relaxed mt-4">
            또한 기기 종류, IP 주소, 이용 데이터 등 일부 정보를 자동 수집하여
            서비스 및 보안 개선에 활용합니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            정보 이용 목적
          </h3>
          <p className="leading-relaxed">
            수집한 정보는 Heart링크 서비스 운영에 사용됩니다. 매칭, 채팅·음성 통화
            제공, 맞춤 경험 제공, 약관 및 안전 정책 시행, 이용자와의 소통 등에
            활용되며, 개인정보를 광고 목적으로 제3자에게 판매하지 않습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            보유·파기 기준
          </h3>
          <p className="leading-relaxed mb-3">
            수집한 개인정보는 원칙적으로 탈퇴 시 즉시 파기하며, 아래와 같이 법령에 따라 일정 기간 보관할 수 있습니다.
          </p>
          <div className="overflow-x-auto my-4">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    보유 항목
                  </th>
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    보유 기간
                  </th>
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    근거 법령
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">개인정보 전반(원칙)</td>
                  <td className="py-3 px-4">탈퇴 시 즉시 파기</td>
                  <td className="py-3 px-4">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">계약·청약 철회 관련 기록</td>
                  <td className="py-3 px-4">5년</td>
                  <td className="py-3 px-4">전자상거래법</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">소비자 불만·분쟁 처리 기록</td>
                  <td className="py-3 px-4">3년</td>
                  <td className="py-3 px-4">전자상거래법</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">접속 로그·IP 정보</td>
                  <td className="py-3 px-4">3개월</td>
                  <td className="py-3 px-4">통신비밀보호법</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            데이터 보안
          </h3>
          <p className="leading-relaxed">
            암호화 및 안전한 인프라(예: Firebase) 등 업계 표준 보안 조치를 적용하여
            데이터를 보호합니다. 그럼에도 인터넷을 통한 전송 방식이 100% 안전하다고
            보장할 수는 없습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            이용자 선택권
          </h3>
          <p className="leading-relaxed">
            프로필 수정, 개인정보 설정 변경, 다른 이용자 차단·신고, 계정 및 관련
            데이터 삭제 요청은{" "}
            <a href="mailto:privacy@heartlink.app" className="text-heart-600 hover:underline">
              privacy@heartlink.app
            </a>
            으로 문의해 주세요.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            문의
          </h3>
          <p className="leading-relaxed">
            본 개인정보처리방침 또는 당사 처리 방식에 대한 문의는{" "}
            <a href="mailto:hello@heartlink.app" className="text-heart-600 hover:underline">
              hello@heartlink.app
            </a>
            로 연락해 주세요.
          </p>
        </div>
      </div>
    </>
  );
}
