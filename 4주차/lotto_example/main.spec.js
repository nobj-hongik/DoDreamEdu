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
