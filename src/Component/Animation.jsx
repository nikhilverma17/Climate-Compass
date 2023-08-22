import {gsap} from 'gsap';
import '../css/animation.css';
import logo from '../assets/logo.png'

export default function Animation(){
    gsap.fromTo('.logo',{opacity:0, x:-30 }, {opacity: 1 , x: 0 , duration: 2 })
    return (
    <div className='logo'><img src={logo}/><p>Climate Compass</p><br></br></div>)
}