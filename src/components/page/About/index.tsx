import s from './about.module.scss'

const About = () => <>
    <p className="text">
        Hoodie cats is a collection of 333 unique pixelated kittens, on the Polygon network.
    </p>
    <p className="text">Используются слои: </p>
    <ul className={`text ${s.list}`}>
        <li>Body</li>
        <li>Eyes</li>
        <li>Hoodie</li>
        <li>Embellishments</li>
    </ul>
    <p className="text">Findable on:</p>
    <div className='flex'>
        <a href="https://opensea.io/collection/hoodie-cats" target="_blank">
            <img className={s.icon} src="/Vector-1.svg" alt="" />
        </a>
        <a href="https://rarible.com/hoodie-cats/items" target="_blank">
            <img className={s.icon} src="/Vector.svg" alt="" />
        </a>
    </div>
</>

export default About