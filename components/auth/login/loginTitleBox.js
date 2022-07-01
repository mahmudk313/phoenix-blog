import Link from 'next/link'
import Image from 'next/image'

export default function LoginTitleBox() {
    return (
        <div>
            <Image
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link href="/auth/createAccount">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                    Create a new account
                </a>
            </Link>
            </p>
        </div>
    )
}