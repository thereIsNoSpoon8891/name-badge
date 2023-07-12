

function Badge (props){

    const {firstName, lastName, email, birthPlace, number, favFood, comments} = props

    return(
        <>
        <div className='badge-container'>
            <div className="title--container">
                <h1 className="badge--title">
                    Badge:
                </h1>
            </div>

            <div>
                <p>
                    Name: {firstName} {lastName}
                </p>
                <p>
                    Phone: {number}
                </p>
            </div>

            <div>
                <p>
                    Place of birth: {birthPlace}
                </p>
                <p>
                    Favorite Food: {favFood}
                </p>
            </div>

            <div>
                <p>
                    Email: {email}
                </p>
            </div>
            <textarea value={comments}/>
        </div>
        </>
    )
}

export default Badge