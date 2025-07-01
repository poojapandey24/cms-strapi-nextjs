"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogAPI } from "@/lib/api";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await blogAPI.getAllBlogs();
        console.log(response, "response");

        // Transform the API response to match our expected format
        const transformedBlogs =
          response.data?.map((blog) => {
            // Get image URL from Strapi response (handle both populated and null)
            let imageUrl = null;
            if (blog.image && typeof blog.image === "object") {
              // Strapi v4: image is an object or array
              if (Array.isArray(blog.image) && blog.image.length > 0) {
                imageUrl = blog.image[0]?.url;
              } else if (blog.image.url) {
                imageUrl = blog.image.url;
              }
            }
            return {
              id: blog.id,
              documentId: blog.documentId,
              slug: blog.slug || "",
              title: blog.title || "",
              category: "Blog",
              date: blog.publishedAt
                ? new Date(blog.publishedAt).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "",
              excerpt: blog.htmlContent
                ? blog.htmlContent.replace(/<[^>]*>/g, "").substring(0, 150) +
                  "..."
                : "",
              image: imageUrl, // Use Strapi image or null
              htmlContent: blog.htmlContent,
              cssContent: blog.cssContent,
              publishedAt: blog.publishedAt,
            };
          }) || [];

        setBlogs(transformedBlogs);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blog posts. Please try again later.");

        // Fallback to static data if API fails
        setBlogs([
          {
            slug: "customer-service-2025",
            title:
              "Customer Service Management Systems Explained: Features, Benefits & Best Picks For 2025",
            category: "Customer Service",
            date: "26 Jun 2025",
            excerpt:
              "In 2025, customer service is no longer just a support function. It's a key brand differentiator...",
            image: "/blog1.jpg",
          },
          {
            slug: "voice-ai-sla",
            title:
              "Voice AI's Role In Improving SLA Adherence For Customer Support",
            category: "AI & Automation",
            date: "25 Jun 2025",
            excerpt:
              "Did you know poor SLA adherence could be costing you your customers and millions in revenue?",
            image: "/blog2.jpg",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#030b1a] text-white min-h-screen">
        <Header />
        <main style={{ padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Latest Blog Posts
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "200px",
              fontSize: "1.1rem",
              color: "#666",
            }}
          >
            Loading blog posts...
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-[#030b1a] text-white min-h-screen">
        <Header />
        <main style={{ padding: "2rem" }}>
          <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
            Latest Blog Posts
          </h1>
          <div
            style={{
              padding: "1rem",
              backgroundColor: "#fff3cd",
              border: "1px solid #ffeaa7",
              borderRadius: "8px",
              color: "#856404",
              marginBottom: "1rem",
            }}
          >
            {error}
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#030b1a] text-white min-h-screen">
      <Header />
      <main style={{ padding: "2rem" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
          Latest Blog Posts
        </h1>
        <div
          style={{
            display: "grid",
            gap: "2rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          {blogs.map((blog) => (
            <Link
              key={blog.slug || blog.id}
              href={{ pathname: `/blog/${blog.slug}` }}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <article
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.05)",
                  transition:
                    "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 0 10px rgba(0,0,0,0.05)";
                }}
              >
                {blog.image ? (
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={600}
                    height={300}
                    style={{ objectFit: "cover", width: "100%" }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: 300,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "#f3f3f3",
                      color: "#888",
                      fontSize: "1.1rem",
                    }}
                  >
                    No image available
                  </div>
                )}
                <div style={{ padding: "1rem" }}>
                  <span
                    style={{
                      backgroundColor: "#fce4ec",
                      color: "#c2185b",
                      fontSize: "0.75rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "20px",
                      display: "inline-block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {blog.category}
                  </span>
                  <time style={{ fontSize: "0.8rem", color: "#888" }}>
                    {blog.date}
                  </time>
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      margin: "0.5rem 0",
                    }}
                  >
                    {blog.title}
                  </h2>
                  <p style={{ fontSize: "0.95rem", color: "#444" }}>
                    {blog.excerpt}
                  </p>
                  <span
                    style={{
                      color: "#e53935",
                      marginTop: "1rem",
                      display: "inline-block",
                      fontWeight: "bold",
                      textDecoration: "none",
                    }}
                  >
                    Read More →
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {blogs.length === 0 && !loading && !error && (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "#666",
            }}
          >
            No blog posts found.
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
