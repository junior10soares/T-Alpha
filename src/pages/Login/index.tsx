import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { LoginFormData, loginSchema } from './validation';
import { LoginUser } from '../../lib/auth';
import { useAuth } from '../../context/AuthContext';

import { Container } from './styles';

export function Login() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useAuth()
    const {
        register,
        handleSubmit,
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });
    function handleRegister() {
        navigate('/register')
    }

    const onSubmit = async (data: LoginFormData) => {
        try {
            const response = await LoginUser(data.cpfOrCnpj, data.password);
            const token = response.data.token;

            localStorage.setItem('token', token);
            setIsAuthenticated(true)
            navigate('/home')

        } catch (error: any) {
            toast.error(error.response.data.message);
            console.log('Login error:', error);
        }
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>

                <Input
                    type='text'
                    placeholder='Digite seu CPF/CNPJ'
                    {...register('cpfOrCnpj')}
                />
                <Input
                    type='password'
                    placeholder='Digite sua senha'
                    icon={true}
                    {...register('password')}
                />
                <Button type="submit" title="Acessar" variant="default" />

                <footer>
                    <h2>Ainda não tem cadastro?</h2>
                    <Button
                        onClick={handleRegister}
                        type="button"
                        title="Cadastre-se"
                        variant="outline"
                    />
                </footer>
            </form>
        </Container>
    )
}