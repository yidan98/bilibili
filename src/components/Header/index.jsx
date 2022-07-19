import React, { Component } from "react";
import { nanoid } from "nanoid";
import "./index.css";

console.log(nanoid());
console.log(nanoid());
console.log(nanoid());
export default class index extends Component {
  // 处理input enter事件
  handleKeyUp = (event) => {
    if (event.keyCode !== 13) return;
    this.props.a(event.target.value);
    if (event.target.value.trim() === "") {
      alert("请输入值");
      return;
    }
    const todoObj = {
      id: nanoid(),
      name: event.target.value,
      done: false,
    };
    this.props.addTodo(todoObj);
    event.target.value = "";
  };
  render() {
    console.log("aaa", this.props);
    return (
      <div className="todo-header">
        <input
          type="text"
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyUp={this.handleKeyUp}
        />
      </div>
    );
  }
}
