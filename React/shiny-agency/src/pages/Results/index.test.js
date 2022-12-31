import { formatJobList } from './'
import { formatFetchParams } from './'

 
test('Ceci est mon premier test', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})

describe('Tester formatFetchParams',() => {

it('Should return a string', () => {
    const result = 'a1=true&a2=false&a3=true'
    expect(formatFetchParams({1 : true,2 : false,3 : true})).toEqual(result)
})

it('Should return an empty string', () => {
    const result = ''
    expect(formatFetchParams({})).toEqual(result)
})


})