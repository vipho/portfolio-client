export default function WrapperMain(props: React.PropsWithChildren): JSX.Element {
    return (
        <>
            <h1>test</h1>
            { props.children }
        </>
    )
}
