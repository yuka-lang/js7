const unfollow = function() {
  console.log("フォローを外しました");
}

const cancelTweet = function() {
  console.log("ツイートをキャンセルしました");
}

function confirmed(fn){
  const input = window.prompt("実行しますか?")
    fn(input);
}

confirmed(function(input){
  if(input === "実行"){
    console.log("リポジトリを削除");
  }
});


const foods = ["人参","じゃがいも","玉ねぎ"];

foods.forEach(function(food){
  console.log(food);
});