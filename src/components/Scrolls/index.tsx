import InfiniteLoopSlider from "./InfiniteLoopSlider";
import { random } from "./foo";
import s from './scrolls.module.scss'

const DURATION = 20000;
const ROWS = 4;

const Scrolls = () => (
    <>
        <div className={s.list}>
            {[...new Array(ROWS)].map((_, i) => (
                <InfiniteLoopSlider key={i} duration={random(DURATION - 5000, DURATION + 5000)} reverse={i % 2}>
                    {[...new Array(16)].map((t, i) => (
                        <img className={s.img} key={i} src={`/image/photo${i + 1}.webp`} alt="" />
                    ))}
                </InfiniteLoopSlider>
            ))}
            <div className={s.fade} />
        </div>
    </>
);

export default Scrolls