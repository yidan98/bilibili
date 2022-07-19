import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";

import "./App.css";

export default class App extends Component {
  state = {
    todoList: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "逛街", done: false },
      { id: 4, name: "上班", done: false },
    ],
  };
  a = (data) => {
    console.log("App", data);
  };
  // 添加todo
  addTodo = (todoObj) => {
    const { todoList } = this.state;
    const newTodoList = [todoObj, ...todoList];
    this.setState({
      todoList: newTodoList,
    });
  };
  // 更新todo
  updataTodo = (id, done) => {
    const { todoList } = this.state;
    const newTodos = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, done: done };
      } else {
        return item;
      }
    });
    this.setState({ todoList: newTodos });
  };

  // 删除
  delTodo = (id) => {
    const { todoList } = this.state;
    const newTodos = todoList.filter((item) => {
      return item.id !== id;
    });
    this.setState({ todoList: newTodos });
  };

  // 全选/全不选
  allChecked = (done) => {
    const { todoList } = this.state;
    const newTodos = todoList.map((item) => {
      return { ...item, done: done };
    });
    this.setState({ todoList: newTodos });
  };
  // 清除所以已经完成的任务
  clearAllDone = () => {
    const { todoList } = this.state;
    const newTodos = todoList.filter((item) => {
      return !item.done;
    });
    this.setState({ todoList: newTodos });
  };

  render() {
    const { todoList } = this.state;
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <h2>todoList案例</h2>
          <Header addTodo={this.addTodo} a={this.a} />
          <List
            todoList={todoList}
            updataTodo={this.updataTodo}
            delTodo={this.delTodo}
          />
          <Footer
            todoList={todoList}
            allChecked={this.allChecked}
            clearAllDone={this.clearAllDone}
          />
        </div>
      </div>
    );
  }
}
