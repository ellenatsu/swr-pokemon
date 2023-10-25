import Link from "next/link";

export default function Home() {
  const test_name = "eevee";
  return (
    <section>
      <div>this is home page</div>
      <div>for each pokemon i want:</div>

      <Link href={`/pokemon/${test_name}`}>click here to visit eevee test</Link>
    </section>
  );
}
