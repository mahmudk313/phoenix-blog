//Components
import LoginInputs from './loginInputs';
import LoginFormOptions from './loginFormOptions';
import LoginFormBtn from './loginFornBtn';

export default function LoginForm() {
    return(
        <form className="mt-8 space-y-6" action="#" method="POST">
            <LoginInputs />
            <LoginFormOptions />
            <LoginFormBtn />
        </form>
    )
}