import { Suspense } from "react"

export default function LazyLoad(Component: React.LazyExoticComponent<React.ComponentType<any>>) {
    return <Suspense fallback={<div>Loading...</div>}>
        <Component />
    </Suspense>
}

