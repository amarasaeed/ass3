

function Cards() {

  const quantity = [1, 2]

  return (

    <>
      {quantity.map(() => {
        return (

          <div className='border bg-red-400  text-white  text-xs p-5'>
            <div className='mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum. </div>


            <div>
              <div>amara saeed</div>
              <div>Bs IT</div>
            </div>
          </div>



        )
      })}
      {
        quantity.map(() => (
          <div className='border bg-teal-500  text-white  text-xs p-5'>
            <div className='mb-2'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum. </div>


            <div>
              <div>maria saeed</div>
              <div>Bs IT</div>
            </div>
          </div>

        ))
      }

    </>
  )
}

export default Cards