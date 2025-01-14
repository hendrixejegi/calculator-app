import './css/App.css'

export default function App() {
  return (
    <div className="calculator">
      <div className="title-bar">
        <h1>calc</h1>
        <span>theme</span>
        <div className="toggle-control">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <div className="toggle-bar">
            <div className="toggle"></div>
          </div>
        </div>
      </div>
      <div className="display">399,981</div>
      <div className="buttons">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="control-btn">DEL</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button>/</button>
        <button>x</button>
        <button className="span-2 control-btn">RESET</button>
        <button className="span-2 eval-btn">=</button>
      </div>
    </div>
  )
}