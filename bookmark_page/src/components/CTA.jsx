
function CTA() {
  return (
    <section className="bg-soft-blue px-8 py-7">
      <div className="max-w-7xl mx-auto  flex flex-col md:items-center text-center">
        <h3 className="text-white uppercase font-normal mb-2">35,000+ already joined</h3>
        <p className="text-white text-2xl  mb-4">Stay up-to-date with what we’re doing</p>
        <form action="" className="flex flex-col md:flex-row items-center  gap-3">
            <input type="email" name="email" id="email" className="border py-2 px-4 rounded w-full md:w-fit" placeholder="Enter your email address" required/>
            <button className="bg-soft-red text-white py-3 rounded w-full md:w-fit md:px-2 md:py-2">Contact us</button>
        </form>
      </div>
    </section>
  )
}

export default CTA
