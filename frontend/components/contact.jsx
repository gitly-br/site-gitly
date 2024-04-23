export default function Contact() {
    return (
        <div className="bg-[#202020] text-white w-full lg:w-4/12 flex flex-col px-10 py-10 rounded-[32px]">
            <div className="">
                <h1 className="text-[36px] pb-3">Get in touch today</h1>
                <p className="text-[20px] pb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, eum facere natus enim adipisci delectus alias et nihil ex ipsa ratione, eaque distinctio qui deleniti perspiciatis, temporibus dolores amet vel!</p>
            </div>
            <div>
                <form>
                    <div className="flex flex-col">
                        <div className="flex flex-wrap text-[20px] gap-3 pb-4 justify-between">
                            <div className="flex flex-col">
                                <label htmlFor="name">Name *</label>
                                <input type="text" id="name" name="name" className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email">Email *</label>
                                <input type="email" id="email" name="email" className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1" />
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-3 text-[20px] pb-4 justify-between">
                            <div className="flex flex-col">
                                <label htmlFor="phone">Phone *</label>
                                <input type="tel" id="phone" name="phone" className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="company">Company *</label>
                                <input type="text" id="company" name="company" className="w-full rounded-lg bg-[#3E3E3E] border border-white py-1" />
                            </div>
                        </div>
                        <div className="text-[20px] flex flex-col pb-4">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" className="rounded-lg w-full bg-[#3E3E3E] border border-white py-6"></textarea>
                        </div>
                        <button className="text-[16px] bg-[#11562F] py-3 mx-48" type="submit">Send Message</button>
                    </div>
                </form> 
            </div>
        </div>
    );
}
