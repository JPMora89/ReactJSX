const PersonComponent  =    (props) => {
   let votingAge = props.age >= 18 ? 'please vote' : 'you must be 18';
   let hobbies = props.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>);

   
   return (
   <div>
      <p>Learn more about this person</p> 
      <ul>
        <li>Name: {props.name.slice(0,6)} </li>
        <li>Age: {props.age} </li>
        <ul> Hobbies: {hobbies} </ul>
      </ul>
        <h3>{votingAge}</h3>
   
   </div>
   )
};