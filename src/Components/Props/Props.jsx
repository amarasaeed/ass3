import React from 'react'


const Card = (props) => {
    return (
        <div>
            <div className='border bg-gray-500  text-white  text-xs p-3'>
                <div className='mb-6 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum ab tempore possimus explicabo magni. </div>


                <div>
                    <div>{props.name}</div>
                    <div>{props.class}</div>
                </div>
            </div>
        </div>

    )
}

export default Card