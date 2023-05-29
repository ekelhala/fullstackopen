import './style.css'

const Notification = (props) => {
    if(props.message == null)
        return null
    return(
        <div className={props.type} id='notification'>
            {props.message}
        </div>
    )
}

export default Notification