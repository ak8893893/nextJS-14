import Link from "next/link";

export default function Book() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/book">All Books</Link>
                    </li>
                    {/* 這邊如果有需要可以繼續添加其他連結 */}
                </ul>
            </nav>
            <h1>Book</h1>
        </div>
    );
}
