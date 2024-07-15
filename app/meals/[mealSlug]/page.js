import Link from "next/link";

export default function MealsSomething(props) {
    return (
        <main>
            <h1 style={{ color: 'white', textAlign: 'center' }}>
                MealsSomething page
            </h1>
            <p style={{ color: "white" }}>
                {props.params.mealSlug}
            </p>
            <p>
                <Link href=".">Voltar</Link>
            </p>
        </main>
    );
}
