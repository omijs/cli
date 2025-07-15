import { tag, h, WeElement, bind } from 'omi'

const tagName = 'o-counter'
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [tagName]: Omi.Props & {
        onCountChanged?: (evt: CustomEvent) => void
      }
    }
  }
}

@tag(tagName)
export default class Counter extends WeElement {
  static css = `
    span {
      color: red;
    }
  `

  // 使用内部状态
  state = {
    count: 2
  }

  @bind
  minus() {
    this.state.count--
    this.update()
    this.fire('count-changed', this.state.count)
  }

  @bind
  plus() {
    this.state.count++
    this.update()
    this.fire('count-changed', this.state.count)
  }

  render() {
    return (
      <div>
        <button onClick={this.minus}>-</button>
        <span>{this.state.count}</span>
        <button onClick={this.plus}>+</button>
      </div>
    )
  }
}
