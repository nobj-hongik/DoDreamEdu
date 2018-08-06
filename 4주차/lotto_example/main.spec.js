// TODO :: Write the testing code
describe("로또 함수의", function(){
  describe("getRandomNum() 함수는", function(){
      it("1~45 사이의 랜덤한 수를 반환한다.", function(){
          let rand_num = getRandomNum()
          expect(parseInt(rand_num)).toBe(rand_num)
          expect(rand_num).toBeGreaterThanOrEqual(1)
          expect(rand_num).toBeLessThanOrEqual(45)
      })
  })  
  describe("checkDuplicatedNum() 함수는", function(){
      it("[1,2,3,4,5,6(], 5에 대해 중복 숫자가 있다.", function() {
          expect(checkDuplicatedNum([1,2,3,4,5,6],5)).toBeTruthy()
      })
      it("[1,2,3,4,5,6], 10에 대해 중복 숫자가 없다.", function(){
        expect(checkDuplicatedNum([1,2,3,4,5,6],10)).toBeFalsy()
      })
  })
})