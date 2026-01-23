import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Blog() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const { data } = matter(fs.readFileSync(filePath, "utf8"));

    if (!data.slug) {
      throw new Error(`Missing "slug" in frontmatter for ${file}`);
    }

    return {
      title: data.title,
      date: data.date,
      slug: data.slug,
    };
  }).sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <>
      <Header />
      <main>
        <section className="section">
          <div className="container">
            <h2>Blog</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {posts.map((post) => (
                <li key={post.slug} style={{ marginBottom: "1rem" }}>
                  <Link href={`/blog/${post.slug}`}>
                    <strong>{post.title}</strong> <br />
                    <small style={{ color: "#6b7280" }}>{post.date}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
