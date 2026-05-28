const Card = (props) => {
    return (
      <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1681553602523-5dadbbf66fa5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <h1>{props.user}</h1>
      <p>I am {props.age}Y/O. I'm a {props.skills}. I do some professioanl Work</p>  
      <button>View Profile</button>
      </div>
    )
}

export default Card;