import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import { InputWrapper, InputContainer, IconWrapper } from './styles';

interface PropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, PropsInput>(
    ({ type = 'text', placeholder, icon = false, ...rest }: PropsInput, ref) => {
        const [inputType, setInputType] = useState(type);

        const togglePasswordVisibility = () => {
            setInputType(prevType => (prevType === 'password' ? 'text' : 'password'));
        };

        return (
            <InputWrapper>
                <InputContainer
                    type={inputType}
                    placeholder={placeholder}
                    ref={ref}
                    {...rest}
                />
                {icon && type === 'password' && (
                    <IconWrapper onClick={togglePasswordVisibility} role="button" tabIndex={0}>
                        {inputType === 'password' ? <Eye color='black' /> : <EyeOff color='black' />}
                    </IconWrapper>
                )}
            </InputWrapper>
        );
    }
);
