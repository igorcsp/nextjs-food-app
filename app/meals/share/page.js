import Link from "next/link";

export default function ShareMealPage() {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                Share page
            </h1>
            <p style={{ color: 'white', textAlign: 'center' }}>
                <Link style={{ color: 'white', textAlign: 'center' }} href=".">Voltar</Link>
            </p>
        </main>
    );
}
