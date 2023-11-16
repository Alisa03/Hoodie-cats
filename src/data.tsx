import { About, History, Home } from "./components/page"

export const home = {
    id: 1,
    color: 'var(--active1)',
    img: '4',
    content: <Home />
}

export const data = [
    {
        id: 3,
        color: 'var(--active2)',
        img: '7',
        content: <About />
    },
    {
        id: 4,
        color: 'var(--active3)',
        img: '10',
        content: <History />
    }
]