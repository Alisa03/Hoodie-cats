import s from './scrolls.module.scss'

const InfiniteLoopSlider = ({ children, duration, reverse = false }: any) => {
    return (
        <div style={{
            "--duration": `${duration}ms`,
            '--direction': reverse ? 'reverse' : 'normal'
        }}>
            <div className={s.inner}>
                {children}
                {children}
            </div>
        </div>
    );
};

export default InfiniteLoopSlider