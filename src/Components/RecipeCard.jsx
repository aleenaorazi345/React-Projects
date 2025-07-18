export default function Main(props){
    console.log(props);
    return (
    <div className="card">
      {/* <img src={props.image} alt={props.title} /> */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}