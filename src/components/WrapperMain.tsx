import styled from "styled-components"
import WrapperMainMenu from "./WrapperMainMenu"
import WrapperMainSidebar from "./WrapperMainSidebar"

const Content = styled.div`
    padding-left: 192px;
`

export default function WrapperMain(props: React.PropsWithChildren): JSX.Element {
    return (
        <>
            <WrapperMainMenu />
            <WrapperMainSidebar />
            <Content>
                { props.children }
            </Content>
        </>
    )
}
