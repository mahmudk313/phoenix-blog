//Components
import SignUpTitle from "./signUpTitle";
import SignUpForm from "./signUpForm";

export default function SignUp() {
    
    return (
        <>
            <div className="mt-10 sm:mt-0 h-full bg-gray-50">
                <div className="min-h-full flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8">
                    <SignUpTitle />
                    <SignUpForm />
                </div>
            </div>
            
        </>
    )
}