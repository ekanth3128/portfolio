import React from 'react'
import Image from 'next/image'
import bannerImg from '../../../public/image/blackandwhitek.jpg'

const Banner = () => {
    return (
        <>

            <div className="md:m-10">
                <div className="container mx-auto ">
                    <div className=" space-y-5 md:flex justify-between">
                        <Image src={bannerImg} alt='Banner-image' width={500} height={500} />
                        <div className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum earum eum fugiat eius quaerat, id quam quod totam aperiam deleniti.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner