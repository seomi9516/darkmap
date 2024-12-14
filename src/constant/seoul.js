import { ref } from "vue"

const gu = [
  "강남구",
  "강동구",
  "강북구",
  "강서구",
  "관악구",
  "광진구",
  "구로구",
  "금천구",
  "노원구",
  "도봉구",
  "동대문구",
  "동작구",
  "마포구",
  "서대문구",
  "서초구",
  "성동구",
  "성북구",
  "송파구",
  "양천구",
  "영등포구",
  "용산구",
  "은평구",
  "종로구",
  "중구",
  "중랑구",
]

const dong = ref({
  강남구: [
    { name: "개포동", checked: true },
    { name: "논현동", checked: true },
    { name: "대치동", checked: true },
    { name: "도곡동", checked: true },
    { name: "삼성동", checked: true },
    { name: "세곡동", checked: true },
    { name: "수서동", checked: true },
    { name: "신사동", checked: true },
    { name: "압구정동", checked: true },
    { name: "역삼동", checked: true },
    { name: "일원동", checked: true },
    { name: "청담동", checked: true },
  ],
  강동구: [
    { name: "강일동", checked: true },
    { name: "고덕동", checked: true },
    { name: "길동", checked: true },
    { name: "둔촌동", checked: true },
    { name: "명일동", checked: true },
    { name: "상일동", checked: true },
    { name: "성내동", checked: true },
    { name: "암사동", checked: true },
    { name: "천호동", checked: true },
  ],
  강북구: [
    { name: "미아동", checked: true },
    { name: "번1동", checked: true },
    { name: "번2동", checked: true },
    { name: "번3동", checked: true },
    { name: "삼각산동", checked: true },
    { name: "삼양동", checked: true },
    { name: "송중동", checked: true },
    { name: "송천동", checked: true },
    { name: "수유1동", checked: true },
    { name: "수유2동", checked: true },
    { name: "수유3동", checked: true },
    { name: "우이동", checked: true },
    { name: "인수동", checked: true },
  ],
  강서구: [
    { name: "가양1동", checked: true },
    { name: "가양2동", checked: true },
    { name: "가양3동", checked: true },
    { name: "공항동", checked: true },
    { name: "등촌동", checked: true },
    { name: "발산1동", checked: true },
    { name: "방화1동", checked: true },
    { name: "방화2동", checked: true },
    { name: "방화3동", checked: true },
    { name: "염창동", checked: true },
    { name: "우장산동", checked: true },
    { name: "화곡1동", checked: true },
    { name: "화곡2동", checked: true },
    { name: "화곡3동", checked: true },
    { name: "화곡4동", checked: true },
    { name: "화곡6동", checked: true },
    { name: "화곡8동", checked: true },
    { name: "화곡본동", checked: true },
  ],
  관악구: [
    { name: "낙성대동", checked: true },
    { name: "난곡동", checked: true },
    { name: "난향동", checked: true },
    { name: "남현동", checked: true },
    { name: "대학동", checked: true },
    { name: "미성동", checked: true },
    { name: "보라매동", checked: true },
    { name: "삼성동", checked: true },
    { name: "서림동", checked: true },
    { name: "서원동", checked: true },
    { name: "성현동", checked: true },
    { name: "신림동", checked: true },
    { name: "신사동", checked: true },
    { name: "신원동", checked: true },
    { name: "은천동", checked: true },
    { name: "인헌동", checked: true },
    { name: "조원동", checked: true },
    { name: "청림동", checked: true },
    { name: "청룡동", checked: true },
    { name: "행운동", checked: true },
    { name: "호림동", checked: true },
  ],
  광진구: [
    { name: "광장동", checked: true },
    { name: "구의1동", checked: true },
    { name: "구의2동", checked: true },
    { name: "구의3동", checked: true },
    { name: "군자동", checked: true },
    { name: "능동", checked: true },
    { name: "자양1동", checked: true },
    { name: "자양2동", checked: true },
    { name: "자양3동", checked: true },
    { name: "자양4동", checked: true },
    { name: "중곡1동", checked: true },
    { name: "중곡2동", checked: true },
    { name: "중곡3동", checked: true },
    { name: "중곡4동", checked: true },
    { name: "화양동", checked: true },
  ],
  구로구: [
    { name: "가리봉동", checked: true },
    { name: "개봉1동", checked: true },
    { name: "개봉2동", checked: true },
    { name: "개봉3동", checked: true },
    { name: "고척1동", checked: true },
    { name: "고척2동", checked: true },
    { name: "구로1동", checked: true },
    { name: "구로2동", checked: true },
    { name: "구로3동", checked: true },
    { name: "구로4동", checked: true },
    { name: "구로5동", checked: true },
    { name: "수궁동", checked: true },
    { name: "신도림동", checked: true },
    { name: "오류1동", checked: true },
    { name: "오류2동", checked: true },
    { name: "항동", checked: true },
  ],
  금천구: [
    { name: "가산동", checked: true },
    { name: "독산1동", checked: true },
    { name: "독산2동", checked: true },
    { name: "독산3동", checked: true },
    { name: "독산4동", checked: true },
    { name: "시흥1동", checked: true },
    { name: "시흥2동", checked: true },
    { name: "시흥3동", checked: true },
    { name: "시흥4동", checked: true },
    { name: "시흥5동", checked: true },
  ],
  노원구: [
    { name: "공릉1동", checked: true },
    { name: "공릉2동", checked: true },
    { name: "상계1동", checked: true },
    { name: "상계2동", checked: true },
    { name: "상계3·4동", checked: true },
    { name: "상계5동", checked: true },
    { name: "상계6·7동", checked: true },
    { name: "상계8동", checked: true },
    { name: "상계9동", checked: true },
    { name: "상계10동", checked: true },
    { name: "월계1동", checked: true },
    { name: "월계2동", checked: true },
    { name: "월계3동", checked: true },
    { name: "중계1동", checked: true },
    { name: "중계2·3동", checked: true },
    { name: "중계4동", checked: true },
    { name: "중계본동", checked: true },
    { name: "하계1동", checked: true },
    { name: "하계2동", checked: true },
  ],
  도봉구: [
    { name: "도봉1동", checked: true },
    { name: "도봉2동", checked: true },
    { name: "방학1동", checked: true },
    { name: "방학2동", checked: true },
    { name: "방학3동", checked: true },
    { name: "쌍문1동", checked: true },
    { name: "쌍문2동", checked: true },
    { name: "쌍문3동", checked: true },
    { name: "쌍문4동", checked: true },
    { name: "창1동", checked: true },
    { name: "창2동", checked: true },
    { name: "창3동", checked: true },
    { name: "창4동", checked: true },
    { name: "창5동", checked: true },
  ],
  동대문구: [
    { name: "답십리1동", checked: true },
    { name: "답십리2동", checked: true },
    { name: "용신동", checked: true },
    { name: "이문1동", checked: true },
    { name: "이문2동", checked: true },
    { name: "장안1동", checked: true },
    { name: "장안2동", checked: true },
    { name: "전농1동", checked: true },
    { name: "전농2동", checked: true },
    { name: "제기동", checked: true },
    { name: "청량리동", checked: true },
    { name: "회기동", checked: true },
    { name: "휘경1동", checked: true },
    { name: "휘경2동", checked: true },
  ],
  동작구: [
    { name: "노량진1동", checked: true },
    { name: "노량진2동", checked: true },
    { name: "대방동", checked: true },
    { name: "사당1동", checked: true },
    { name: "사당2동", checked: true },
    { name: "사당3동", checked: true },
    { name: "사당4동", checked: true },
    { name: "사당5동", checked: true },
    { name: "상도1동", checked: true },
    { name: "상도2동", checked: true },
    { name: "상도3동", checked: true },
    { name: "상도4동", checked: true },
    { name: "신대방1동", checked: true },
    { name: "신대방2동", checked: true },
    { name: "흑석동", checked: true },
  ],
  마포구: [
    { name: "공덕동", checked: true },
    { name: "대흥동", checked: true },
    { name: "도화동", checked: true },
    { name: "망원1동", checked: true },
    { name: "망원2동", checked: true },
    { name: "상암동", checked: true },
    { name: "서강동", checked: true },
    { name: "서교동", checked: true },
    { name: "성산1동", checked: true },
    { name: "성산2동", checked: true },
    { name: "신수동", checked: true },
    { name: "아현동", checked: true },
    { name: "연남동", checked: true },
    { name: "용강동", checked: true },
    { name: "염리동", checked: true },
    { name: "합정동", checked: true },
  ],
  서대문구: [
    { name: "남가좌1동", checked: true },
    { name: "남가좌2동", checked: true },
    { name: "북가좌1동", checked: true },
    { name: "북가좌2동", checked: true },
    { name: "북아현동", checked: true },
    { name: "신촌동", checked: true },
    { name: "연희동", checked: true },
    { name: "천연동", checked: true },
    { name: "충현동", checked: true },
    { name: "홍은1동", checked: true },
    { name: "홍은2동", checked: true },
    { name: "홍제1동", checked: true },
    { name: "홍제2동", checked: true },
    { name: "홍제3동", checked: true },
  ],
  서초구: [
    { name: "내곡동", checked: true },
    { name: "반포1동", checked: true },
    { name: "반포2동", checked: true },
    { name: "반포3동", checked: true },
    { name: "반포4동", checked: true },
    { name: "방배1동", checked: true },
    { name: "방배2동", checked: true },
    { name: "방배3동", checked: true },
    { name: "방배4동", checked: true },
    { name: "서초1동", checked: true },
    { name: "서초2동", checked: true },
    { name: "서초3동", checked: true },
    { name: "서초4동", checked: true },
    { name: "양재1동", checked: true },
    { name: "양재2동", checked: true },
    { name: "잠원동", checked: true },
  ],
  성동구: [
    { name: "금호1가동", checked: true },
    { name: "금호2·3가동", checked: true },
    { name: "금호4가동", checked: true },
    { name: "마장동", checked: true },
    { name: "사근동", checked: true },
    { name: "성수1가1동", checked: true },
    { name: "성수1가2동", checked: true },
    { name: "성수2가1동", checked: true },
    { name: "성수2가3동", checked: true },
    { name: "송정동", checked: true },
    { name: "왕십리2동", checked: true },
    { name: "왕십리도선동", checked: true },
    { name: "용답동", checked: true },
    { name: "응봉동", checked: true },
    { name: "행당1동", checked: true },
    { name: "행당2동", checked: true },
  ],
  성북구: [
    { name: "길음1동", checked: true },
    { name: "길음2동", checked: true },
    { name: "돈암1동", checked: true },
    { name: "돈암2동", checked: true },
    { name: "동선동", checked: true },
    { name: "보문동", checked: true },
    { name: "삼선동", checked: true },
    { name: "석관동", checked: true },
    { name: "성북동", checked: true },
    { name: "안암동", checked: true },
    { name: "월곡1동", checked: true },
    { name: "월곡2동", checked: true },
    { name: "장위1동", checked: true },
    { name: "장위2동", checked: true },
    { name: "장위3동", checked: true },
    { name: "정릉1동", checked: true },
    { name: "정릉2동", checked: true },
    { name: "정릉3동", checked: true },
    { name: "정릉4동", checked: true },
    { name: "종암동", checked: true },
  ],
  송파구: [
    { name: "가락1동", checked: true },
    { name: "가락2동", checked: true },
    { name: "거여1동", checked: true },
    { name: "거여2동", checked: true },
    { name: "마천1동", checked: true },
    { name: "마천2동", checked: true },
    { name: "문정1동", checked: true },
    { name: "문정2동", checked: true },
    { name: "방이1동", checked: true },
    { name: "방이2동", checked: true },
    { name: "삼전동", checked: true },
    { name: "���촌동", checked: true },
    { name: "송파1동", checked: true },
    { name: "송파2동", checked: true },
    { name: "오금동", checked: true },
    { name: "오륜동", checked: true },
    { name: "위례동", checked: true },
    { name: "잠실2동", checked: true },
    { name: "잠실3동", checked: true },
    { name: "잠실4동", checked: true },
    { name: "잠실6동", checked: true },
    { name: "잠실7동", checked: true },
    { name: "잠실본동", checked: true },
    { name: "장지동", checked: true },
    { name: "풍1동", checked: true },
    { name: "풍납2동", checked: true },
  ],
  양천구: [
    { name: "목1동", checked: true },
    { name: "목2동", checked: true },
    { name: "목3동", checked: true },
    { name: "목4동", checked: true },
    { name: "목5동", checked: true },
    { name: "신월1동", checked: true },
    { name: "신월2동", checked: true },
    { name: "신월3동", checked: true },
    { name: "신월4동", checked: true },
    { name: "신월5동", checked: true },
    { name: "신월6동", checked: true },
    { name: "신월7동", checked: true },
    { name: "신정1동", checked: true },
    { name: "신정2동", checked: true },
    { name: "신정3동", checked: true },
    { name: "신정4동", checked: true },
    { name: "신정6동", checked: true },
    { name: "신정7동", checked: true },
  ],
  영등포구: [
    { name: "당산1동", checked: true },
    { name: "당산2동", checked: true },
    { name: "대림1동", checked: true },
    { name: "대림2동", checked: true },
    { name: "대림3동", checked: true },
    { name: "도림동", checked: true },
    { name: "문래동", checked: true },
    { name: "신길1동", checked: true },
    { name: "신길3동", checked: true },
    { name: "신길4동", checked: true },
    { name: "신길5동", checked: true },
    { name: "신길6동", checked: true },
    { name: "신길7동", checked: true },
    { name: "양평1동", checked: true },
    { name: "양평2동", checked: true },
    { name: "여의동", checked: true },
    { name: "영등포본동", checked: true },
    { name: "영등포동", checked: true },
  ],
  용산구: [
    { name: "남영동", checked: true },
    { name: "보광동", checked: true },
    { name: "서빙고동", checked: true },
    { name: "용문동", checked: true },
    { name: "용산2가동", checked: true },
    { name: "원효로1동", checked: true },
    { name: "원효로2동", checked: true },
    { name: "이촌1동", checked: true },
    { name: "이촌2동", checked: true },
    { name: "이태원1동", checked: true },
    { name: "이태원2동", checked: true },
    { name: "청파동", checked: true },
    { name: "한강로동", checked: true },
    { name: "한남동", checked: true },
    { name: "효창동", checked: true },
    { name: "후암동", checked: true },
  ],
  은평구: [
    { name: "갈현1동", checked: true },
    { name: "갈현2동", checked: true },
    { name: "구산동", checked: true },
    { name: "녹번동", checked: true },
    { name: "대조동", checked: true },
    { name: "불광1동", checked: true },
    { name: "불광2동", checked: true },
    { name: "수색동", checked: true },
    { name: "신사1동", checked: true },
    { name: "신사2동", checked: true },
    { name: "역촌동", checked: true },
    { name: "응암1동", checked: true },
    { name: "응암2동", checked: true },
    { name: "응암3동", checked: true },
    { name: "증산동", checked: true },
    { name: "진관동", checked: true },
  ],
  종로구: [
    { name: "가회동", checked: true },
    { name: "교남동", checked: true },
    { name: "무악동", checked: true },
    { name: "부암동", checked: true },
    { name: "사직동", checked: true },
    { name: "삼청동", checked: true },
    { name: "숭인1동", checked: true },
    { name: "숭인2동", checked: true },
    { name: "이화동", checked: true },
    { name: "종로1·2·3·4가동", checked: true },
    { name: "종로5·6가동", checked: true },
    { name: "창신1동", checked: true },
    { name: "창신2동", checked: true },
    { name: "창신3동", checked: true },
    { name: "청운효자동", checked: true },
    { name: "평창동", checked: true },
    { name: "혜화동", checked: true },
  ],
  중구: [
    { name: "광희동", checked: true },
    { name: "다산동", checked: true },
    { name: "동화동", checked: true },
    { name: "명동", checked: true },
    { name: "소공동", checked: true },
    { name: "신당5동", checked: true },
    { name: "신당동", checked: true },
    { name: "약수동", checked: true },
    { name: "을지로동", checked: true },
    { name: "장충동", checked: true },
    { name: "중림동", checked: true },
    { name: "청구동", checked: true },
    { name: "필동", checked: true },
    { name: "황학동", checked: true },
    { name: "회현동", checked: true },
  ],
  중랑구: [
    { name: "망우본동", checked: true },
    { name: "망우3동", checked: true },
    { name: "면목본동", checked: true },
    { name: "면목2동", checked: true },
    { name: "면목3·8동", checked: true },
    { name: "면목4동", checked: true },
    { name: "면목5동", checked: true },
    { name: "면목7동", checked: true },
    { name: "묵1동", checked: true },
    { name: "묵2동", checked: true },
    { name: "상봉1동", checked: true },
    { name: "상봉2동", checked: true },
    { name: "신내1동", checked: true },
    { name: "신내2동", checked: true },
    { name: "중화1동", checked: true },
    { name: "중화2동", checked: true },
  ],
})

export { dong, gu }
