// TODO :: Write the testing code
//로또 함수의 꾸러미를 만든 것
// it()은 함수의 기능을 테스트
// expect(x) : x에 대하여 기대한다는 의미
// toBeGreaterThan0rEqual(1) : 이상인지

describe("로또 함수의", function() {

  describe("getRandomNum() 함수는", function() {
    it("1~45 사이의 랜덤한 수를 생성한다.", function() {      // it()은 함수의 기능을 테스트
      let rand_num = getRandomNum()
      expect(parseInt(rand_num))
      expect(rand_num).toBeGreaterThanOrEqual(1)
      expect(rand_num).toBeLessThanOrEqual(45)
    })
  })

  describe("checkDuplicatedNum() 함수는", function() {
    it("[1,2,3,4,5,6], 5에 대해 중복 숫자가 있다.", function() {
      expect(checkDuplicatedNum([1,2,3,4,5,6],5)).toBeTruthy()
    })
    it("[1,2,3,4,5,6], 10에 대해 중복 숫자가 없다.", function() {
      expect(checkDuplicatedNum([1,2,3,4,5,6],10)).toBeFalsy()
    })
  })

})

describe("로또 함수의", function(){
    describe("getRandomNum 함수는", function(){
        it("1~45 사이의 수 반환한다.", function(){
            for(let i = 0; i<1000; i++){
                let one_rand_num = getRandomNum()
                expect(parseInt(one_rand_num)).toBe(one_rand_num)
                expect(one_rand_num).toBeGreaterThanOrEqual(1)
                expect(one_rand_num).toBeLessThanOrEqual(45)
            }
        })
    })

    describe("checkDuplicatedNum 함수는", function(){
        it("([1, 7, 5, 3, 6, 10], 1)에 대해서 중복이 있다.", function(){
            expect(checkDuplicatedNum([1, 7, 5, 3, 6, 10], 1)).toBeTruthy()
        })

        it("([11, 27, 16, 23, 41, 19], 9)에 대해서 중복이 없다.", function(){
            expect(checkDuplicatedNum([11, 27, 16, 23, 41, 19], 9)).toBeFalsy()
        })
    })

    describe("checkDuplicatedNumInList 함수는", function(){
        it("[1, 7, 11, 29, 15, 23]에 대해서 중복이 없다.", function(){
            expect(checkDuplicatedNumInList([1, 7, 11, 29, 15, 23])).toBeFalsy()
        })

        it("[11, 23, 20, 11, 35, 42]에 대해서 중복이 있다.", function(){
            expect(checkDuplicatedNumInList([11, 23, 20, 11, 35, 42])).toBeTruthy()
        })
    })

    describe("getLottoNums 함수는", function(){
        it("6개의 랜덤 숫자를 중복없이 가져온다.", function(){
            let six_num_list = getLottoNums()
            expect(six_num_list.length).toBe(6)
            expect(checkDuplicatedNumInList(six_num_list)).toBeFalsy()
        })
    })

    describe("getWinningNumbersAndBonusNumber 함수는", function(){
        it("winning_numbers와 bonus_number에 대해 중복이 없다.", function(){
            getWinningNumbersAndBonusNumber()
            expect(checkDuplicatedNum(winning_numbers, bonus_number)).toBeFalsy()
        })
    })

    describe("getMachedNum 함수에서", function(){
        it("winning_numbers [2, 7, 11, 23, 25, 30], lotto_nums [11, 29, 9, 13, 20, 7]에 대해 중복 개수가 2개이다.", function(){
            winning_numbers = [2, 7, 11, 23, 25, 30]
            expect(getMachedNum([11, 29, 9, 13, 20, 7])).toBe(2)
        })
    })

    describe("getWinningResult 함수에서", function(){
        it("winning_numbers [21, 17, 33, 43, 15, 8], bonus 13, lotto_nums [8, 13, 15, 17, 21, 43]는 2등이다.", function(){
            winning_numbers = [21, 17, 33, 43, 15, 8]
            bonus_number = 13
            expect(getWinningResult([8, 13, 15, 17, 21, 43])).toBe('2등')
        })
    })
})
