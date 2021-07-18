const BackDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.showDrawer} onClick={props.showCarts}/>
    )
}

export default BackDrop
