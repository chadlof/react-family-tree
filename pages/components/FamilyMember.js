export default function FamilyMember(props) {
    return (
        <div className="familyMember">
            <h2>{props.name}</h2>
            <div className='outerImgBox'>
            <div className="imgBox">
                <img src="/static/img/imgPlaceholder.png" alt="Place Holder" width="200px"/>
            </div>
            </div>
            <h3>Born: {props.birthdate}</h3> 
        </div>
    )
}
