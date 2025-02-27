console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

console.log("알맞은 스크립트를 작성하세요");


document.getElementById('submitCommentBtn').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    // 댓글 내용이 비어있지 않은지 확인
    if (commentInput.value.trim() === "") {
        alert("댓글을 입력해 주세요.");
        return;
    }

    // 새로운 댓글 목록 항목 생성
    const newCommentItem = document.createElement('li');
    newCommentItem.textContent = commentInput.value.trim();

    // 댓글을 목록에 추가
    commentList.appendChild(newCommentItem);

    // 댓글 등록 메시지
    alert("댓글이 등록되었습니다");

    // 입력창 초기화
    commentInput.value = '';
});
