import SbEditable from 'storyblok-react'

const withEditable = (Component) => () =>(
    <SbEditable content={content}>
        <Component />
    </SbEditable>
)

export default withEditable
