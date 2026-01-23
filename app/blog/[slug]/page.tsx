// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

interface Props {
  params: { slug: string };
}

export default function BlogPost({ params }: Props) {
  const slug = params.slug; // plain object now
  if (!slug) throw new Error("Missing slug param");

  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const fileName = files.find((file) => {
    const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));
    return data.slug === slug;
  });

  if (!fileName) throw new Error(`No Markdown file found for slug: ${slug}`);

  const { data, content } = matter(fs.readFileSync(path.join(postsDir, fileName), "utf8"));

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h2>{data.title}</h2>
            <small style={{ color: "#6b7280" }}>{data.date}</small>
            <div style={{ marginTop: "1.5rem", lineHeight: 1.7 }}>
              {content.split("\n\n").map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// Static params for SSG
export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  return files
    .map((file) => {
      const { data } = matter(fs.readFileSync(path.join(postsDir, file), "utf8"));
      if (!data.slug) return null;
      return { slug: data.slug };
    })
    .filter(Boolean) as { slug: string }[];
}
