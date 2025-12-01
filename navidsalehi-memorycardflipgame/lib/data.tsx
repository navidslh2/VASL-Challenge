import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";




export const headerData = [
    {id:1, name:'خانه', href:'/' },
    {id:2, name:"بازی مموری کارت", href:''},
    {id:3, name:"آنلاین شاپ", href:'https://navidsalehi-cv.ir/'}
    ]

export const socialMediaIcon =[
    {id:1,icon:<FaGithub /> , tooltip:'گیت هاب',href:'https://github.com/navidslh2', className:'text-black'},
    {id:2,icon:<FaInstagram /> , tooltip:'اینستاگرام', href:'https://instagram.com/navidslh', className:'text-red-400'},
    {id:3,icon:<FaLinkedin /> , tooltip:'لینک دین',href:'https://www.linkedin.com/in/navid-salehi-3b4a57341', className:'text-blue-600'},
    {id:4,icon:<FaTelegram /> , tooltip:'تلگرام',href:'https://t.me/navidslh', className:'text-blue-400'},
]