

function Cards() {
    let color = '#fff'
    const quantity = [1, 2, 3]
  
    return (
      <>
        <div className="text-9xl font-thin  text-[#09D261] " style={{}} >class three</div>
        {quantity.map(() => {
          return (
            <div className='border bg-black  text-white  text-xs p-4'>
              <div className='mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum ab tempore possimus explicabo magni. </div>
              <div className='flex gap-[20px]'>
                {/* <img src={logo} alt="profile pic" /> */}
                <div>
                  <div>i</div>
                  <div>i</div>
                </div>
              </div>
            </div>
          )
        })}
        {
         quantity.map(() => (
            <div className='border bg-black  text-white  text-xs p-4'>
              <div className='mb-10 '> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae nesciunt amet aliquid doloremque, cupiditate, voluptas numquam eligendi ducimus tempora laborum est velit eaque harum ab tempore possimus explicabo magni. </div>
              <div className='flex gap-[20px]'>
                {/* <img src={logo} alt="profile pic" /> */}
                <div>
                  <div>i</div>
                  <div>i</div>
                </div>
              </div>
            </div>
          ))
        }
  
      </>
    )
  }
  
  export default Cards