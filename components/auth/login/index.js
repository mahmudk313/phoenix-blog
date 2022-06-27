//Components
import LoginForm from './loginForm'
import LoginTitleBox from './loginTitleBox'

export default function Login() {
  return (
    <>
      <div class="h-full bg-gray-50">
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <LoginTitleBox />
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}
