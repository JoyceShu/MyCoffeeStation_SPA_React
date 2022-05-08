import "../css/post.css";

export default function Post() {
    const today = new Date();
    const todayDate  = today.getDate();
    const todayMonth = today.getMonth();
    const todayYear = today.getFullYear();
    
    return (
      <div className="post">
            <img
          className="postImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsbSLnTH-a_wfgvjxyemEwhGhs0LoE5XTSA&usqp=CAU"
          alt=""
        />
          <div className="postInfo">
              <div className="postCats">
              <span className="postCat">Photo</span>
              <span className="postCat">Posts</span>
              </div>
              <span className="postTitle">My Coffee</span>
              <hr />
              <span className="postDate">{todayYear + "/" + todayMonth + "/" + todayDate}</span>
          </div>
          <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus corporis? Soluta 
          praesentium ducimus dolorem labore optio corrupti sed. Tempora officia officiis nam incidunt dicta iure explicabo 
          laudantium ipsum nihil.</p>
          </div>
    )
  }