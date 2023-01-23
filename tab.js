// 버튼 0 누르면
// --> 1) 모든 버튼에 붙은 orange 클래스명 제거
//     2) 버튼 0에 orange 클래스명 부착
//     3) 모든 div에 붙은 show 클래스명 제거
//     4) div0에 show 클래스명 부착

var 버튼 = $(".tab-button");

// for (let i = 0; i < 3; i++) {
//   버튼.eq(i).on("click", function () {
//     탭열기(i);
//   });
// }

function 탭열기(e) {
  버튼.removeClass("orange");
  버튼.eq(e).addClass("orange");
  $(".tab-content").removeClass("show");
  $(".tab-content").eq(e).addClass("show");
}

$(".list").click(function (e) {
  // 탭열기(지금 누른 버튼에 숨겨져 있는 data-id)
  탭열기(e.target.dataset.id);
  console.log(e.target.dataset.id);
});

// array 자료형
var car = ["소나타", 10000, "white"];
console.log(car[1]);

var car2 = { name: "소나타", price: [10000, 5000, 1000] };
console.log(car2["name"]);

$(".item").html(car2.name);
$(".price").html(car2.price[1]);
// client-side rendering 개발방식 (빈 html 파일 + 데이터 전송)
// 데이터 바인딩 (html에 데이터 꽂기)
