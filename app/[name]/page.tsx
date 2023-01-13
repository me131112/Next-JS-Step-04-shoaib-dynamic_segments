import Link from "next/link"
export default function Home({params}:{
    params: {name: string}
    // searchParams: {id: string}
})
{
return (
    <div>
    Welcome to the page of {params.name}!
    <br />
    <Link href="/">Back to Dashboard</Link>
    </div>
)
}
