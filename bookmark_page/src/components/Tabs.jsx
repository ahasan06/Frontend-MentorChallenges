import { useState } from "react";

function Tabs() {
    const data = [
        {
            id: 1,
            image: './images/illustration-features-tab-1.svg',
            title: "Bookmark in one click",
            desc: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
            link: "More Info",
            button: "Simple Bookmarking"
        },
        {
            id: 2,
            image: './images/illustration-features-tab-2.svg',
            title: "Intelligent search",
            desc: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
            link: "More Info",
            button: "Speedy Searching"
        },
        {
            id: 3,
            title: "Share your bookmarks",
            image: './images/illustration-features-tab-3.svg',
            desc: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
            link: "More Info",
            button: "Easy Sharing"
        }
    ];

    const [tabs] = useState(data)
    const [value, setValue] = useState(0)

    const { image, title, desc, link } = tabs[value]

    const handleTab = (id)=>{

        setValue(id)
    }

    return (
        <>
            <section className=" max-w-7xl mx-auto  px-8 py-20">

                <article className="flex flex-col text-center md:w-1/2 md:mx-auto">
                    <h2 className="text-3xl pb-8">Features</h2>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.</p>
                </article>

                <div>
                    <ul className="text-center flex flex-col items-center justify-center my-10 md:flex-row md:gap-20 md:border-b md:w-fit mx-auto">
                        {
                            tabs.map((tab, index) => (
                                <li key={tab.id} className=" border-t w-full last:border-b md:border-b-transparent md:w-fit md:border-t-transparent">
                                    <button onClick={()=>handleTab(index)} className={`py-3 border-b-4  border-transparent ${index === value && "border-b-4 border-b-red-400"}`}>{tab.button}</button>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="md:grid grid-cols-2 md:gap-20">
                        <article className="relative">
                            <img src={image} alt="tab image" className="w-full h-full object-contain mx-auto block" />
                            <div className="tab__bg"></div>
                        </article>

                        <article className=" flex flex-col gap-5 justify-center items-center md:items-start text-center md:text-start my-24">
                            <h2 className="md:text-3xl text-2xl  md:pb-0">{title}</h2>
                            <p>{desc}</p>
                            <button className="bg-soft-blue text-white rounded shadow-lg py-2 px-6 hidden md:block">{link}</button>
                        </article>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Tabs
