import React from 'react'
import bannerImg from '../../../public/image/blackandwhitek.jpg'
import Image from 'next/image'

const slideData = [
    {
        id: 1,
        img: bannerImg,
        title: 'Software Developer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam perferendis asperiores necessitatibus neque dolores officia iste harum, magni, non cumque eveniet ipsam tenetur doloribus reprehenderit laudantium corporis. Minima, illum hic.',
        buttonText: 'Contact'
    },
    {
        id: 2,
        img: bannerImg,
        title: 'Software testing',
        description: `Hello, I'm a tester`,
        buttonText: 'Contact'
    },
    {
        id: 3,
        img: bannerImg,
        title: 'Software testing',
        description: `Hello, I'm a tester`,
        buttonText: 'Contact'
    },
    {
        id: 4,
        img: bannerImg,
        title: 'AAAAAAAAA',
        description: `Hello, I'm a tester`,
        buttonText: 'Contact'
    }
]

const Slide = () => {
    return (
        <>
            <div className="py-10">
                <div className="container mx-auto px-5 w-2/4">
                    <div className="text-4xl font-bold mb-2 text-slate-600 ">This is a slider secrion </div>
                    <div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
                        {slideData.map((slide) => (
                            <div key={slide.id} className="space-y-4">
                                <Image
                                    className='w-full h-80 object-cover overflow-hidden rounded-3xl'
                                    src={slide.img}
                                    width={800}
                                    height={800}
                                    alt={slide.title}
                                />
                                <button className='bg-black text-white rounded-full hover:bg-green-400 hover:text-black px-4 py-2'>
                                    {slide.buttonText}
                                </button>
                                <h2 className='text-2xl font-bold'>{slide.title}</h2>
                                <p className='text-sm'>{slide.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Slide
