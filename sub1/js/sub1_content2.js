// 연혁

// P 타이핑

const content = "대법관은 11인 이내로 하고, 5인 이상의 대법관으로 구성된 소부와 전원연합부로 구성하며, 1심 단독사건에 관한 상고심을 담당하기 위해 고등법원에 상고부를 설치하였습니다."

let typingIdx = 0;

    function typing (){
        if (typingIdx < content.length){
            $(".right__wr p.stroy1").append(content[typingIdx]);
            typingIdx++;

        }else {
            clearInterval(clear1);
        }
    }
let clear1 = setInterval(typing, 50);
