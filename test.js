
function makeActionCreator(type, ...argNames) {
  console.log(...argNames)
  return function (...argNames) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = argNames[index]
    })
    return action
  }
}

const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const REMOVE_TODO = 'REMOVE_TODO'

const addTodo = makeActionCreator(ADD_TODO, 'text')
const editTodo = makeActionCreator(EDIT_TODO, 'id', 'text')
const removeTodo = makeActionCreator(REMOVE_TODO, 'id')

console.log(addTodo())
console.log(editTodo())
console.log(removeTodo())
