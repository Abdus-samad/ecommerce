const BackDrop = (props) => {
    return (
        <div className='backdrop' onClick={props.showDrawer} onClick={props.showCart}/>
    )
}

export default BackDrop
