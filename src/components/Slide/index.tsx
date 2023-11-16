import s from './slide.module.scss'

export default function Slide({ data }: { data: IProps }) {
    return <section
        className={s.slide}
        style={{ backgroundColor: data.color }}>
        <div className={s.block}>
            <div className={s.container}>
                {data.content}
            </div>
        </div>
        <img className={s.img} src={`/image/photo${data.img}.webp`} />
    </section>
}