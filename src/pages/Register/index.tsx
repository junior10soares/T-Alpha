import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { registerSchemaRegister, RegisterFormData } from './validation';

import { Container } from './styles';
import { RegisterUser } from '../../lib/auth';

export function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchemaRegister),
    });

    function goBack() {
        navigate('/login')
    }

    const onSubmit = async (data: RegisterFormData) => {
        try {
            await RegisterUser(
                data.name,
                data.cpfOrCnpj,
                data.email,
                data.phone,
                data.password
            );
            toast.success('Usuário cadastrado com sucesso!');
            navigate('/login')

        } catch (error: any) {
            toast.error(error.response.data.message);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastro</h1>

                <Input
                    type='text' placeholder='Digite seu nome' {...register('name')}
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}

                <Input
                    type='text' placeholder='Digite seu CPF ou CNPJ' {...register('cpfOrCnpj')}
                />
                {errors.cpfOrCnpj && <p className="error-message">{errors.cpfOrCnpj.message}</p>}

                <Input type='text' placeholder='Digite seu email' {...register('email')} />
                {errors.email && <p className="error-message">{errors.email.message}</p>}

                <Input type='text' placeholder='Digite seu telefone' {...register('phone')} />
                {errors.phone && <p className="error-message">{errors.phone.message}</p>}

                <Input type='password' placeholder='Digite sua senha' {...register('password')} icon={true} />
                {errors.password && <p className="error-message">{errors.password.message}</p>}

                <Button type="submit" title="Cadastrar" variant="default" />
                <Button onClick={goBack} type="button" title="Voltar" variant="default" />
            </form>
        </Container>
    )
}