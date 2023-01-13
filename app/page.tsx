import Link from "next/link"

export default function Home() {
  return (
    <div>
      Welcome to this Dashboard!<br/>
      <Link href="/Shoaib">Go to Shoaib</Link><br/>
      <Link href="/Afreen">Go to Afreen</Link><br/>
      <Link href="/Gallery">Go to Gallery</Link><br/>
      You can create a dynamic page by entering any name at the end of URL in the browser with forward slash: "/xyz"
      <br /> Where xyz is any name/word you want to add!
    </div>
  )
}
