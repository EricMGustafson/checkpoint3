import { ProxyState } from "../AppState.js";
import { List } from "../Models/List.js";
import { Task } from "../Models/Task.js"

export function saveState() {
  let data = {
    lists: ProxyState.lists,
    tasks: ProxyState.tasks,
  }
  window.localStorage.setItem('Task Master', JSON.stringify(data))
}

export function loadState() {
  let data = window.localStorage.getItem('Task Master')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.lists = obj.lists.map(l => new List(l))
    ProxyState.tasks = obj.tasks.map(t => new Task(t))
  }
}