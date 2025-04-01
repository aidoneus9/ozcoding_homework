const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // 기존 기능 (새로고침) 방지

  let userId = event.target.id.value;
  let userPw1 = event.target.pw1.value;
  let userPw2 = event.target.pw2.value;
  let userName = event.target.name.value;
  let userPhone = event.target.phone.value;
  let userPosition = event.target.position.value;
  let userGender = event.target.gender.value;
  let userEmail = event.target.email.value;
  let userIntro = event.target.intro.value;

  if (userId.length < 6) {
    alert("아이디가 너무 짦음. 6자리 이상 입력 plz");
    return;
  }
  if (userPw1 !== userPw2) {
    alert("비밀번호 일치하지 않음");
    return;
  }

  // 환영
  document.body.innerHTML = "";
  document.write(
    `<p>${userId}님 반갑습니다. 회원 가입 시 입력하신 내역은 다음과 같습니다. <br> 아이디 : ${userId} <br /> 이름 : ${userName} <br /> 전화번호 : ${userPhone} <br /> 원하는 직무 : ${userPosition} </p>`
  );
}); // form에 submit 이벤트가 발생하면, event.target = form

// 제출 이벤트를 받는다. (이벤트 핸들링)

// 제출된 입력 값들을 참조한다.

// 입력값에 문제가 있는 경우 이를 감지한다.

// 가입 환영 인사 페이지 제공
