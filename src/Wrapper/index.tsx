import { Swrapper } from './Swrapper'
type WrapperProps = {
    children: React.ReactNode;
    as?: React.ElementType;
}

export default function Wrapper({ children, as }: WrapperProps) {
    return <Swrapper as={as}>{children}</Swrapper>;
}