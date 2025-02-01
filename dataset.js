
//메뉴 생성기 종료 E==============================
//데이터 아키텍처{sub_title:"",sub_content:"",sub_img:[],user_fill:""}
let data_sets=[]
class DataSet{
	constructor(sub_title,menuNum){this.sub_title=sub_title}
	user_fill=""
	sub_content=[]
	sub_img=[]
	set_content(content){this.sub_content.push(content)}
	set_img(num,obj){
		if(!this.sub_img[num]){this.sub_img[num]=[]}
		this.sub_img[num].push(obj)
	}
	set_fill(ufill){this.user_fill=ufill}	 
}
//******************************* build describe ************************************************ 
// 포트폴리오제시항목의 1. 
//let d1 = new DataSet("개발환경구축")// 메뉴별 타이틀입니다. menu.js에서 설정되어 있어야 하며 menu0.url = "?menu=0" 의 숫자와 data_sets 의 배열 인덱스와 동일해야 합니다.
// 포트폴리오 제시항목의 1-1
//d1.set_content("서브컨텐츠") // 각 메뉴별 화면을 구성하는 화면 구성요소입니다. 
// 포트폴리오 제시항목의 1-1 내용별 컨텐츠
//d1.set_img(항목별인덱스,{imgtitle:"요구사항명세",imgurl:"구글이미지주소",imglog:"이미지에대한 설명",sourceurl:"작성된 문서등 관련링크 주소"}) 
// 항목별 인덱스는 1-1 제시항목별 입력값인 정수 인덱스 입니다. set_content 인덱스 순서와 맞아야 합니다.
//  set_content는 입력순서별 인덱스로 0 부터 시작입니다.
//샘플 =========
//d1.set_content("")
//d1.set_img(1,{imgtitle:"",imgurl:"",imglog:"",sourceurl:""})
let d1 = new DataSet("개발환경구축")//메인 타이틀 //메뉴번호
d1.set_content("사용자의 로그인 기능을 구현하여 로그인 사용자와 비로그인 사용자에 제공 서비스를 구분한다.")//서브 타이틀
d1.set_img(0,{imgtitle:"요구사항명세서작성",imgurl:"https://drive.google.com/file/d/1MGqunuUN4_pEg4NWam6WclkZyIF0nZBY/view?usp=drive_link",imglog:"요구사항 명세서를 작성한다.",sourceurl:"https://docs.google.com/document/d/1hFdjhlwevGb38yIkKWDqqdqXV0UPo3qJfI0Mk_wSBUY/edit?usp=drive_link"})//이미지타이틀


d1.set_content("목표 시스템 개발을 위한 적정한 언어를 선정하고 라이선스와 향후 지원사항을 참고하여 결정한다.")
d1.set_img(1,{imgtitle:"개발언어선정",imgurl:"https://drive.google.com/file/d/15GgAeFgW1Cxctk9PbJagUNfG2UkEU4WS/view?usp=drive_link",imglog:"자바언어기반 스프링프레임워크, html5, memberData file",sourceurl:"https://docs.google.com/document/d/1UvD1fZNL9yjLORwxgAW5vD6C-A_RwL1zcNan9RZqmys/edit?usp=drive_link"})//이미지타이틀
d1.set_img(1,{imgtitle:"스프링프레임워크",imgurl:"https://drive.google.com/file/d/1HRUQhj2Tk6AzIW_NSRD59wGUAduJYTmW/view?usp=drive_link",imglog:"오픈소스 스프링프레임워크 v4.221",sourceurl:""})//이미지타이틀



d1.set_content("코딩개발도구와 테스트 및 빌드, 패키징, 배포등 개발 전반에 대한 필요한 환경을 설정한다.")
d1.set_img(2,{imgtitle:"개발환경 구축 명세",imgurl:"https://drive.google.com/file/d/1mw6ZBtTbbZQYlfz1YQXCuTfoi-hnvfpg/view?usp=drive_link",imglog:"운영체제 및 개발에 필요한 환경을 고려하여 개발도구, 테스트도구, 빌드도구, 패키징도구, 형상관리도구등을 결정",sourceurl:"https://docs.google.com/document/d/1rNVbHnhYGoozaqX_RsD3cErmKYzGUMvba9ihxbP2CKk/edit?usp=drive_link"})//이미지타이틀
d1.set_img(2,{imgtitle:"개발도구 Spring for Eclipse",imgurl:"https://drive.google.com/file/d/1vl3Ridea05eDn3Hx0cfIWzgkPi-vQX31/view?usp=drive_link",imglog:"자바 스프링 서버단 개발을 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"빌드도구 gradle",imgurl:"https://drive.google.com/file/d/1vlxyuzBmzaBk7B9VoycUH0mRBBxe4nTr/view?usp=drive_link",imglog:"프로그램 빌드 및 외부 라이브러리 디펜더시를 위한 도구",sourceurl:""})//이미지타이틀
d1.set_img(2,{imgtitle:"형상관리도구 git",imgurl:"https://drive.google.com/file/d/1yLXiqHWblzxAnZXGZKvRcxU8HSgf3UqS/view?usp=drive_link",imglog:"프로그램의 전반적인 개발협업 및 버전관를 위한 도구",sourceurl:""})//이미지타이틀

d1.set_fill("서버의 보안성과 각 수행기능별 패턴을 분리하기 위해 Spring WAS 와 사용자 View 기능을 위해 웹브라우져에서 일반적인 작동이 가능한 HTML5 를 구현하며 데이터베이스 연동 대신 파일로 회원목록 저장")//사용자 에필로그
data_sets.push(d1)

// menu2 =============================================================
let d2 = new DataSet("공통모듈구현")//메인타이틀

d2.set_content("공통모듈구현을 작성합니다.")//서브 타이틀
d2.set_img(0,{imgtitle:"공통모듈 분리",imgurl:"https://drive.google.com/file/d/1KOOEMd5yuZpc8Tr33umBE-COZEYQhT6F/view?usp=drive_link",imglog:"공통모듈 분리함수",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})
d2.set_img(0,{imgtitle:"공통모듈 분리2",imgurl:"https://drive.google.com/file/d/1Hii5xiq8zqj9q25IqzZiBG3UAWUGV69N/view?usp=drive_link",imglog:"공통모듈 분리함수2",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})

//d2.set_content("테스트케이스를 작성합니다.")
d2.set_content("단위테스트를 작성합니다.")
d2.set_img(1,{imgtitle:"테스트클래스 생성",imgurl:"https://drive.google.com/file/d/1dDRx1bJWZ1ZiQu8BR8fZV_DcdDP2yeop/view?usp=drive_link",imglog:"테스트 할 클래스를 생성",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberServiceTests.java"})
d2.set_img(1,{imgtitle:"테스트클래스 구현",imgurl:"https://drive.google.com/file/d/1aOrYrmi1WuZ4h3deKFX3o_EaEKrKcKdA/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberServiceTests.java"})
d2.set_img(1,{imgtitle:"테스트데이티구성",imgurl:"https://drive.google.com/file/d/1pQwgbRYbEg3oueF_Rcy21EEDETA0GOp5/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/test/java/com/itg/examp/test/MemberServiceTests.java"})
d2.set_img(1,{imgtitle:"테스트실행결과",imgurl:"https://drive.google.com/file/d/1cPtuzZyeowTqQ4Wn8qqBTWszJU0fhgQg/view?usp=drive_link",imglog:"",sourceurl:""})

d2.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d2)

// menu3 =============================================================
let d3 = new DataSet("서버프로그램구현")//메인타이틀
d3.set_content("회원가입구현")//서브 타이틀
d3.set_img(0,{imgtitle:"회원가입폼화면",imgurl:"https://drive.google.com/file/d/1QjDJBQdMDTUbtCNfg-kqr8sY8CdtMHO2/view?usp=drive_link",imglog:"회원 가입하기 위한 사용자 입력폼입니다.",sourceurl:""})
d3.set_img(0,{imgtitle:"회원가입데이터입력",imgurl:"https://drive.google.com/file/d/1CAtk-cGkU52gIh490wSGJ63Q-MBmeSeE/view?usp=drive_link",imglog:"회원가입을 위해 사용자가 데이터를 입력합니다.",sourceurl:""})
d3.set_img(0,{imgtitle:"비밀번호 점검",imgurl:"https://drive.google.com/file/d/1eM6ni26eaDb7BMNL9Z79YCGT2KCj_uFA/view?usp=drive_link",imglog:"잘못된 비밀번호를 점검합니다.",sourceurl:""})
d3.set_img(0,{imgtitle:"송신",imgurl:"https://drive.google.com/file/d/1hiJKzUvrsb9MArgpzWDbgCn5FD1A1r6Z/view?usp=drive_link",imglog:"입력된 데이터를 서버로 송신합니다.",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/signup.html"})
d3.set_img(0,{imgtitle:"수신",imgurl:"https://drive.google.com/file/d/19-MadYQl1WDWmMSW4zj_x03ieRtVT6lc/view?usp=drive_link",imglog:"입력된 데이터를 서버에서 수신합니다.",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(0,{imgtitle:"DAO",imgurl:"https://drive.google.com/file/d/11h31XupdtOhwvV4SiYOAiwcZdXsJ6kWr/view?usp=drive_link",imglog:"수신된 데이터를 DAO 객체에 넘깁니다.",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})
d3.set_img(0,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1KcRufp2bw5TwITTJLhpBhsJnjQ58z1-u/view?usp=drive_link",imglog:"매퍼에 의해 데이터베이스로 쿼리를 수행합니다.",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})
d3.set_img(0,{imgtitle:"가입성공",imgurl:"https://drive.google.com/file/d/1Qw07fpfZyAILMcJxWMevgBVrGJ2eHagP/view?usp=drive_link",imglog:"최종 회원가입이 성공 하였습니다.",sourceurl:""})
d3.set_img(0,{imgtitle:"가입데이터확인",imgurl:"https://drive.google.com/file/d/1xWdDFlRe8G3VSGhZqbQM61K0QgZKp7w5/view?usp=drive_link",imglog:"가입된 데이터를 데이터베이스에서 확인 해 봅니다.",sourceurl:""})
d3.set_fill("사용자와 프로그램간에 인터렉티브한 회원가입하기")//사용자 에필로그
d3.set_content("회원로그인구현")//서브 타이틀
d3.set_img(1,{imgtitle:"로그인정보폼",imgurl:"https://drive.google.com/file/d/1qofn3NP35EZa-cVOlp37WgN8rZbmBaYt/view?usp=drive_link",imglog:"사용자 데이터를 입력받는 폼",sourceurl:""})
d3.set_img(1,{imgtitle:"로그인정보송신",imgurl:"https://drive.google.com/file/d/1iWmKn2hZ9ZLEq5K1wWzN1xjusXHIQFxW/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})
d3.set_img(1,{imgtitle:"로그인정보수신",imgurl:"https://drive.google.com/file/d/16919ZWrCRUf3ofTW40S0_ZiqmUPngvsb/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(1,{imgtitle:"로그인DAO",imgurl:"https://drive.google.com/file/d/1QIGD7oR82dWKpbzWtG4fe54quiXVxxB2/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})
d3.set_img(1,{imgtitle:"로그인매퍼",imgurl:"https://drive.google.com/file/d/1eqhqlOYRLN44LJMHJImTzAWKKQc157Oi/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})
d3.set_img(1,{imgtitle:"로그인성공",imgurl:"https://drive.google.com/file/d/1yg-8ZM1dq_jq36_hSGwhbHtKBZIZ8gXV/view?usp=drive_link",imglog:"",sourceurl:""})
d3.set_content("회원로그아웃")//서브 타이틀
d3.set_img(2,{imgtitle:"로그인된 화면",imgurl:"https://drive.google.com/file/d/1Mt_cAeJryz9dKxUVtW_Sm_jDIfGtOIRR/view?usp=drive_link",imglog:"로그인 된 상태에서 로그아웃을 수행",sourceurl:""})
d3.set_img(2,{imgtitle:"로그아웃 송신",imgurl:"https://drive.google.com/file/d/1VddCZnj8sVzVrVmJU06VHk6cjmaW-w7i/view?usp=drive_link",imglog:"서버로 로그아웃 전송",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/common.js"})
d3.set_img(2,{imgtitle:"로그아웃 수신",imgurl:"https://drive.google.com/file/d/1cRmLIzGCfdKLrXP8ZKg1Jl590YMNCNY-/view?usp=drive_link",imglog:"수신된 로그아웃 정보 세션 해제",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(2,{imgtitle:"로그아웃 성공",imgurl:"https://drive.google.com/file/d/1gMsp9rz_eV0y79hjvyANoGeH6IRIeO_f/view?usp=drive_link",imglog:"로그아웃 성공 메시지 출력",sourceurl:""})
data_sets.push(d3)
d3.set_content("회원리스트 출력")//서브 타이틀
d3.set_img(3,{imgtitle:"회원로그인된 화면",imgurl:"https://drive.google.com/file/d/1W28OaZdF8dR0mES4ZK6-RZeX_HEfItbi/view?usp=drive_link",imglog:"로그인된 사용자는 리스트를 요청할 수 있다.",sourceurl:""})
d3.set_img(3,{imgtitle:"회원로스트요청",imgurl:"https://drive.google.com/file/d/168ld2Qw-79-dxj_azmzBtltWjLhct7ML/view?usp=drive_link",imglog:"로그인된 클라이언트는 리스트를 요청",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/resources/static/index.html"})
d3.set_img(3,{imgtitle:"서버 수신",imgurl:"https://drive.google.com/file/d/18sdiIDP4wIN386QBhDaGC1Lau9V_xfkL/view?usp=drive_link",imglog:"서버는 리스트요청을 수신하여 세션확인",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/MemberController.java"})
d3.set_img(3,{imgtitle:"리스트DAO",imgurl:"https://drive.google.com/file/d/1FWKLXNylAsSA0_6ZUSS5js5JDrhMFpw5/view?usp=drive_link",imglog:"DAO는 쿼리를 수행하여 리스트를 리턴한다.",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/dao/MemberDAOImpl.java"})
d3.set_img(3,{imgtitle:"매퍼",imgurl:"https://drive.google.com/file/d/1Q_7aJvBGHfRSl2ZEsXuKJjlecEe26oAx/view?usp=drive_link",imglog:"회원 정보를 조회하는 쿼리 수행",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/config/memberMapper.xml"})
d3.set_img(3,{imgtitle:"리스트결과",imgurl:"https://drive.google.com/file/d/1a66-wnqcraqKqfJBe9VQiBgUdJHg4cmz/view?usp=drive_link",imglog:"등록되어 있는 회원 정보를 화면에 출력한다.",sourceurl:""})

// menu4 =============================================================
let d4 = new DataSet("배치프로그램구현")//메인타이틀

d4.set_content("배치스케줄구현")//서브타이틀
d1.set_img(0,{imgtitle:"배치스케줄구성",imgurl:"https://drive.google.com/file/d/1STKfRUQtB3R_ceFRU_rbC8EkbK6Rch5k/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchConfiguration.java"})
d1.set_img(0,{imgtitle:"배치스케줄구현",imgurl:"https://drive.google.com/file/d/1zB5FQeLcgKC3GR2lKsXgAF85yoAAbjy1/view?usp=drive_link",imglog:"",sourceurl:"https://github.com/ops0101/loginsystem/blob/main/LoginSystem/src/main/java/com/itg/examp/job/BatchSchedule.java"})

d4.set_fill("사용자와 프로그램간에 인터렉티브한 로그인 세션 설정")//사용자 에필로그
data_sets.push(d4)
