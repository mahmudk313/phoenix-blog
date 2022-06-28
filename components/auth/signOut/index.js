//Components
import SignOutTitle from "./signOutTitle";
import SignOutForm from "./signOutForm";

export default function SignOut() {
    
    return (
        <>
            <div className="mt-10 sm:mt-0 h-full bg-gray-50">
                <div className="min-h-full flex flex-col items-center justify-center p-4 sm:px-6 lg:px-8">
                    <SignOutTitle />
                    <SignOutForm />
                </div>
            </div>
            
        </>
    )
}