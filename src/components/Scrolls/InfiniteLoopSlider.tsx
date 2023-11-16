import s from './scrolls.module.scss'

const InfiniteLoopSlider = ({ children, duration, reverse = false }: any) => {
    const style = {
        "--duration": `${duration}ms`,
        '--direction': reverse ? 'reverse' : 'normal'
    } as React.CSSProperties;
    return (
        <div style={style}>
            <div className={s.inner}>
                {children}
                {children}
            </div>
        </div>
    );
};

export default InfiniteLoopSlider