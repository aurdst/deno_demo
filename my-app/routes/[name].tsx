// routes/greet/[name].tsx

/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  const { name } = props.params;
  return (
    <main>
      Hello { name }
    </main>
  )
}
