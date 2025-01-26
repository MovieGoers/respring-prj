export interface iBook{
    title: string;
    content: string;
    cover_img: string;
    tag: string;
    like: number;
    view: number;
    created_at: string;
    updated_at: string;
}

export const bookData: iBook[] = [
    {
        title: "은퇴 후 첫 발자국",
        content: "젊음이란, 매 순간 스쳐 지나가 버리는 줄도 모르고 달려가는 바람과 같았다. 어느새 머리칼이 희끗희끗해지고, 내 이름 앞에 '퇴직자'라는 수식어가 붙었을 때야 비로소 나는 멈춰 서서 내 삶을 돌아보기 시작했다. 나는 35년 동안 같은 회사에서 일했다. 처음 입사했을 때는 설렘 반 두려움 반으로 문을 열었다. 그 작은 공간이 내 삶의 거의 모든 것이 될 줄은 몰랐다. 회사에서의 시간은 나를 성장시키고, 때로는 지치게 했으며, 많은 사람들과의 만남과 이별을 안겨주었다. 그러나 은퇴 후에는 새로운 시작이 기다리고 있었다.",
        cover_img: "/images/bookcover/book_cover_img1.jpg",
        tag: "회고",
        like: 120,
        view: 3400,
        created_at: "2024/12/23",
        updated_at: "2024/12/24"
    },
    {
        title: "과거를 바라보며 배우다",
        content: "퇴직 후 가장 힘들었던 것은 '일상'이었다. 매일 아침 알람 소리에 일어나 출근하는 삶이 너무도 익숙했기에, 갑자기 주어진 자유는 오히려 혼란스러웠다. 그러던 어느 날, 책장 한 구석에 있던 먼지 쌓인 다이어리를 발견했다. 젊은 시절의 기록들이었다. 나는 그 글을 읽으며 내가 살아온 여정을 다시금 되새겼다. 성공과 실패, 기쁨과 슬픔이 고스란히 담겨 있었다. 그 중 가장 기억에 남는 한 줄은 이런 것이었다. '언젠가 나의 이야기를 기록하고 싶다.' 그 한 줄이 내 은퇴 후 삶의 방향을 정해 주었다.",
        cover_img: "/images/bookcover/book_cover_img2.jpg",
        tag: "회고",
        like: 98,
        view: 2200,
        created_at: "2024/12/25",
        updated_at: "2024/12/26"
    },
    {
        title: "새로운 도전, 새로운 시작",
        content: "퇴직 후 나는 글을 쓰기 시작했다. 처음엔 나만의 작은 일기였지만, 점차 내 삶의 이야기를 사람들과 나누고 싶다는 생각이 들었다. 그래서 지역 도서관에서 작가 강좌를 수강했고, 그곳에서 만난 동료들과 글쓰기 모임을 만들었다. 우리의 삶은 각자 다르지만, 공감과 이해를 통해 서로를 이어주는 힘이 있었다. 결국 나는 나의 첫 번째 책을 출판하게 되었다. 그것은 단순히 퇴직자의 이야기가 아니라, 삶을 살아가는 모든 사람들에게 전하고 싶은 메시지였다. '우리의 이야기는 끝나지 않았다.'",
        cover_img: "/images/bookcover/book_cover_img3.jpg",
        tag: "도전",
        like: 105,
        view: 3100,
        created_at: "2024/12/27",
        updated_at: "2024/12/28"
    },
    {
        title: "마무리하며",
        content: "퇴직 후의 삶은 새로운 시작이었다. 익숙했던 일상을 떠나 낯선 길을 걷는 것은 두렵지만, 그 길 끝에 펼쳐진 새로운 세상은 충분히 매력적이었다. 나는 이제 은퇴라는 단어를 다른 의미로 정의하고 싶다. 그것은 끝이 아니라, 또 다른 시작이다. 내 이야기가 누군가에게 작은 용기와 영감을 줄 수 있다면, 그것만으로도 충분히 가치 있는 삶이다.",
        cover_img: "/images/bookcover/book_cover_img4.jpg",
        tag: "회고",
        like: 112,
        view: 3800,
        created_at: "2024/12/29",
        updated_at: "2024/12/30"
    },
    {
        title: "은퇴 후의 삶",
        content: "은퇴 후 가장 중요한 것은 자유와 시간이다. 그동안 나를 위한 시간을 내지 못했던 세월을 보낸 후, 이제는 내가 원하는 대로 시간을 보내기 시작했다. 그것이 얼마나 소중한지 깨닫기까지 시간이 걸렸지만, 지금은 삶의 주인공이 된 기분이다. 나는 매일 조금씩 자신을 돌아보고, 새로운 목표를 세우며 살아가고 있다.",
        cover_img: "/images/bookcover/book_cover_img5.jpg",
        tag: "자유",
        like: 130,
        view: 4000,
        created_at: "2024/12/31",
        updated_at: "2025/01/01"
    }
];

const bookDataLength = bookData.length;
const bookImgSrc = "/img/book_cover_img";

// for(let i=1;i<=bookDataLength;i++){
//     bookData[i].cover_img = `${bookImgSrc}${i}.jpg`
// }
