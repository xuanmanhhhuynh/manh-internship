import { ROUTES } from "@/common/contants/routes";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={ROUTES.HOME}>Trang chủ</Link>
      <Link href={ROUTES.ABOUT}>about</Link>
      <Link href={ROUTES.CONTACT}>contact</Link>
      <Link href={ROUTES.TODOLIST}>todolist</Link>
      <p className="text-sky-700">Test</p>
    </main>
  );
}
