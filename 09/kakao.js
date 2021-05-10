const $btn = document.querySelector("#search-btn");
const $text = document.querySelector("#search-text");
const $result = document.querySelector("#result");
const baseUrl = "https://dapi.kakao.com/v2/search/web";
const headers = {
  Authorization: "KakaoAK f03b0f4dc0c0f3c3982ff375908872d0"
};
function success(data) {
  console.log(data);
  const { documents } = data;
  const li = documents.map(doc => {
    return `<li class="list-group-item"><a href="${doc.url}" target="_blank">${doc.contents}</a></li>`;
  });

  $result.innerHTML = `<ul class="list-group list-group-flush">${li.join(
    ""
  )}</ul>`;
}
function error(e) {
  console.log(e);
  console.log("데이터를 가져올 수 없습니다.");
}
function search() {
  const { value } = $text;
  if (value === "") {
    alert("검색어를 입력하세요.");
    return false;
  }
  fetch(`${baseUrl}?query=${value}`, {
    headers
  })
    .then(res => res.json())
    .then(success)
    .catch(error);
  return true;
}
$btn.addEventListener("click", search);
