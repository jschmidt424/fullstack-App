class MessageApp {
  constructor() {
    this.messages = [];
  }

  // post a message
  post(content) {
    let item = {
      id: this.messages.length,
      content: content,
      date: new Date(),
    };
    this.messages.push(item);
    return this.messages;
  }

  // get a message
  get(id) {
    return this.messages[id];
  }

  // update a message
  update(id, update) {
    this.messages[id].content = update;
    return this.messages[id];
  }

  // delete a message
  delete(id) {
    this.messages.splice(id - 1, 1);
    return this.messages;
  }
}

export default MessageApp;
