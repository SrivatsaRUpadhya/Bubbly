import React from 'react'

const Team = () => {

    const team = [
        {
            "name": "Aluin",
            "image": "team/14.png",
            "github": "sfgate.com/amet/justo/morbi/ut/odio/cras/mi.xml"
        },
        {
            "name": "Karel",
            "image": "team/14.png",
            "github": "japanpost.jp/nulla/tellus/in.jsp"
        },
        {
            "name": "Nat",
            "image": "team/14.png",
            "github": "state.gov/ipsum/integer.html"
        },
        {
            "name": "Lambert",
            "image": "team/14.png",
            "github": "army.mil/lorem/id/ligula/suspendisse.jpg"
        },
        {
            "name": "Cass",
            "image": "team/14.png",
            "github": "samsung.com/integer/ac/neque/duis/bibendum/morbi.png"
        },
        {
            "name": "Leonerd",
            "image": "team/14.png",
            "github": "vinaora.com/a/pede/posuere.jsp"
        },
        {
            "name": "Burr",
            "image": "team/14.png",
            "github": "xing.com/risus/dapibus.png"
        },
        {
            "name": "Augy",
            "image": "team/14.png",
            "github": "vimeo.com/tempus/sit/amet/sem/fusce/consequat/nulla.json"
        },
        {
            "name": "Asa",
            "image": "team/14.png",
            "github": "ed.gov/sapien/iaculis.xml"
        }
    ]

    return (
        <>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

                    <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
                    </p>

                    <div className="grid grid-cols-1 gap-4 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4 ">

                        {team.map((member, key) => {
                            return (

                                <div key={key} className="flex flex-col items-center p-8 duration-200 transform cursor-pointer group hover:bg-gray-200 rounded-xl justify-self-center hover:-translate-y-2 hover:scale-105   transition-all ease-in-out  ">
                                    <img className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 group-hover:ring-gray-800" src={member.image} alt="" />

                                    <div className="mt-4 text-2xl font-semibold capitalize text-white group-hover:text-gray-700 ">{member.name}</div>

                                    <p className="mt-2  capitalize text-gray-300 group-hover:text-gray-800">design director</p>

                                    <div className="flex mt-3 -mx-2">

                                        <a href="#" className="mx-2 transition-all duration-150 ease-in-out  text-gray-300 hover:scale-150 group-hover:text-gray-900" aria-label="Github">
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                                                </path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                            )
                        })
                        }



                    </div>
                </div>
            </section>
        </>
    )
}

export default Team