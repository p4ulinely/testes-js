"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var listaTodosHp = document.querySelector('#meus-todos ul');

var Todolist =
/*#__PURE__*/
function () {
  function Todolist() {
    _classCallCheck(this, Todolist);

    this.todos = [];
  }

  _createClass(Todolist, [{
    key: "addTodo",
    value: function addTodo(todo) {
      todo == "" ? this.todos.push('Novo todo') : this.todos.push(todo);
    }
  }, {
    key: "preecherTodos",
    value: function preecherTodos() {
      listaTodosHp.innerHTML = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var val = _step.value;
          var meuLi = document.createElement('li');
          meuLi.appendChild(document.createTextNode(val));
          listaTodosHp.appendChild(meuLi);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      console.log(this.todos);
    }
  }]);

  return Todolist;
}();

var meusTodos = new Todolist();

document.getElementById('btn-adicionar').onclick = function () {
  var novoTodo = document.getElementById('inpt-todo').value;
  meusTodos.addTodo(novoTodo);
  meusTodos.preecherTodos();
};
