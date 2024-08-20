import { useState } from "react";
import Question from "./Question";

 
 function FAQ() {
    const question = [
        {
            id: 1,
            question: "Bookmark in one click",
            answer: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",

        },
        {
            id: 2,
            question: "Intelligent search",
            answer: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  
        },
        {
            id: 3,
            question: "Share your bookmarks",
            answer: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
        }
    ];

    const [items] = useState(question)
    const [showAns,setShowAns] = useState(null)

   return (
     <>
       <section className="max-w-4xl px-8 mx-auto flex flex-col gap-8">
            <article className="text-center flex flex-col gap-4">
                <h2 className="text-2xl lg:text-4xl">Frequently Asked Questions</h2>
                <p className="text-slate-500 text-sm md:text-lg lg:px-16"> Here are some of our FAQs. If you have any other questions you’d like 
                answered please feel free to email us.</p>
            </article>

            <article>
                    {
                        items.map((item)=>(
                            <article key={item.id}>
                               <Question key={item.id} item={item} setShowAns={setShowAns} showAns={showAns}/>
                            </article>
                        ))
                    }
            </article>

            <article className="flex items-center justify-center pb-20">
                <button className="bg-soft-blue text-white px-6 py-3 rounded shadow shadow-soft-blue">More Info</button>
            </article>
       </section>
     </>
   )
 }
 
 export default FAQ
 