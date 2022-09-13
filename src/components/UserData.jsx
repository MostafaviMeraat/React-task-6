import { Fragment } from "react"


const UserData = ({ info, setCheck }) => {

  return (<Fragment>
    <div className="user">
      <i class="fa-regular fa-rectangle-xmark" onClick={()=>setCheck(false)}></i>
      <p>{info.name + ": " + info.id.toString().slice(10, 13)}</p>
    </div>
   
  </Fragment>)
}

export default UserData