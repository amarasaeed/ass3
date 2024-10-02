import React from 'react'


const Card = (props) => {
    return (
        <div>
            <div className='border bg-black  text-white  text-xs p-4'>
                <div className='mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum ab tempore possimus explicabo magni. </div>
                <div className='flex gap-[20px]'>
                 
                    <div>
                        <div>{props.name}</div>
                        <div>{props.role}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card