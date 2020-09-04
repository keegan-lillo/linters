/* eslint-env es6 */

module.exports = function test({ paramA = 'test', paramB }) {
  const foo = {
    'a': 1,
    'b': '2',
    'foo-bar': 3,
  }

  return foo['foo-bar']
}
