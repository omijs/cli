import { tag, h, WeElement, render, bind } from "omi";

import "./index.tsx";

const tagName = "my-demo";

@tag(tagName)
export default class MyDemo extends WeElement {
  count = 2;

  @bind
  onChanged(evt: CustomEvent) {
    this.count = evt.detail;
    this.update();
  }

  render() {
    return (
      <div>
        <o-counter onCountChanged={this.onChanged}></o-counter>
        <p>当前计数: {this.count}</p>
      </div>
    );
  }
}

render(<my-demo></my-demo>, "body");
