import { useState, useEffect} from "react";




// class Counter extends Component {
//   state = {
//    count: 0
//  };
//  handleClick = () => {
//   this.setState(({ count }) => ({
//     count: count + 1
//   }));
// };
// render() {
//  return <button onClick={this.handleClick}>{this.state.count}</button>;
//}
//}

function Counter(){

    const[count, setCount] = useState(0);
    useEffect(() => {
        document.title = `Вы нажали ${count} раз`;
      });

    return(
        <>
        <p>Вы нажали {count} раз</p>
        <button onClick={()=>setCount(count+1)}>Нажми</button>
        </>
    )
}
  export default Counter
