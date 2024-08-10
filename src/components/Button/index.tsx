import { Button as StyledButton } from './styles';

interface PropsButton {
    type: "button" | "submit";
    title: string;
    variant?: 'default' | 'outline';
    onClick?: () => void
    width?: string
}

export function Button({ type, title, variant = 'default', onClick, width }: PropsButton) {
    return (
        <StyledButton width={width} onClick={onClick} type={type} variant={variant}>
            {title}
        </StyledButton>
    );
}
