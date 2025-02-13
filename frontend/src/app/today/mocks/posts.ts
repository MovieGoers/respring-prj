// src/app/today/mocks/posts.ts
import type { Post, Image } from "@/lib/api";

// ✅ 랜덤 이미지 생성 함수
const getRandomImage = () : string => {
  const imageNumber = Math.floor(Math.random() * 9) + 1; // 1~9 숫자 랜덤 선택
  const newImg : string = `/corgis/placeholder${imageNumber}.jpg`;
  return newImg; // public 폴더 내 이미지 경로
};

// // 인기 게시글 목데이터 (예: popularPosts)
// export const popularPosts: Post[] = [
//   {
//     id: 1,
//     title: "퇴직금 제대로 관리하기: 재테크 노하우 공유",
//     content:
//       "안녕하세요. 실버맨입니다. 오늘은 더 나은 노하우가 있으시면 공유받길 바라며 제가 퇴직금을 관리하는 방법에 대해 이야기하고자 합니다. 첫째, 긴급자금을 따로 마련하세요. 둘째, 분산 투자를 하세요. 셋째, 장기적인 관점에서 접근하세요.",
//     category: "INFORMATION_SHARING", // 또는 "고민/질문"
//     userId: "user-1",
//     userName: "실버맨",
//     createdAt: "2024-01-24T12:00:00Z",
//     updatedAt: "2024-01-24T12:30:00Z",
//     likes: 156,
//     images: [getRandomImage()],
//   },
//   {
//     id: 2,
//     title: "제2의 인생, 새로운 취미 찾기",
//     content: "퇴직 후 처음에는 무엇을 해야 할지 몰랐습니다. 하지만 이제는 매일이 새로운 도전과 즐거움의 연속입니다. 제가 찾은 새로운 취미들을 소개해드릴게요.园예, 도예, 그리고 여행 블로깅까지!",
//     category: "INFORMATION_SHARING",
//     userId: "user-3",
//     userName: "골드우먼",
//     createdAt: "2024-01-23T15:30:00Z",
//     updatedAt: "2024-01-23T15:40:00Z",
//     likes: 134,
//     images: [getRandomImage()],
//   },
//   {
//     id: 3,
//     title: "건강관리의 중요성: 제2인생을 위한 필수 팁",
//     content: "나이가 들수록 건강관리가 정말 중요해집니다. 제가 10년간 실천해온 건강관리 비법을 공유합니다. 규칙적인 운동, 균형 잡힌 식단, 충분한 수면, 그리고 정기적인 건강검진이 핵심입니다.",
//     category: "INFORMATION_SHARING",
//     userId: "user-5",
//     userName: "플래티넘레이디",
//     createdAt: "2024-01-22T09:45:00Z",
//     updatedAt: "2024-01-22T10:00:00Z",
//     likes: 201,
//     images: [getRandomImage()],
//   },
//   {
//     id: 4,
//     title: "인생 2막, 새로운 직업 도전기",
//     content:
//       "15년 전 퇴직 후, 저는 완전히 새로운 분야에 도전했습니다. 40년 동안 회사원으로 일하다가 요가 강사로 변신한 저의 이야기를 들려드리겠습니다. 늦은 나이의 도전이 얼마나 가치있는지 함께 나누고 싶습니다.",
//     category: "INFORMATION_SHARING",
//     userId: "user-7",
//     userName: "다이아몬드맨",
//     createdAt: "2024-01-21T18:20:00Z",
//     updatedAt: "2024-01-21T18:50:00Z",
//     likes: 189,
//     images: [getRandomImage()],
//   },
//   {
//     id: 5,
//     title: "퇴직 후 우울증 극복 경험담",
//     content: "퇴직 직후 겪었던 우울증과 극복 과정을 공유합니다. 전문가의 도움, 가족의 지지, 그리고 새로운 목표 설정이 큰 힘이 되었어요. 비슷한 경험을 하신 분들께 조금이라도 도움이 되길 바랍니다.",
//     category: "고민/질문",
//     userId: "user-2",
//     userName: "뉴비",
//     createdAt: "2024-01-20T11:10:00Z",
//     updatedAt: "2024-01-20T11:20:00Z",
//     likes: 228,
//     images: [getRandomImage()],
//   },
// ];

// // 일반 게시글 목데이터 (예: posts)
// export const posts: Post[] = [
//   {
//     id: 6,
//     title: "다들 무슨 취미를 갖고 계신가요?",
//     content: "안녕하세요. 퇴직한 지 4개월차가 되어가는 뉴비입니다. 요즘 건강 관련 스포츠를 알아보는 중인데, 어떤 취미활동을 하시는지 궁금합니다. 추천할 만한 것이 있다면 조언 부탁드려요!",
//     category: "고민/질문",
//     userId: "user-2",
//     userName: "뉴비",
//     createdAt: "2024-01-24T10:00:00Z",
//     updatedAt: "2024-01-24T10:15:00Z",
//     likes: 45,
//     images: [getRandomImage()],
//   },
//   {
//     id: 7,
//     title: "노후 자금 관리, 어떻게 하고 계신가요?",
//     content: "퇴직한 지 1년이 지났는데, 노후 자금 관리에 대해 고민이 많습니다. 적금, 주식, 펀드 등 다양한 방법이 있는데, 여러분들은 어떤 방식으로 노후 자금을 관리하고 계신지 궁금합니다.",
//     category: "고민/질문",
//     userId: "user-4",
//     userName: "브론즈맨",
//     createdAt: "2024-01-23T14:30:00Z",
//     updatedAt: "2024-01-23T14:45:00Z",
//     likes: 67,
//     images: [getRandomImage()],
//   },
//   {
//     id: 8,
//     title: "봉사활동 추천해주세요",
//     content: "최근 의미 있는 일을 하고 싶다는 생각이 들어 봉사활동을 알아보는 중입니다. 경험 있으신 분들, 추천해주실 만한 봉사활동이 있을까요? 어디서부터 시작해야 할지 막막하네요.",
//     category: "고민/질문",
//     userId: "user-6",
//     userName: "실버우먼",
//     createdAt: "2024-01-22T16:45:00Z",
//     updatedAt: "2024-01-22T16:50:00Z",
//     likes: 39,
//     images: [getRandomImage()],
//   },
//   {
//     id: 9,
//     title: "퇴직 후 첫 해외여행, 어디가 좋을까요?",
//     content: "퇴직하고 6개월 동안 집에만 있다가 드디어 해외여행에 도전합니다. 혼자 가는 여행이라 설레면서도 걱정도 되는데, 경험자 분들의 조언을 듣고 싶어요. 추천 여행지가 있다면 알려주세요!",
//     category: "고민/질문",
//     userId: "user-8",
//     userName: "루키",
//     createdAt: "2024-01-21T09:15:00Z",
//     updatedAt: "2024-01-21T09:30:00Z",
//     likes: 52,
//     images: [getRandomImage()],
//   },
//   {
//     id: 10,
//     title: "마음의 평화를 찾는 방법",
//     content: "요즘 들어 마음의 평화를 찾는 것이 중요하다고 느끼고 있습니다. 저는 명상을 시작했는데, 정말 도움이 많이 되네요. 여러분만의 스트레스 해소법이나 평화를 찾는 방법이 있다면 공유해주세요.",
//     category: "INFORMATION_SHARING",
//     userId: "user-3",
//     userName: "골드우먼",
//     createdAt: "2024-01-20T13:40:00Z",
//     updatedAt: "2024-01-20T14:00:00Z",
//     likes: 88,
//     images: [getRandomImage()],
//   },
//   {
//     id: 11,
//     title: "손주들과 소통하는 법",
//     content: "최근 손주들과 대화에서 세대 차이를 많이 느낍니다. 젊은 세대와 소통하는 팁이 있으신가요? 손주들과 더 가까워지고 싶어요.",
//     category: "고민/질문",
//     userId: "user-5",
//     userName: "플래티넘레이디",
//     createdAt: "2024-01-19T11:20:00Z",
//     updatedAt: "2024-01-19T11:45:00Z",
//     likes: 76,
//     images: [getRandomImage()],
//   },
//   {
//     id: 12,
//     title: "인생 2막에서 찾은 새로운 열정",
//     content: "퇴직 후 우연히 시작한 목공예가 저의 새로운 열정이 되었습니다. 나무를 다루며 느끼는 성취감과 기쁨을 여러분과 나누고 싶어요. 여러분의 새로운 열정은 무엇인가요?",
//     category: "INFORMATION_SHARING",
//     userId: "user-7",
//     userName: "다이아몬드맨",
//     createdAt: "2024-01-18T17:50:00Z",
//     updatedAt: "2024-01-18T18:00:00Z",
//     likes: 104,
//     images: [getRandomImage()],
//   },
//   {
//     id: 13,
//     title: "동네 친구 만들기 프로젝트",
//     content: "퇴직 후 이사 온 새 동네에서 친구를 만들기가 쉽지 않더라고요. 그래서 모임을 만들어 산책하고 차 마시면서 이야기를 나누고 있습니다. 여러분의 동네 친구 만들기 경험도 듣고 싶어요.",
//     category: "INFORMATION_SHARING",
//     userId: "user-1",
//     userName: "실버맨",
//     createdAt: "2024-01-17T10:30:00Z",
//     updatedAt: "2024-01-17T10:45:00Z",
//     likes: 92,
//     images: [getRandomImage()],
//   },
//   {
//     id: 14,
//     title: "디지털 기기 사용, 어렵지 않아요",
//     content:
//       "스마트폰, 태블릿 사용이 처음에는 어려웠지만, 조금씩 배워가니 이제는 정말 편리하네요. 유튜브로 요리도 배우고, 화상통화로 멀리 있는 가족들과 대화도 자주 하고 있습니다. 여러분도 도전해보세요!",
//     category: "INFORMATION_SHARING",
//     userId: "user-2",
//     userName: "뉴비",
//     createdAt: "2024-01-16T14:15:00Z",
//     updatedAt: "2024-01-16T14:45:00Z",
//     likes: 118,
//     images: [getRandomImage()],
//   },
//   {
//     id: 15,
//     title: "나만의 작은 텃밭 가꾸기",
//     content: "아파트 베란다에 상추, 방울토마토, 고추를 키우고 있는데 직접 기른 채소로 요리해 먹는 재미가 정말 쏠쏠합니다. 도시 농부가 되는 방법, 함께 공유해요!",
//     category: "INFORMATION_SHARING",
//     userId: "user-4",
//     userName: "브론즈맨",
//     createdAt: "2024-01-15T16:40:00Z",
//     updatedAt: "2024-01-15T17:00:00Z",
//     likes: 86,
//     images: [getRandomImage()],
//   },
// ];

// // ✅ 구독한 사용자들의 게시물 목데이터 (한 카테고리당 10개씩, 총 20개)

// export const followedPosts: Post[] = [
//   // ✅ "고민/질문" 카테고리 (10개)
//   {
//     id: 31,
//     title: "퇴직 후 무료함을 어떻게 해결하시나요?",
//     content: "퇴직한 지 6개월 차인데 하루하루 무료함을 느끼고 있어요. 어떻게 극복하셨나요?",
//     category: "고민/질문",
//     userId: "user-10",
//     userName: "라이트맨",
//     createdAt: "2024-01-24T12:00:00Z",
//     updatedAt: "2024-01-24T12:30:00Z",
//     likes: 75,
//     images: [getRandomImage()],
//   },
//   {
//     id: 32,
//     title: "은퇴 후 가족과의 관계가 어려워졌어요",
//     content: "퇴직 후 집에 있는 시간이 많아지면서 가족과의 마찰도 잦아졌어요. 해결 방법이 있을까요?",
//     category: "고민/질문",
//     userId: "user-11",
//     userName: "그린우먼",
//     createdAt: "2024-01-23T14:10:00Z",
//     updatedAt: "2024-01-23T14:40:00Z",
//     likes: 59,
//     images: [getRandomImage()],
//   },
//   {
//     id: 33,
//     title: "건강을 위해 어떤 운동을 추천하시나요?",
//     content: "나이가 들면서 운동이 필수라는 걸 느낍니다. 퇴직 후 쉽게 시작할 수 있는 운동이 있을까요?",
//     category: "고민/질문",
//     userId: "user-12",
//     userName: "피트니스킹",
//     createdAt: "2024-01-22T09:00:00Z",
//     updatedAt: "2024-01-22T09:30:00Z",
//     likes: 80,
//     images: [getRandomImage()],
//   },
//   {
//     id: 34,
//     title: "노후 자금, 어떻게 운영하세요?",
//     content: "퇴직 후 안정적인 자금 관리를 위해 어떤 방법을 사용하고 계신가요?",
//     category: "고민/질문",
//     userId: "user-13",
//     userName: "머니마스터",
//     createdAt: "2024-01-21T16:50:00Z",
//     updatedAt: "2024-01-21T17:20:00Z",
//     likes: 91,
//     images: [getRandomImage()],
//   },
//   {
//     id: 35,
//     title: "디지털 기기 사용이 어렵네요...",
//     content: "요즘은 스마트폰 없이는 생활이 불편한데, 쉽게 배울 방법이 있을까요?",
//     category: "고민/질문",
//     userId: "user-14",
//     userName: "디지털루키",
//     createdAt: "2024-01-20T12:20:00Z",
//     updatedAt: "2024-01-20T12:40:00Z",
//     likes: 47,
//     images: [getRandomImage()],
//   },
//   {
//     id: 36,
//     title: "퇴직 후에도 일하고 싶어요",
//     content: "퇴직 후에도 일을 하고 싶은데, 어떤 직업이 좋을까요?",
//     category: "고민/질문",
//     userId: "user-15",
//     userName: "다이나믹맨",
//     createdAt: "2024-01-19T14:00:00Z",
//     updatedAt: "2024-01-19T14:30:00Z",
//     likes: 120,
//     images: [getRandomImage()],
//   },
//   {
//     id: 37,
//     title: "혼자 해외여행, 괜찮을까요?",
//     content: "은퇴 후 혼자 해외여행을 가볼까 하는데, 경험 있으신 분들의 조언이 필요합니다.",
//     category: "고민/질문",
//     userId: "user-16",
//     userName: "여행자",
//     createdAt: "2024-01-18T09:15:00Z",
//     updatedAt: "2024-01-18T09:30:00Z",
//     likes: 66,
//     images: [getRandomImage()],
//   },

//   // ✅ "INFORMATION_SHARING" 카테고리 (10개)
//   {
//     id: 41,
//     title: "나만의 작은 텃밭 가꾸기",
//     content: "퇴직 후 베란다에서 텃밭을 가꾸고 있어요. 신선한 채소를 직접 기르는 재미가 쏠쏠합니다!",
//     category: "INFORMATION_SHARING",
//     userId: "user-17",
//     userName: "도시농부",
//     createdAt: "2024-01-17T08:00:00Z",
//     updatedAt: "2024-01-17T08:20:00Z",
//     likes: 110,
//     images: [getRandomImage()],
//   },
//   {
//     id: 42,
//     title: "퇴직 후 배운 요리, 너무 재밌어요!",
//     content: "퇴직 후 요리를 배우기 시작했는데, 매일 새로운 요리를 만들어보는 게 즐겁네요!",
//     category: "INFORMATION_SHARING",
//     userId: "user-18",
//     userName: "쉐프할아버지",
//     createdAt: "2024-01-16T10:30:00Z",
//     updatedAt: "2024-01-16T10:50:00Z",
//     likes: 96,
//     images: [getRandomImage()],
//   },
//   {
//     id: 43,
//     title: "퇴직 후에도 성장할 수 있다!",
//     content: "은퇴했다고 성장이 멈추는 게 아니죠! 책을 읽고, 새로운 걸 배우며 인생을 즐기고 있습니다.",
//     category: "INFORMATION_SHARING",
//     userId: "user-19",
//     userName: "평생학습자",
//     createdAt: "2024-01-15T14:50:00Z",
//     updatedAt: "2024-01-15T15:10:00Z",
//     likes: 121,
//     images: [getRandomImage()],
//   },
//   {
//     id: 44,
//     title: "손주와 함께하는 IT 배우기",
//     content: "손주들과 더 가까워지기 위해 스마트폰과 태블릿 사용법을 배우고 있어요!",
//     category: "INFORMATION_SHARING",
//     userId: "user-20",
//     userName: "할배테크",
//     createdAt: "2024-01-14T17:25:00Z",
//     updatedAt: "2024-01-14T17:50:00Z",
//     likes: 87,
//     images: [getRandomImage()],
//   },
// ];
