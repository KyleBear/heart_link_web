export function TermsDocumentBody() {
  return (
    <>
      <h2 className="font-display text-2xl font-bold text-gray-900 flex items-center gap-2 pr-10">
        <span className="text-heart-500">01</span> 이용약관
      </h2>
      <div className="prose prose-gray mt-6 space-y-8 text-gray-700 max-w-none">
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-0 mb-2">
            약관 동의
          </h3>
          <p className="leading-relaxed">
            이용자는 서비스 이용에 앞서 본 이용약관 및 개인정보처리방침에 동의해야 합니다. 동의하지 않을
            경우 서비스 이용이 제한됩니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            이용 자격
          </h3>
          <p className="leading-relaxed">
            HeartLink는 만 18세 이상이며 법적 구속력 있는 계약을 체결할 수 있는 이용자만 사용할 수
            있습니다. 당사는 연령 요건 충족 여부를 확인하기 위한 절차를 운영할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            허용 이용
          </h3>
          <p className="leading-relaxed mb-3">
            이용자는 서비스를 합법적인 목적에 한하여 사용해야 하며, 다음 행위를 금지합니다.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>다른 이용자를 괴롭히거나 피해를 주는 행위</li>
            <li>타인을 사칭하거나 허위 정보를 제공하는 행위</li>
            <li>스팸, 크롤링, 자동화된 방식으로 서비스에 접근하는 행위</li>
            <li>당사의 사전 동의 없이 영리 목적으로 서비스를 이용하는 행위</li>
            <li>보안 기능 또는 운영 정책을 우회하는 행위</li>
          </ul>
          <p className="leading-relaxed mt-4">
            위반 시 계정 제한, 일시 정지 또는 영구 이용 정지 조치가 이루어질 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            안전 및 신고
          </h3>
          <p className="leading-relaxed">
            이용자는 다른 이용자를 차단하거나 신고할 수 있으며, 당사는 신고 내용을 검토하여 경고, 이용
            제한 또는 계정 정지 등의 조치를 취할 수 있습니다. 불법 행위가 확인될 경우 관련 법령에 따라
            관계 기관에 신고될 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            약관 변경
          </h3>
          <p className="leading-relaxed">
            당사는 필요한 경우 본 약관을 변경할 수 있으며, 중요한 변경 사항은 앱 또는 이메일을 통해
            안내합니다. 변경 이후에도 서비스를 계속 이용할 경우 개정된 약관에 동의한 것으로
            간주됩니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">문의</h3>
          <p className="leading-relaxed">
            이용약관 관련 문의:{" "}
            <a href="mailto:juongho1025@gmail.com" className="text-heart-600 hover:underline">
              juongho1025@gmail.com
            </a>
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
      <div className="prose prose-gray mt-6 space-y-8 text-gray-700 max-w-none">
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-0 mb-2">소개</h3>
          <p className="leading-relaxed">
            HeartLink(이하 &quot;당사&quot;)는 이용자의 개인정보 보호를 중요하게 생각합니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            개인정보 수집 및 이용 동의
          </h3>
          <p className="leading-relaxed">
            이용자는 서비스 이용을 위해 개인정보 수집 및 이용에 동의해야 하며, 동의하지 않을 경우 서비스
            이용이 제한됩니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            수집하는 정보
          </h3>
          <p className="font-semibold text-gray-900 mb-2">1) 이용자가 제공하는 정보</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>계정 정보(이메일, 이름, 프로필 정보)</li>
            <li>프로필 사진 및 선호 정보</li>
            <li>연령대, 지역, MBTI 등 설정 정보</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-2">2) 서비스 이용 과정에서 생성되는 정보</p>
          <ul className="list-disc pl-6 space-y-1 mb-4">
            <li>메시지 및 음성 통화 기능 제공을 위해 필요한 데이터</li>
          </ul>
          <p className="font-semibold text-gray-900 mb-2">3) 자동 수집 정보</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>기기 정보(모델명, OS 버전)</li>
            <li>IP 주소</li>
            <li>접속 시간 및 서비스 이용 기록</li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            정보 이용 목적
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>회원 식별 및 계정 관리</li>
            <li>매칭 서비스 제공</li>
            <li>채팅 및 음성 통화 기능 제공</li>
            <li>서비스 개선 및 사용자 경험 향상</li>
            <li>부정 이용 방지 및 보안 관리</li>
            <li>이용자 문의 대응</li>
          </ul>
          <p className="leading-relaxed mt-4">
            당사는 개인정보를 광고 목적으로 판매하지 않으며, 이용자의 동의 없이 제3자에게 제공하지
            않습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            마케팅 정보 수신 동의 (선택)
          </h3>
          <p className="leading-relaxed">
            이용자는 이벤트, 혜택, 프로모션 안내 등 마케팅 정보를 수신할지 여부를 선택할 수 있습니다.
            해당 동의는 선택 사항이며, 동의하지 않아도 서비스 이용에는 제한이 없습니다. 이용자는
            언제든지 수신 동의를 철회할 수 있습니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            제3자 서비스 이용
          </h3>
          <p className="leading-relaxed">
            당사는 서비스 제공을 위해 Firebase 등 외부 서비스를 이용할 수 있으며, 해당 서비스 제공자는
            관련 법령에 따라 개인정보를 처리합니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            메시지 및 통화 데이터 처리
          </h3>
          <p className="leading-relaxed">
            메시지 및 통화 관련 데이터는 서비스 기능 제공을 위한 범위 내에서 처리됩니다.
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            보유 및 파기
          </h3>
          <div className="overflow-x-auto my-4 not-prose">
            <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    항목
                  </th>
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    보유 기간
                  </th>
                  <th className="text-left py-3 px-4 border-b border-gray-200 font-semibold text-gray-900">
                    근거
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">개인정보</td>
                  <td className="py-3 px-4">탈퇴 시 즉시 삭제</td>
                  <td className="py-3 px-4">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">계약/청약철회 기록</td>
                  <td className="py-3 px-4">5년</td>
                  <td className="py-3 px-4">전자상거래법</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">분쟁 및 소비자 불만</td>
                  <td className="py-3 px-4">3년</td>
                  <td className="py-3 px-4">전자상거래법</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">접속 로그/IP</td>
                  <td className="py-3 px-4">3개월</td>
                  <td className="py-3 px-4">통신비밀보호법</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">
            이용자 권리
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>개인정보 열람 및 수정</li>
            <li>계정 삭제 요청</li>
            <li>데이터 삭제 요청</li>
            <li>이용 제한 및 차단 기능 사용</li>
          </ul>
          <p className="leading-relaxed mt-4">
            요청:{" "}
            <a href="mailto:juongho1025@gmail.com" className="text-heart-600 hover:underline">
              juongho1025@gmail.com
            </a>
          </p>
        </div>
        <div>
          <h3 className="font-display text-lg font-semibold text-gray-900 mt-6 mb-2">문의</h3>
          <p className="leading-relaxed">
            개인정보 관련 문의:{" "}
            <a href="mailto:juongho1025@gmail.com" className="text-heart-600 hover:underline">
              juongho1025@gmail.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
