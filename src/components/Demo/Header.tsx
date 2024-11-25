import laravel from '../../assets/Image/Laravel-Logo.png'
import react from '../../assets/Image/react.png'
import html from '../../assets/Image/html.png'
import css from '../../assets/Image/css.png'
export default function Header(){
    return(   
    <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
            <p className="mb-4">Hi, I’m [Your Name], a Frontend Developer with a passion for building responsive, user-friendly web applications. I specialize in HTML, CSS, JavaScript, and frameworks like React and Vue.js. I aim to create clean, efficient code while ensuring a smooth and engaging user experience. Always eager to learn and collaborate, I’m excited to take on new challenges and contribute to impactful projects.
                Feel free to check out my work, and let’s connect!</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"></img>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"></img>
        </div>
        <div className="grid grid-cols-4 gap-2 col-start-1 col-end-3 mt-10 justify-items-center" >
        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-4/5 h-13"><img src={laravel} alt="laravel" /></button>
        <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 w-4/5    h-13"><img src={react} alt="react" /></button>
        <button type="button" className="text-orange-400 hover:text-white border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-yellow-900 w-4/5    h-13"><img src={html} alt="" /></button>
        <button type="button" className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 w-4/5    h-13"><img src={css   } alt="laravel" /></button>
        </div>
    </div>
    </section>
    )
}