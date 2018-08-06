winning_numbers = []
bonus_number = 0
user_lotto_numbers_list = []

// 1 ~ 45 사이의 랜덤한 숫자 반환
function getRandomNum(){

  return parseInt(Math.random() * 45 + 1 )

}

// lotto_nums(list) 값들 중 ball_num(number)값과 중복되는 값이 있는지 확인한다.
// 중복되는 값이 있으면 true 그렇지 않으면 false 반환
function checkDuplicatedNum(lotto_nums, ball_num){
    let duplication = false;
    for( let i = 0 ; i < 6 ; i++){
        if(lotto_nums[i] == ball_num) {
            return true;  
        }
    }
    return duplication;
}

// getRandomNum 함수를 통해 lotto_nums(list)에 숫자 6개를 넣어 반환한다.
// checkDuplicatedNum 함수를 통해 lotto 숫자에 중복된 숫자가 들어가지 않도록 한다.
function getLottoNums(){
    let list = [ ];
    let number;
    let i = 0;
    while(i < 6) {
        number = getRandomNum();
        if(!checkDuplicatedNum(list , number) ){
            list[i] = number;
            i++;
        }
    }
    return list;
}

// lotto_nums(list)에서 중복된 값이 있으면 true 그렇지 않으면 false 반환
function checkDuplicatedNumInList(lotto_nums){
    let duplication = false;
    for( let i = 0 ; i < 6 ; i++){
        for(let j = 0 ; j < 6 ; j++){
            if(i == j ){
            } else {
                if(lotto_nums[i] == lotto_nums[j]) {
                    duplication = true;
                }
            }
        }
    }
    return duplication;
}

// getLottoNums 함수를 통해 winning_numbers에 당첨번호를 위한 숫자 6개를 얻는다.
// checkDuplicatedNum 함수를 통해 winning_numbers와 중복되지 않는 bonus_number를 얻는다.
function getWinningNumbersAndBonusNumber(){
    let bnumber;
    winning_numbers = getLottoNums()
    let i = 0;
    while (i < 1) {
        bnumber = getRandomNum();
        if(!checkDuplicatedNum(winning_numbers , bnumber) ){
            bonus_number = bnumber;
            i++;
        }
    }
}

// 파라미터 a와 b를 더한 값을 리턴한다.
function add(a, b){
    return a + b;
}

// 당첨번호 winning_number와 자신의 lotto_nums 중 일치하는 번호의 개수를 반환한다.
function getMachedNum(lotto_nums){
    let check = 0;
    for(let i = 0 ; i < 6 ; i ++){
        for(let j = 0 ; j < 6 ; j ++ ) {
            if( winning_numbers[i] == lotto_nums[j]){
                check++;
            }
        }
    }
    return check;
}

// getMachedNum 함수를 통해 얻은 값을 통해 '꽝', '5등', '4등', '3등', '2등', '1등'을 반환한다.
// 꽝  -> 2개 이하 동일
// 5등 -> 3개 동일
// 4등 -> 4개 동일
// 3등 -> 5개 동일
// 2등 -> 5개 동일, 보너스 동일
// 1등 -> 6개 동일
function getWinningResult(lotto_nums){
    let checkNumber = getMachedNum(lotto_nums)
    if(checkNumber == 6) return "1등"
    else if(checkNumber == 5 && checkDuplicatedNum(lotto_nums , bonus_number) ) return "2등" 
    else if(checkNumber == 5) return "3등"
    else if(checkNumber == 4) return "4등"
    else if(checkNumber == 3) return "5등"
    else return "꽝"
    

}

function addLottoNum(){
    // 이 부분은 수정하지 마세요.
    let lotto_nums = getLottoNums();
    user_lotto_numbers_list.push(lotto_nums);
    drawCircle(lotto_nums);
}

function checkWinLotto(){
    // 이 부분은 수정하지 마세요.
  getWinningNumbersAndBonusNumber();

  let result = $(".result")

  for(let i in user_lotto_numbers_list) {
      result[i].textContent = getWinningResult(user_lotto_numbers_list[i])
      if(result[i].textContent == "꽝") {
          result[i].style.color = "red";
      }
  }

  winning_numbers.push(bonus_number);
  drawWinCircle(winning_numbers);

  $("#buy-lotto").attr("disabled", true)
  $("#check-winner").attr("disabled", true)
}
