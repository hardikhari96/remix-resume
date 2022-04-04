import { Link } from "remix";

export default function AboutIndex() {
  return (
    <div>
      <p>
        I am <code>Harikrushna</code> <code>Patel</code>  🤯
      </p>
      <p>
        <strong>
          <Link to="..">
            Go back to the <code>/about</code> index.
          </Link>
        </strong>
      </p>
    </div>
  );
}
