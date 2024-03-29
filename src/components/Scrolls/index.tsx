import InfiniteLoopSlider from "./InfiniteLoopSlider";
import { random } from "./foo";
import s from './scrolls.module.scss'

const Scrolls = () => {
    const DURATION = 20000;
    let ROWS = (window.innerWidth <= 770) ? 2 : 4;

    return <>
        <div className={s.list}>
            {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                    {[...new Array(16)].map((t, i) => {
                        t = i + 1
                        return <img className="img" key={i} src={`/image/photo${t}.webp`} alt="" />
                    })}
                </InfiniteLoopSlider>
            ))}
            <div className={s.fade} />
        </div>
    </>
}

export default Scrolls